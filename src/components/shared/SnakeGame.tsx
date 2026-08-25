"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 5;
const MIN_SPEED = 50;

type Point = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const INITIAL_SNAKE: Point[] = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
const INITIAL_DIRECTION: Direction = "UP";

export function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  // Use a ref to keep track of the latest direction to prevent rapid double-turns causing self-collision
  const directionRef = useRef(direction);

  const generateFood = useCallback((currentSnake: Point[]): Point => {
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // Make sure food doesn't spawn on the snake
      const isOnSnake = currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y);
      if (!isOnSnake) break;
    }
    return newFood;
  }, []);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood(generateFood(INITIAL_SNAKE));
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!isPlaying) return;
    
    // Prevent default scrolling for arrow keys
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
      e.preventDefault();
    }

    const currentDir = directionRef.current;
    
    switch (e.key) {
      case "ArrowUp":
      case "w":
      case "W":
        if (currentDir !== "DOWN") directionRef.current = "UP";
        break;
      case "ArrowDown":
      case "s":
      case "S":
        if (currentDir !== "UP") directionRef.current = "DOWN";
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        if (currentDir !== "RIGHT") directionRef.current = "LEFT";
        break;
      case "ArrowRight":
      case "d":
      case "D":
        if (currentDir !== "LEFT") directionRef.current = "RIGHT";
        break;
    }
  }, [isPlaying]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const currentDir = directionRef.current;
        setDirection(currentDir);

        const newHead = { ...head };

        switch (currentDir) {
          case "UP":
            newHead.y -= 1;
            break;
          case "DOWN":
            newHead.y += 1;
            break;
          case "LEFT":
            newHead.x -= 1;
            break;
          case "RIGHT":
            newHead.x += 1;
            break;
        }

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setIsGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setIsGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => {
            const newScore = s + 10;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // Remove tail if no food eaten
        }

        return newSnake;
      });
    };

    // Calculate dynamic speed based on score (gets faster as you eat)
    const currentSpeed = Math.max(MIN_SPEED, INITIAL_SPEED - Math.floor(score / 50) * SPEED_INCREMENT);
    
    const gameLoop = setInterval(moveSnake, currentSpeed);
    return () => clearInterval(gameLoop);
  }, [isPlaying, isGameOver, food, score, highScore, generateFood]);

  // Handle on-screen mobile controls
  const handleMobileControl = (dir: Direction) => {
    const currentDir = directionRef.current;
    if (dir === "UP" && currentDir !== "DOWN") directionRef.current = "UP";
    if (dir === "DOWN" && currentDir !== "UP") directionRef.current = "DOWN";
    if (dir === "LEFT" && currentDir !== "RIGHT") directionRef.current = "LEFT";
    if (dir === "RIGHT" && currentDir !== "LEFT") directionRef.current = "RIGHT";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-4 sm:p-6 glass rounded-3xl border border-border/50 shadow-2xl">
      
      {/* Header Info */}
      <div className="flex items-center justify-between w-full mb-6">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Score</span>
          <span className="text-3xl font-heading font-bold text-foreground">{score}</span>
        </div>
        
        {!isPlaying && !isGameOver && (
          <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-pulse">
            Ready to play?
          </div>
        )}
        
        <div className="flex flex-col items-end">
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Best</span>
          <span className="text-3xl font-heading font-bold text-primary">{highScore}</span>
        </div>
      </div>

      {/* Game Board Container */}
      <div className="relative aspect-square w-full max-w-md bg-black/15 dark:bg-muted/30 rounded-xl overflow-hidden border border-border/50 shadow-inner">
        
        {/* The Grid */}
        <div 
          className="absolute inset-0 grid"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_SIZE}, minmax(0, 1fr))`
          }}
        >
          {/* Render Snake */}
          {snake.map((segment, index) => {
            const isHead = index === 0;
            return (
              <div
                key={`${segment.x}-${segment.y}-${index}`}
                className={cn(
                  "m-[1px] rounded-sm transition-all duration-75",
                  isHead ? "bg-primary z-10" : "bg-primary/70"
                )}
                style={{
                  gridColumnStart: segment.x + 1,
                  gridRowStart: segment.y + 1,
                }}
              />
            );
          })}
          
          {/* Render Food */}
          <div
            className="m-[2px] rounded-full bg-destructive shadow-[0_0_10px_rgba(239,68,68,0.6)] animate-pulse"
            style={{
              gridColumnStart: food.x + 1,
              gridRowStart: food.y + 1,
            }}
          />
        </div>

        {/* Overlays */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20">
            {isGameOver ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-3xl font-heading font-bold text-destructive mb-2">Game Over!</h3>
                <p className="text-muted-foreground mb-6">You scored {score} points.</p>
                <button
                  onClick={startGame}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/30"
                >
                  <RotateCcw className="w-5 h-5" />
                  Play Again
                </button>
              </motion.div>
            ) : (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={startGame}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/30"
              >
                <Play className="w-6 h-6 fill-current" />
                Start Game
              </motion.button>
            )}
          </div>
        )}
      </div>

      {/* Mobile Controls (Only visible on small screens) */}
      <div className="mt-8 grid grid-cols-3 gap-2 w-full max-w-[200px] sm:hidden">
        <div />
        <button 
          onClick={() => handleMobileControl("UP")}
          className="p-4 bg-muted hover:bg-muted/80 rounded-xl flex items-center justify-center active:scale-95 transition-transform border border-border/50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
        <div />
        <button 
          onClick={() => handleMobileControl("LEFT")}
          className="p-4 bg-muted hover:bg-muted/80 rounded-xl flex items-center justify-center active:scale-95 transition-transform border border-border/50"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => handleMobileControl("DOWN")}
          className="p-4 bg-muted hover:bg-muted/80 rounded-xl flex items-center justify-center active:scale-95 transition-transform border border-border/50"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
        <button 
          onClick={() => handleMobileControl("RIGHT")}
          className="p-4 bg-muted hover:bg-muted/80 rounded-xl flex items-center justify-center active:scale-95 transition-transform border border-border/50"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Instructions */}
      <div className="mt-6 hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
        <span>Use <kbd className="px-2 py-1 bg-muted rounded border border-border font-mono">W A S D</kbd> or <kbd className="px-2 py-1 bg-muted rounded border border-border font-mono">Arrow Keys</kbd> to move</span>
      </div>
    </div>
  );
}
