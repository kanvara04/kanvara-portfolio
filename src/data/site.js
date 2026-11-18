import awardPhoto from "../assets/recognition/it-empowering-day-2026-award.png";
import gyoubuToolsStack from "../assets/projects/gyoubu-ai/tools-and-ai-stack.png";
import gyoubuSummaryInsight from "../assets/projects/gyoubu-ai/summary-insight.png";
import gyoubuMetadataDetails from "../assets/projects/gyoubu-ai/metadata-details.png";
import phishingCover from "../assets/projects/phishingcover.png";
import phishingResults from "../assets/projects/phishing-results.png";
import oracleThumb from "../assets/projects/oracle-ai-foundations.png";
import awsCloudThumb from "../assets/certificates/aws-cloud-foundations.png";

// -----------------------------------------------------------------------------
// Site content
// -----------------------------------------------------------------------------

export const profile = {
  name: "Kanvara Bonha",
  initials: "KB",
  role: "Computer Science Student",
  location: "Bangkae, Bangkok",
  email: "kanvara.bh@gmail.com",
  phone: "(+66) 801094562",
  phoneHref: "tel:+66801094562",
  linkedin: "https://www.linkedin.com/in/kanvara-bonha-548705411",
  linkedinLabel: "linkedin.com/in/kanvara-bonha",
  cv: "/documents/Kanvara-Bonha-CV.pdf",
  cvFilename: "Kanvara-Bonha-CV.pdf",
  bio: [
    "A Computer Science student at the School of Information Technology and Innovation, Bangkok University with a strong commitment to Data Analytics, Data Science, Data Engineering and Applied AI.",
    "Passionate about transforming complex, raw data into actionable insights.",
    "An eager learner who is always open to new challenges and highly enthusiastic about gaining hands-on experience to explore new tools and technologies.",
  ],
  highlights: [
    { label: "School", value: "Bangkok University" },
    { label: "Based in", value: "Bangkae, Bangkok" },
  ],
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "documents", label: "Certifications" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

// -----------------------------------------------------------------------------
// Projects
// -----------------------------------------------------------------------------

export const projects = [
  {
    slug: "gyoubu-ai",
    number: "01",
    title: "GYOUBU AI Project",
    category: "AI Conversation Intelligence",
    status: "In Progress",
    period: "Jan 2026 - Present",
    course: "CS 497 Computer Science Project I",
    role: "Backend Developer",
    roleSubtitle: "Core Logic & API Integration",
    roleDescription:
      "พัฒนา Backend Core Logic และเชื่อมต่อ API สำหรับวิเคราะห์บทสนทนาของ Call Center ด้วย AI",
    responsibilities: [
      "เชื่อมต่อ Typhoon AI สำหรับ Speech-to-Text และ Llama AI เพื่อวิเคราะห์บทสนทนาที่บันทึกไว้ของ Call Center",
      "พัฒนา Backend Logic เพื่อดึงรายละเอียดสินค้า ปัญหาที่รายงาน แนวทางแก้ไข และคะแนนประสิทธิภาพพนักงานจาก Transcript",
      "เรียนรู้และเชื่อมต่อโมเดล AI ใหม่เข้ากับระบบ API ที่ใช้งานได้ภายในระยะเวลาของโปรเจกต์",
      "รับฟัง Feedback จากอาจารย์ที่ปรึกษาและผู้ใช้งานอย่างต่อเนื่อง เพื่อปรับปรุงข้อกำหนดของ Backend ให้ตรงความต้องการ",
    ],
    description:
      "ระบบวิเคราะห์บทสนทนา Call Center ด้วย Typhoon AI และ Llama AI เพื่อสกัดรายละเอียดสินค้า ปัญหา แนวทางแก้ไข และคะแนนประสิทธิภาพพนักงาน",
    overview:
      "GYOUBU AI เป็นโปรเจกต์ในรายวิชา CS 497 Computer Science Project I พัฒนาด้วย TypeScript, Python, PostgreSQL และ REST APIs โดยเชื่อมต่อ Typhoon AI สำหรับถอดเสียง และ Llama AI สำหรับวิเคราะห์ Transcript พร้อมพัฒนา Backend Core Logic เพื่อดึงข้อมูลจากบทสนทนา",
    tags: ["TypeScript", "Python", "PostgreSQL", "REST APIs", "Typhoon AI", "Llama AI"],
    cover: gyoubuSummaryInsight,
    coverAlt: "Gyoubu AI dashboard screenshot",
    gallery: [
      {
        src: gyoubuToolsStack,
        alt: "Tools and AI stack used in Gyoubu AI",
        caption:
          "เครื่องมือและ AI stack ที่ใช้ในโปรเจกต์ GYOUBU AI",
        span: "full",
      },
      {
        src: gyoubuSummaryInsight,
        alt: "Gyoubu AI summary insight dashboard",
        caption:
          "หน้าจอสรุปผลการวิเคราะห์บทสนทนา Call Center",
        span: "half",
      },
      {
        src: gyoubuMetadataDetails,
        alt: "Gyoubu AI metadata and customer details",
        caption:
          "หน้าจอแสดง Metadata และรายละเอียดที่ได้จากการวิเคราะห์",
        span: "half",
      },
      {
        src: awardPhoto,
        alt: "Gyoubu AI team at IT Empowering Day 2026",
        caption:
          "ทีม GYOUBU AI ผ่านเข้ารอบ Finalist (Top 5) ในงาน IT Empowering Day in the Era of AI มหาวิทยาลัยกรุงเทพ ปี 2026",
        span: "full",
      },
    ],
    codeUrl: null,
    liveUrl: null,
    reportFile: "/documents/gyoubu-ai-full-report.pdf",
  },
  {
    slug: "phishing-website-detection",
    number: "02",
    title: "Phishing Website Detection",
    category: "Machine Learning & Cybersecurity",
    status: "Data Mining Project",
    period: "May 2026",
    role: "Data Analyst",
    roleSubtitle: "Dataset Analysis & Feature Interpretation",
    roleDescription:
      "วิเคราะห์ Dataset และตีความคุณลักษณะของข้อมูลสำหรับโมเดลตรวจจับเว็บไซต์ Phishing",
    responsibilities: [
      "วิเคราะห์ชุดข้อมูล PhiUSIIL จำนวน 188,636 URLs และ 51 features สำหรับโมเดล Random Forest ใน Weka",
      "วิเคราะห์และตีความ features ของชุดข้อมูลสำหรับโมเดลตรวจจับเว็บไซต์ Phishing",
      "โมเดลของทีมได้ Accuracy 99.9979% โดยมี 4 false positives และ 0 false negatives",
      "ใช้ Critical Thinking และ Problem Solving เพื่อประเมิน features และช่วยลด false negatives ให้เป็นศูนย์",
    ],
    description:
      "วิเคราะห์ชุดข้อมูล PhiUSIIL สำหรับโมเดล Random Forest ใน Weka โดยโมเดลของทีมได้ Accuracy 99.9979% มี 4 false positives และ 0 false negatives",
    overview:
      "โปรเจกต์ตรวจจับเว็บไซต์ Phishing โดยวิเคราะห์ข้อมูล PhiUSIIL จำนวน 188,636 URLs และ 51 features สำหรับโมเดล Random Forest ใน Weka รับผิดชอบด้าน Dataset Analysis และ Feature Interpretation โดยโมเดลของทีมได้ Accuracy 99.9979% มี 4 false positives และ 0 false negatives",
    tags: ["Weka", "Random Forest", "PhiUSIIL", "Data Mining", "Machine Learning"],
    cover: phishingCover,
    coverAlt: "Phishing detection model results",
    gallery: [
      {
        src: phishingResults,
        alt: "Phishing Website Detection evaluation results",
        span: "full",
      },
    ],
    codeUrl: null,
    liveUrl: null,
    reportFile: "/documents/phishing-detection-report.pdf",
  },
];

// -----------------------------------------------------------------------------
// Skills
// -----------------------------------------------------------------------------

export const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "C#"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "Vector Database", "SQLite"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Visual Studio", "Weka", "Docker"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Critical Thinking",
      "Adaptability",
      "Self Management",
      "Active Listening",
      "Problem Solving",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science",
  period: "2023 - Present",
  major: "Computer Science",
  school: "Bangkok University",
  gpax: "3.12",
};

// -----------------------------------------------------------------------------
// Documents & certificates
// -----------------------------------------------------------------------------

export const documents = [
  {
    id: "oracle-ai-foundations",
    number: "01",
    organization: "Oracle",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issued: "November 2025",
    image: oracleThumb,
    file: "/documents/Oracle-AI-Foundations-Certificate.pdf",
  },
  {
    id: "aws-cloud-foundations",
    number: "02",
    organization: "AWS Academy",
    title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issued: "September 2026",
    courseHours: "20 hours",
    credentialUrl: "https://www.credly.com/go/l0GW34Sl",
    image: awsCloudThumb,
    file: "/documents/AWS-Cloud-Foundations-Certificate.pdf",
  },
];

export const recognition = [
  {
    year: "2026",
    title: "Finalist (Top 5)",
    event: "Gyoubu - AI-Driven Industry Innovation",
    organization: "IT Empowering Day in the Era of AI · Bangkok University",
    description:
      "GYOUBU AI ได้รับคัดเลือกเป็น 1 ใน 5 โปรเจกต์จากผลงานที่ส่งเข้าร่วมทั่วมหาวิทยาลัย ในงาน IT Empowering Day in the Era of AI มหาวิทยาลัยกรุงเทพ ปี 2026 โดยได้รับการยอมรับถึงศักยภาพในการสร้างผลกระทบต่อกระบวนการทำงานในภาคอุตสาหกรรม",
    image: awardPhoto,
    imageAlt: "Gyoubu AI team at IT Empowering Day 2026",
  },
];
