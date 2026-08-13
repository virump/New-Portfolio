export interface Education {
  id: string;
  institution: string;
  institutionLogo: string;
  degree: string;
  major: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  location: string;
  courses: string[];
  projects: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  verified: boolean;
}

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "MGM College of Engineering & Technology",
    institutionLogo: "/images/universities/mgm.svg",
    degree: "Bachelor of Engineering",
    major: "Computer Engineering",
    startYear: 2023,
    endYear: 2027,
    location: "Kamothe, Navi Mumbai, India",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies",
      "Artificial Intelligence",
      "Cloud Computing",
    ],
    projects: [
      "Final Year: Aegis - A Unified AI Trust Platform For Reliable, Explainable and Secure LMMs (SDK).",
      "Third Year: CareBridge AI is a hybrid AI platform combining medical reasoning, deterministic rules, and IRDAI regulations to help consumers analyze policies, audit claim rejections, and compare health insurance plans.",
      "Second Year: SRS-Talent-Connect (Skilling Resources Solution) is a dynamic platform designed to bridge the gap between aspiring talent and opportunity.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issuerLogo: "/images/certs/aws.svg",
    date: "2023-08",
    credentialUrl: "https://aws.amazon.com/verification",
    credentialId: "AWS-SAA-12345",
    verified: true,
  },
  {
    id: "cert-2",
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    issuerLogo: "/images/certs/gcp.svg",
    date: "2022-11",
    credentialUrl: "https://google.com/cert/verify",
    credentialId: "GCP-DEV-67890",
    verified: true,
  },
  {
    id: "cert-3",
    name: "Meta React Developer Certificate",
    issuer: "Meta",
    issuerLogo: "/images/certs/meta.svg",
    date: "2022-04",
    credentialUrl: "https://coursera.org/verify",
    credentialId: "META-REACT-11111",
    verified: true,
  },
  {
    id: "cert-4",
    name: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    issuerLogo: "/images/certs/mongodb.svg",
    date: "2021-09",
    credentialUrl: "https://university.mongodb.com/verify",
    credentialId: "MDB-DEV-22222",
    verified: true,
  },
  {
    id: "cert-5",
    name: "Docker Certified Associate",
    issuer: "Docker",
    issuerLogo: "/images/certs/docker.svg",
    date: "2021-03",
    credentialUrl: "https://docker.com/verify",
    credentialId: "DCA-33333",
    verified: false,
  },
];
