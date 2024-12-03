import { ChapterType } from '@/lib/data/project2025/types';
import ExecutiveOfficeOfThePresidentRaw from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/raw.mdx';


const executiveOfficeOfThePresident: ChapterType = {
  chapterIdx: 2,
  title: "Executive Office of the President",
  chapterId: "executive-office-of-the-president",
  url: "/project2025/taking-the-reins-of-government/executive-office-of-the-president",
  emoji: "🗃️",
  description: "Outlines a strict hierarchical structure for managing the President's agenda, emphasizing centralized control and streamlined operations.",
  metadata: {
    authors: [
      {
        name: "Russ Vought",
        avatar: "https://example.com/images/authors/john-springfield.jpg", // Placeholder avatar
      },
    ],
    title: "Executive Office of the President",
    wordcount: 9_334,
    keywords: ["Hierarchy", "Centralization", "Executive Power", "Streamlined Operations"],
    status: "transcription", // Adjust as per current status
  },
  versions: {
    raw: ExecutiveOfficeOfThePresidentRaw,
  },
  summary: () => (
    <p>
      This chapter details the structural framework and goals for the Executive Office of the President, prioritizing efficiency
      through centralized decision-making. It explores the trade-offs of tightly controlled hierarchical management systems.
    </p>
  )
};

export default executiveOfficeOfThePresident;
