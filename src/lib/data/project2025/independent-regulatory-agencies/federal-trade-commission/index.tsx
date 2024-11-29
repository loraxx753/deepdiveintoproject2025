import { ChapterType } from '@/lib/data/project2025/types';

const federalTradeCommission: ChapterType = {
  chapterIdx: 28,
  title: "Federal Trade Commission",
  chapterId: "federal-trade-commission",
  url: "/project2025/independent-regulatory-agencies/federal-trade-commission",
  emoji: "⚖️",
  description: "Aims to reduce competition regulations, potentially favoring large corporations.",
  metadata: {
    authors: [
      {
        name: "Eleanor Rivers",
        avatar: "https://example.com/images/authors/eleanor-rivers.jpg",
      },
    ],
    title: "Federal Trade Commission",
    wordcount: 6100,
    keywords: ["FTC Reform", "Market Competition", "Deregulation"],
    status: "transcription",
  },
  summary: () => (
    <p>
      This chapter proposes changes to the Federal Trade Commission, emphasizing reduced competition
      regulations and favoring market-driven solutions. The reforms could lead to larger corporate
      monopolies and diminished consumer protections.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes reference key antitrust cases and the evolving role of the FTC in market regulation.
    </p>
  ),
};

export default federalTradeCommission;
