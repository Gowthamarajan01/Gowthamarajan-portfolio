export type ProjectCategory = "Web" | "Blockchain" | "AI/ML" | "Embedded";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  longDescription: string;
  stack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  timeline: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  /** Placeholder gallery slots — replace with real screenshots in /public/images/projects */
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "skill-credentialing",
    title: "Blockchain Skill Credentialing Platform",
    category: "Blockchain",
    year: "2025",
    description:
      "Secure issuance and verification of digital skill certificates using cryptographic hashing and unique credential IDs.",
    longDescription:
      "A platform that lets institutions issue tamper-evident digital skill certificates and lets anyone verify them instantly. Every credential is hashed and assigned a unique ID, so authenticity can be checked without contacting the issuer directly. The system separates admin issuance flows from a public verification flow, and ships with a responsive interface for both.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Blockchain"],
    features: [
      "Cryptographic hashing for tamper-evident credentials",
      "Unique credential IDs for instant public verification",
      "Role-based admin dashboard for issuing certificates",
      "Responsive verification interface for end users",
    ],
    challenges: [
      "Designing a hashing and ID scheme that stays verifiable without a central lookup bottleneck",
      "Keeping the admin issuance flow simple while enforcing strict data integrity",
    ],
    learnings: [
      "Applying blockchain-style integrity guarantees without over-engineering the stack",
      "Structuring a Node/Express API around verification as a first-class read path",
    ],
    timeline: "6 weeks",
      githubUrl: "https://github.com/Gowthamarajan01/Blockchain-Goverment-PII",
    featured: true,
    gallery: [],
  },
  {
    id: "seed-quality-tester",
    title: "Seed Quality Tester and Separator",
    category: "Embedded",
    year: "2024",
    description:
      "Automated seed inspection system using image processing for defect detection and mechanical separation with vibration alignment.",
    longDescription:
      "An embedded vision system built on an ESP32-CAM that inspects seeds in real time, flags defective ones using OpenCV-based image processing, and drives a servo-controlled mechanical separator. A vibration feed aligns seeds one at a time under the camera before classification, closing the loop between perception and mechanical action.",
    stack: ["ESP32-CAM", "Python", "OpenCV", "Embedded Systems", "Servo Motor"],
    features: [
      "Real-time defect detection via OpenCV image processing",
      "Vibration-based feed alignment for consistent inspection",
      "Servo-driven mechanical separation of defective seeds",
      "Low-cost ESP32-CAM hardware pipeline",
    ],
    challenges: [
      "Getting reliable classification under variable lighting on low-cost camera hardware",
      "Synchronizing image capture, classification, and servo actuation in real time",
    ],
    learnings: [
      "Practical constraints of running vision pipelines on embedded hardware",
      "Coupling a software classification pipeline to a physical actuation system",
    ],
    timeline: "8 weeks",
    githubUrl: "https://github.com/Gowthamarajan01/Blockchain-Goverment-PII",
    featured: true,
    gallery: [],
  },
  {
    id: "blockchain-government-pii",
    title: "Blockchain Government PII",
    category: "Blockchain",
    year: "2025",
    description:
      "Secure PII storage and citizen identity verification for government records, backed by blockchain-based immutable storage and smart contracts.",
    longDescription:
      "A system for storing and verifying citizens' personally identifiable information (PII) that puts blockchain immutability behind government-grade identity records. Citizen identity data is stored so records can't be silently altered after the fact, government authorities are authenticated before they can query or update anything, and a smart contract layer enforces who can read, write, or verify a given record.",
    stack: ["Blockchain", "Smart Contracts", "React", "Node.js"],
    features: [
      "Secure PII storage and management",
      "Blockchain-based immutable records",
      "Citizen identity verification",
      "Government authority authentication",
      "Smart contract integration",
    ],
    challenges: [
      "Balancing immutability with the need to correct or update sensitive citizen records",
      "Designing authentication strong enough to gate government-authority access without slowing verification down",
      "Keeping PII itself off-chain (or encrypted on-chain) while still anchoring integrity proofs to the blockchain",
      "Structuring smart contracts so access control logic stays auditable as rules evolve",
    ],
    learnings: [
      "Trade-offs between on-chain immutability and real-world data correction needs",
      "Designing role-based smart contract access control for a multi-party system",
    ],
    timeline: "7 weeks",
    githubUrl: "https://github.com/Gowthamarajan01/Blockchain-Goverment-PII",
    featured: false,
    gallery: [],
  },
  {
    id: "v8-alcohol-detection-lock",
    title: "V8 Engine with Alcohol Detection and Engine Locking System",
    category: "Embedded",
    year: "2024",
    description:
      "A microcontroller-based safety system that detects driver alcohol levels in real time and automatically locks the engine under unsafe conditions.",
    longDescription:
      "An embedded safety system that continuously monitors alcohol levels near the driver and makes an automated decision to prevent engine operation when levels cross a safe threshold. Detection, decision-making, and engine locking all run on a microcontroller with no manual override, backed by an immediate warning indicator so the driver knows why the vehicle won't start.",
    stack: ["Microcontroller", "Embedded Systems", "Alcohol Sensor", "Relay Control"],
    features: [
      "Real-time alcohol-level detection",
      "Automatic engine locking during unsafe conditions",
      "Prevents engine operation when alcohol is detected",
      "Microcontroller-based automated decision-making",
      "Immediate warning indication",
    ],
    challenges: [
      "Filtering sensor noise so ambient fumes don't trigger false positives",
      "Setting a threshold that reliably catches unsafe conditions without nuisance lockouts",
      "Failing safe: making sure a sensor fault locks the system conservatively rather than silently disabling protection",
      "Driving a relay/ignition-lock circuit safely from low-power microcontroller logic",
    ],
    learnings: [
      "Designing fail-safe decision logic for a safety-critical embedded system",
      "Calibrating gas-sensor thresholds against real-world false-positive sources",
    ],
    timeline: "5 weeks",
      githubUrl: "https://github.com/Gowthamarajan01/Blockchain-Goverment-PII",
    featured: false,
    gallery: [],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Web",
  "Blockchain",
  "AI/ML",
  "Embedded",
];
