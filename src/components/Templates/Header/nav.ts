import { sections } from "@/lib/data/project2025";
console.log(sections)
// const sectionNav = sections.map((section: SectionType) => ([{
//       section: "Taking the Reins of Government",
//       emoji: "👑",
//       url: "/project2025/taking-the-reins-of-government",
//       description: "Consolidating power from the top.",
//       chapters: [
//         {
//           number: 1,
//           title: "White House Office",
//           emoji: "🏛️",
//           url: "/project2025/taking-the-reins-of-government/white-house-office",
//           description: "Restructure the White House to centeralize power.",
//         },
//         {
//           number: 2,
//           title: "Executive Office of the President",
//           emoji: "🗃️",
//           url: "/project2025/taking-the-reins-of-government/executive-office-of-the-president",
//           description: "Outlines a strict hierarchical structure for managing the President's agenda.",
//         },
//         {
//           number: 3,
//           title: "Central Personnel Agencies",
//           emoji: "📇",
//           url: "/project2025/taking-the-reins-of-government/central-personnel-agencies",
//           description: "Proposes reforms to align the federal workforce with ideological goals, potentially sidelining career professionals.",
//         },
//       ],
//     },
//     {
//       section: "The Common Defense",
//       emoji: "⚔️",
//       url: "/project2025/the-common-defense",
//       description: "Security at any cost.",
//       chapters: [
//         {
//           number: 4,
//           title: "Department of Defense",
//           emoji: "🛡️",
//           url: "/project2025/the-common-defense/department-of-defense",
//           description: "Prioritizes military expansion and executive control over defense policies.",
//         },
//         {
//           number: 5,
//           title: "Department of Homeland Security",
//           emoji: "🚨",
//           url: "/project2025/the-common-defense/department-of-homeland-security",
//           description: "Recommends aggressive border security measures with limited attention to humanitarian concerns.",
//         },
//         {
//           number: 6,
//           title: "Department of State",
//           emoji: "🌍",
//           url: "/project2025/the-common-defense/department-of-state",
//           description: "Proposes a streamlined diplomatic approach that may prioritize ideology over international relationships.",
//         },
//         {
//           number: 7,
//           title: "Intelligence Community",
//           emoji: "🔍",
//           url: "/project2025/the-common-defense/intelligence-community",
//           description: "Advocates for centralized intelligence operations with reduced transparency.",
//         },
//         {
//           number: 8,
//           title: "Media Agencies",
//           emoji: "📺",
//           url: "/project2025/the-common-defense/media-agencies",
//           description: "Suggests restructuring media agencies to align with government messaging goals.",
//         },
//         {
//           number: 9,
//           title: "Agency for International Development",
//           emoji: "🌐",
//           url: "/project2025/the-common-defense/agency-for-international-development",
//           description: "Focuses on reforming aid distribution to reflect administration priorities, potentially sidelining global needs.",
//         },
//       ],
//     },
//     {
//       section: "The General Welfare",
//       emoji: "🌱",
//       url: "/project2025/the-general-welfare",
//       description: "Deregulation at the public's expense.",
//       chapters: [
//         {
//           number: 10,
//           title: "Department of Agriculture",
//           emoji: "🌾",
//           url: "/project2025/the-general-welfare/department-of-agriculture",
//           description: "Promotes deregulation in agriculture, raising concerns about environmental and safety standards.",
//         },
//         {
//           number: 11,
//           title: "Department of Education",
//           emoji: "📚",
//           url: "/project2025/the-general-welfare/department-of-education",
//           description: "Advocates for reduced federal oversight, risking equity in educational access.",
//         },
//         {
//           number: 12,
//           title: "Department of Energy",
//           emoji: "⚡",
//           url: "/project2025/the-general-welfare/department-of-energy",
//           description: "Focuses on energy independence, potentially at the cost of environmental protections.",
//         },
//         {
//           number: 13,
//           title: "Environmental Protection Agency",
//           emoji: "🌳",
//           url: "/project2025/the-general-welfare/environmental-protection-agency",
//           description: "Proposes scaling back environmental regulations, prioritizing industry needs.",
//         },
//         {
//           number: 14,
//           title: "Department of Health and Human Services",
//           emoji: "🏥",
//           url: "/project2025/the-general-welfare/department-of-health-and-human-services",
//           description: "Emphasizes cost-cutting measures that may limit healthcare accessibility.",
//         },
//         {
//           number: 15,
//           title: "Department of Housing and Urban Development",
//           emoji: "🏘️",
//           url: "/project2025/the-general-welfare/department-of-housing-and-urban-development",
//           description: "Advocates for decentralizing housing programs, raising concerns about equity.",
//         },
//         {
//           number: 16,
//           title: "Department of the Interior",
//           emoji: "🏜️",
//           url: "/project2025/the-general-welfare/department-of-the-interior",
//           description: "Promotes deregulation of land management, prioritizing resource extraction.",
//         },
//         {
//           number: 17,
//           title: "Department of Justice",
//           emoji: "⚖️",
//           url: "/project2025/the-general-welfare/department-of-justice",
//           description: "Focuses on aligning the DOJ with executive priorities, potentially reducing independence.",
//         },
//         {
//           number: 18,
//           title: "Department of Labor",
//           emoji: "🛠️",
//           url: "/project2025/the-general-welfare/department-of-labor",
//           description: "Proposes reforms that may weaken worker protections in favor of business interests.",
//         },
//       ],
//     },
//     {
//       section: "The Economy",
//       emoji: "💰",
//       url: "/project2025/the-economy",
//       description: "Restricting access to the free market.",
//       chapters: [
//         {
//           number: 19,
//           title: "Department of Commerce",
//           emoji: "🏢",
//           url: "/project2025/the-economy/department-of-commerce",
//           description: "Aims to streamline commerce policies with a focus on deregulation.",
//         },
//         {
//           number: 20,
//           title: "Department of the Treasury",
//           emoji: "💵",
//           url: "/project2025/the-economy/department-of-the-treasury",
//           description: "Recommends tax reforms favoring high-income earners and corporations.",
//         },
//         {
//           number: 21,
//           title: "Export–Import Bank",
//           emoji: "✈️",
//           url: "/project2025/the-economy/export-import-bank",
//           description: "Debates the merits of abolishing or retaining the Export–Import Bank.",
//         },
//         {
//           number: 22,
//           title: "Federal Reserve",
//           emoji: "📉",
//           url: "/project2025/the-economy/federal-reserve",
//           description: "Proposes reforms to the Federal Reserve aimed at deregulation.",
//         },
//         {
//           number: 23,
//           title: "Small Business Administration",
//           emoji: "🛍️",
//           url: "/project2025/the-economy/small-business-administration",
//           description: "Focuses on empowering entrepreneurs, with limited support for marginalized groups.",
//         },
//         {
//           number: 24,
//           title: "Trade",
//           emoji: "🌐",
//           url: "/project2025/the-economy/trade",
//           description: "Presents conflicting approaches to trade, favoring free-market solutions.",
//         },
//       ],
//     },
//     {
//       section: "Independent Regulatory Agencies",
//       emoji: "🏦",
//       url: "/project2025/independent-regulatory-agencies",
//       description: "Removing independence, dismantling protections.",
//       chapters: [
//         {
//           number: 25,
//           title: "Financial Regulatory Agencies",
//           emoji: "🏦",
//           url: "/project2025/independent-regulatory-agencies/financial-regulatory-agencies",
//           description: "Proposes reforms to reduce consumer protections in financial systems.",
//         },
//         {
//           number: 26,
//           title: "Federal Communications Commission",
//           emoji: "📡",
//           url: "/project2025/independent-regulatory-agencies/federal-communications-commission",
//           description: "Focuses on deregulating media and telecommunications industries.",
//         },
//         {
//           number: 27,
//           title: "Federal Election Commission",
//           emoji: "🗳️",
//           url: "/project2025/independent-regulatory-agencies/federal-election-commission",
//           description: "Suggests reforms that could increase the role of money in politics.",
//         },
//         {
//           number: 28,
//           title: "Federal Trade Commission",
//           emoji: "⚖️",
//           url: "/project2025/independent-regulatory-agencies/federal-trade-commission",
//           description: "Aims to reduce competition regulations, potentially favoring large corporations.",
//         },
//       ],
//     },
//   ])
// );

const sectionNav = sections
  
  
export default [
  {
    page: "Contribute",
    url: "/contribute",
  },
  {
        page: "Explore Project 2025",
        url: "/project2025",
        children: sectionNav,
    },
    {
        page: "FAQ",
        url: "/faq",
    }
]