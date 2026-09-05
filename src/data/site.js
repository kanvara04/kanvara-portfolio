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
    "Hi, I’m Kanvara — a Computer Science student at the School of Information Technology and Innovation, Bangkok University.",
    "My interests center on data analytics, data science, data engineering, and applied AI. I enjoy transforming complex, raw data into insights that can support real decisions.",
    "I’m an eager learner who is open to new challenges and hands-on experience, especially opportunities that let me explore new tools and technologies.",
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
    title: "GIEWBU AI Project",
    category: "AI Conversation Intelligence",
    status: "In Progress",
    period: "Jan 2026 - Present",
    course: "CS 497 Computer Science Project I",
    role: "AI Pipeline & Speech Processing",
    roleSubtitle: "Backend Developer · Core Logic & API Integration",
    roleDescription:
      "รับผิดชอบส่วน AI และ Backend Core Logic ของระบบ ตั้งแต่การเชื่อมต่อโมเดลถอดเสียง การส่ง Transcript เข้าสู่โมเดลภาษา ไปจนถึงการจัดโครงสร้างผลวิเคราะห์สำหรับ API และ Dashboard",
    responsibilities: [
      "เชื่อมต่อ Typhoon AI สำหรับ Speech-to-Text และ Llama AI สำหรับวิเคราะห์บทสนทนาจากไฟล์เสียง Call Center",
      "พัฒนา Backend Logic เพื่อดึงข้อมูลสินค้า ปัญหาที่ลูกค้าแจ้ง แนวทางแก้ไข และคะแนนประสิทธิภาพของพนักงานจาก Transcript",
      "จัดโครงสร้างผลลัพธ์จาก AI ให้พร้อมเชื่อมต่อกับ API และนำไปแสดงผลต่อใน Dashboard",
      "เรียนรู้และทดลองโมเดล AI ใหม่ภายในระยะเวลาโครงการ พร้อมปรับ Backend Requirement จาก Feedback ของอาจารย์ที่ปรึกษาและผู้ใช้งาน",
    ],
    description:
      "ระบบ AI สำหรับถอดเสียงและวิเคราะห์บทสนทนาจากศูนย์บริการลูกค้า โดยนำ Transcript ไปวิเคราะห์ข้อมูลสินค้า ปัญหาที่รายงาน แนวทางแก้ไข และประสิทธิภาพของพนักงาน เพื่อสรุปเป็นข้อมูลที่ทีมสามารถนำไปใช้ติดตามและปรับปรุงการบริการได้",
    overview:
      "Gyoubu AI เป็นโครงการในรายวิชา CS 497 Computer Science Project I ที่พัฒนาระบบสำหรับประมวลผลบทสนทนาจาก Call Center โดยเชื่อมต่อ Typhoon AI สำหรับ Speech-to-Text และ Llama AI สำหรับวิเคราะห์ Transcript จากนั้น Backend จะจัดโครงสร้างข้อมูลสำคัญ เช่น รายละเอียดสินค้า ปัญหาที่ลูกค้าแจ้ง แนวทางแก้ไข และคะแนนประสิทธิภาพของพนักงาน เพื่อส่งต่อให้ส่วนแสดงผลและนำไปใช้วิเคราะห์เชิงธุรกิจต่อได้",
    tags: ["Python", "Typhoon AI", "Llama AI", "Speech-to-Text", "API Integration", "Backend Logic"],
    cover: gyoubuSummaryInsight,
    coverAlt: "Gyoubu AI dashboard screenshot",
    gallery: [
      {
        src: gyoubuToolsStack,
        alt: "Tools and AI stack used in Gyoubu AI",
        caption:
          "ภาพรวมเครื่องมือและ AI stack ที่ใช้ในระบบสำหรับประมวลผลเสียง วิเคราะห์บทสนทนา และเชื่อมต่อผลลัพธ์เข้ากับ Backend และ Dashboard",
        span: "full",
      },
      {
        src: gyoubuSummaryInsight,
        alt: "Gyoubu AI summary insight dashboard",
        caption:
          "ตัวอย่างหน้าจอสรุปผลการวิเคราะห์บทสนทนา เพื่อให้ทีมสามารถดูประเด็นสำคัญและข้อมูลที่นำไปใช้ติดตามงานต่อได้ง่ายขึ้น",
        span: "half",
      },
      {
        src: gyoubuMetadataDetails,
        alt: "Gyoubu AI metadata and customer details",
        caption:
          "ตัวอย่างข้อมูล Metadata และรายละเอียดที่ระบบจัดโครงสร้างจากบทสนทนาเพื่อใช้ประกอบการวิเคราะห์ใน Dashboard",
        span: "half",
      },
      {
        src: awardPhoto,
        alt: "Gyoubu AI team at IT Empowering Day 2026",
        caption:
          "Gyoubu AI ได้รับคัดเลือกเป็น Finalist (Top 5) ในงาน IT Empowering Day in the Era of AI ของมหาวิทยาลัยกรุงเทพ ปี 2026",
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
      "รับผิดชอบการวิเคราะห์ชุดข้อมูลและตีความคุณลักษณะของข้อมูลสำหรับโมเดลตรวจจับเว็บไซต์ฟิชชิง รวมถึงการประเมินผลลัพธ์ของโมเดลเพื่อดูความเหมาะสมในการใช้งาน",
    responsibilities: [
      "วิเคราะห์ชุดข้อมูล PhiUSIIL จำนวน 188,636 URLs และ 51 features สำหรับการจำแนกเว็บไซต์ฟิชชิง",
      "ใช้ Random Forest ใน Weka เพื่อสร้างและประเมินโมเดล Machine Learning",
      "วิเคราะห์ผลลัพธ์ของโมเดลที่ทำ Accuracy ได้ 99.9979% โดยมี 4 false positives และ 0 false negatives",
      "ใช้ Critical Thinking และ Problem Solving ในการตีความ features และให้ความสำคัญกับการลด false negatives ให้อยู่ที่ศูนย์",
    ],
    description:
      "โครงการวิเคราะห์เว็บไซต์ฟิชชิงจากชุดข้อมูล PhiUSIIL จำนวน 188,636 URLs และ 51 คุณลักษณะ โดยใช้ Random Forest ใน Weka เพื่อจำแนกเว็บไซต์ที่มีความเสี่ยงออกจากเว็บไซต์ปกติ และประเมินผลจากค่าความแม่นยำของโมเดล",
    overview:
      "โปรเจกต์นี้มุ่งวิเคราะห์คุณลักษณะของ URL และสร้างโมเดล Random Forest สำหรับตรวจจับเว็บไซต์ฟิชชิงจากข้อมูลขนาดใหญ่ ผลลัพธ์ของทีมมี Accuracy 99.9979% โดยพบ false positives 4 รายการและ false negatives 0 รายการ ซึ่งสะท้อนว่าการเลือกและตีความ features สามารถช่วยลดความเสี่ยงจากการพลาดเว็บไซต์ฟิชชิงได้อย่างมีประสิทธิภาพ",
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
    skills: ["Python", "JavaScript", "TypeScript", "CSS", "C#", "Dart"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Vector Database", "SQLite"],
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
    issued: "September 04, 2026",
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
      "โปรเจกต์ Gyoubu AI ได้รับคัดเลือกเป็นหนึ่งใน 5 ผลงานสุดท้ายจากผลงานที่ส่งเข้าร่วมภายในมหาวิทยาลัย โดยได้รับการยอมรับจากศักยภาพของแนวคิดในการนำ AI ไปประยุกต์ใช้กับกระบวนการทำงานในภาคอุตสาหกรรม",
    image: awardPhoto,
    imageAlt: "Gyoubu AI team at IT Empowering Day 2026",
  },
];
