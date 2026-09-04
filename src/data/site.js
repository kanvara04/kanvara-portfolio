import awardPhoto from "../assets/recognition/it-empowering-day-2026-award.png";
import gyoubuToolsStack from "../assets/projects/gyoubu-ai/tools-and-ai-stack.png";
import gyoubuSummaryInsight from "../assets/projects/gyoubu-ai/summary-insight.png";
import gyoubuMetadataDetails from "../assets/projects/gyoubu-ai/metadata-details.png";
import phishingdetails from "../assets/projects/phishingcover.png";
import phisingresults from "../assets/projects/phishing-results.png";
import oracleThumb from "../assets/projects/oracle-ai-foundations.png";

// -----------------------------------------------------------------------------
// Site content
// -----------------------------------------------------------------------------

export const profile = {
  name: "Kanvara Bonha",
  initials: "KB",
  role: "Computer Science Student",
  location: "Bangkok, Thailand",
  school: "Bangkok University",
  gpax: "3.12",
  email: "kanvara.bh@gmail.com",
  linkedin: "https://www.linkedin.com/in/kanvara-bonha-548705411",
  linkedinLabel: "linkedin.com/in/kanvara-bonha",
  cv: "/documents/Kanvara-Bonha-CV.pdf",
  cvFilename: "Kanvara-Bonha-CV.pdf",
  bio: [
    "Hi, I’m Kanvara — a Computer Science student at Bangkok University’s Faculty of Information Technology and Innovation.",
    "My focus sits around data analytics, data science, data engineering, and applied AI. I like turning messy, real-world data into something a team can actually act on.",
    "I’m an eager learner who’s always open to new challenges, hands-on experience, and exploring tools I haven’t touched yet.",
  ],
  highlights: [
    { label: "School", value: "Bangkok University" },
    { label: "Based in", value: "Bangkok, Thailand" },
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
    title: "Gyoubu AI",
    category: "AI Conversation Intelligence",
    status: "Best AI Prototype Award",
    description:
      "ระบบ AI สำหรับถอดเสียงบทสนทนาจากไฟล์เสียงของศูนย์บริการลูกค้า พร้อมวิเคราะห์อารมณ์ เจตนาการโทร แบรนด์และหมวดหมู่สินค้า ให้คะแนนคุณภาพบริการ (QA Score) และพยากรณ์ความพึงพอใจของลูกค้า (CSAT) ก่อนสรุปเป็นรายงานที่นำไปพัฒนาคุณภาพการให้บริการได้จริง",
    overview:
      "โครงการนี้เริ่มจากโจทย์ของศูนย์บริการลูกค้าธุรกิจเครื่องนอนที่มีไฟล์เสียงสะสมจำนวนมากแต่ไม่มีเวลามานั่งฟังทีละสาย Gyoubu AI จึงถูกออกแบบเป็น AI Voice Intelligence System ที่ถอดเสียงด้วย Typhoon ASR / Whisper large-v3 แยกผู้พูดด้วย pyannote แล้ววิเคราะห์เชิงลึกด้วย Llama 3.3 70B ผ่าน Groq Cloud ก่อนแสดงผลเป็น Dashboard และรายงานที่ทีมงานนำไปใช้ปรับปรุงคุณภาพบริการได้ทันที โครงงานนี้ได้รับรางวัล Best AI Prototype for Real-World Impact Award จากงาน IT Empowering Day 2026 in the Era of AI ของมหาวิทยาลัยกรุงเทพ",
    tags: ["Python" , "FastAPI" , "Whisper" , "Typhoon ASR" , "Llama 3.3" , "pyannote" , "Next.js"],
    cover: gyoubuSummaryInsight,
    coverAlt: "Gyoubu AI dashboard screenshot",
    gallery: [
      {
        src: gyoubuToolsStack,
        alt: "Tools และ AI ที่ใช้ในโปรเจกต์ Gyoubu AI",
        caption:
          "สแต็กเทคโนโลยีของระบบ ฝั่ง Backend ใช้ FastAPI , Uvicorn , SQLite ฝั่ง Frontend ใช้ Next.js , React , Tailwind CSS และฝั่ง AI ใช้ Typhoon ASR , Groq Whisper large-v3 , Llama 3.3 70B และ pyannote สำหรับแยกผู้พูด",
        span: "full",
      },
      {
        src: gyoubuSummaryInsight,
        alt: "หน้าจอ Summary Insight วิเคราะห์บทสนทนาด้วย Llama 3.3",
        caption:
          "ผลวิเคราะห์บทสนทนาด้วย Llama 3.3 — ตรวจจับหัวข้อ เจตนา คีย์เวิร์ดและความผิดปกติ พร้อมสรุป Key Insightและสิ่งที่ควรทำต่อให้ทีมงานอ่านได้ทันที",
        span: "half",
      },
      {
        src: gyoubuMetadataDetails,
        alt: "หน้าจอ Metadata และข้อมูลการรับประกันของลูกค้า",
        caption:
          "ข้อมูล Metadata ของสาย (Agent,แบรนด์,สินค้า,QA Score,CSAT) เชื่อมโยงกับข้อมูลการรับประกันของลูกค้าในหน้าเดียวกัน",
        span: "half",
      },
      {
        src: awardPhoto,
        alt: "ทีม Gyoubu AI รับรางวัล Best AI Prototype for Real-World Impact Award",
        caption:
          "ทีมงาน Gyoubu AI รับรางวัล Best AI Prototype for Real-World Impact Award จากงาน IT Empowering Day 2026 in the Era of AI มหาวิทยาลัยกรุงเทพ",
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
    description:
      "โครงการจำแนกเว็บไซต์ฟิชชิงด้วยอัลกอริทึม Random Forest โดยวิเคราะห์ข้อมูล URL จำนวน 188,636 รายการจาก 51 คุณลักษณะ พร้อมประเมินประสิทธิภาพของโมเดลด้วย Accuracy, Precision, Recall และ F1-score เพื่อแยกเว็บไซต์ที่มีความเสี่ยงออกจากเว็บไซต์ปกติ",
    overview:
      "โปรเจกต์นี้เปรียบเทียบแนวทาง data mining หลายแบบเพื่อจำแนกเว็บไซต์ฟิชชิงออกจากเว็บไซต์ปกติ โดยใช้ Random Forest เป็นโมเดลหลักและวัดผลด้วยชุดตัวชี้วัดมาตรฐาน เพื่อให้มั่นใจว่าโมเดลใช้งานได้จริงกับข้อมูล URL ขนาดใหญ่",
    tags: ["Weka", "Random Forest", "Data Mining", "Machine Learning"],
    cover: phishingdetails,
    coverAlt: "Phishing detection model results",
    
    gallery: [
      {
        src: phisingresults,
        alt: "รายละเอียดโครงการ Phishing Detection",
        span: "full",
      }
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
    skills: ["Python", "JavaScript", "TypeScript", "CSS", "C#", "Dart"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Vector Database", "SQLite"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Weka",
      "Docker",
    ],
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
  period: "2023 — Present",
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
    type: "Certificate",
    number: "01", 
    organization: "ORACLE UNIVERSITY", 
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", 
    issued: "Nov 07, 2025", 
    validUntil: "Nov 07, 2027", 
    image: oracleThumb, 
    file: "/documents/Oracle-AI-Foundations-Certificate.pdf",
  },
];

export const recognition = [
  {
    year: "2026",
    title: "Best AI Prototype for Real-World Impact Award",
    event: "IT Empowering Day 2026 in the Era of AI",
    organization: "Bangkok University",
    description:
      "โปรเจกต์ Gyoubu AI ได้รับรางวัล Best AI Prototype for Real-World Impact Award จากงาน IT Empowering Day 2026 in the Era of AI ซึ่งจัดโดยคณะเทคโนโลยีสารสนเทศและนวัตกรรม มหาวิทยาลัยกรุงเทพ โดยพิจารณาจากแนวคิดการประยุกต์ใช้ AI วิเคราะห์บทสนทนาเสียงเพื่อสร้างข้อมูลเชิงลึกที่นำไปใช้ได้จริงในภาคธุรกิจ",
    image: awardPhoto,
    imageAlt: "ทีม Gyoubu AI รับรางวัล Best AI Prototype for Real-World Impact Award",
  },
];