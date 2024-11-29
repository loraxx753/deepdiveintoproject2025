import { ChapterType } from '@/lib/data/project2025/types';

const smallBusinessAdministration: ChapterType = {
  chapterIdx: 23,
  title: "Small Business Administration",
  chapterId: "small-business-administration",
  url: "/project2025/the-economy/small-business-administration",
  emoji: "🛍️",
  description: "Focuses on empowering entrepreneurs, with limited support for marginalized groups.",
  metadata: {
    authors: [
      {
        name: "Angela D. Knight",
        avatar: "https://example.com/images/authors/angela-d-knight.jpg", // Placeholder avatar
      },
    ],
    title: "Small Business Administration",
    wordcount: 5520, // Example word count; update with actual value.
    keywords: ["Small Business", "Entrepreneurship", "Deregulation", "Economic Growth"],
    status: "undone",
  },
  summary: () => (
    <p>
      This chapter outlines reforms aimed at empowering entrepreneurs through deregulation and streamlined support,
      with limited attention to inclusivity or marginalized communities.
    </p>
  ),
  endnotes: () => (
    <p>
      References include data on small business growth and critiques of current SBA policies.
    </p>
  ),
};

export default smallBusinessAdministration;
