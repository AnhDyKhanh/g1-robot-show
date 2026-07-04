import { Feature, SpecRow, Review, FAQItem } from "@/types/types";

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDssn0SzuRTGC1x7yyxtyq3LwuYiTakKrfOSAGBmNoklClVVLwujExRD1nsYxywz3Z6n06y0dygYIHPtcxR3yb4srV9vI7KU6S78KfJsTvXRPdTkPGIw1LkqLIvK6W_ENHEKtjdM_CrWD1iaTuZfEaX00DfkVtfKkstMMU9kIJCXfdHn4ZQZwKCTxPsSnRlFQYvv6Ng-lj-zJCQ9q_vdTdFmUv30LfSNRApah1gBysnfxU5yyYMP65ByPUKfeJTr2aYDnAz0mKmwqM";

export const FEATURES: Feature[] = [
  {
    id: "walking",
    title: "Advanced Walking",
    description:
      "Self-balancing algorithms that navigate uneven terrain and stairs with human-like fluidity.",
    iconName: "Footprints",
  },
  {
    id: "ai-motion",
    title: "AI Motion Control",
    description:
      "Deep reinforcement learning enables real-time adaptation to complex environments and task-oriented motion.",
    iconName: "Brain",
  },
  {
    id: "actuators",
    title: "High-Torque Actuators",
    description:
      "Joints powered by custom Unitree actuators, delivering industry-leading torque-to-weight ratios.",
    iconName: "Activity",
  },
  {
    id: "hands",
    title: "Dexterous Manipulation",
    description:
      "Advanced multi-fingered hands with tactile feedback for delicate handling and complex tool usage.",
    iconName: "Hand",
  },
  {
    id: "lightweight",
    title: "Lightweight Alloy",
    description:
      "Aerospace-grade materials ensure a durable yet exceptionally light 35kg total system weight.",
    iconName: "Cpu",
  },
  {
    id: "research",
    title: "Open Research Platform",
    description:
      "Fully programmable API and SDK support for advanced robotics research and development.",
    iconName: "Code",
  },
];

export const APPLICATIONS = [
  {
    id: "precision",
    tag: "INDUSTRIAL",
    title: "Automated Precision",
    description:
      "Performing complex repetitive tasks in manufacturing and logistics with zero fatigue.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgJLOup4UYYm4gXHcB7pZMcodaMpH6FfrFHLrY5sSLsekHHh5h-s1IFcooNXgXAeqfDWP9GokLCfg4vxqWK7N9p7eVR-7EFKH_CLnvdKBbGGYIch01fGoP6y39hDmHJ8oKdsB_hMReT6c6KhuzmOaaIXJKGYJVCdE0Eopb3h21wH55DC8lVe_29OMdhtM1s1M41iMrV0SHFI9wn8Wu_ssBVQ0JJOGQBtFBcBnx9RrhiTcG8nSY1SVXLJS_yViQuVPVcAv_FPkeJEU",
  },
  {
    id: "service",
    tag: "SERVICE",
    title: "Service Excellence",
    description:
      "Enhancing hospitality and concierge services with intelligent human interaction.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp6iVW4FaJ_D9RTE4sgtkWv83ucCGME2i3oG-UEZzOOTU19VKgbaOWT42LX_z7JdNGnW4wafAzJrTk0_L6ygNwZLhSh_8QYlpAkxV9fGiXwM7lHGtoDUH26zT1l7JFFDPG99RHLkWjKOLKzxu4850Y8Cde_bFHFU9J2ZdjnYKKN4h_o76XiOVff5MV6adf2Mc26ef4BsynpIfe4QuugNU-vJf8HRgfNYT2_omz40E0vYw5BX-OI3jf0hjo0224aUdr7C8FAp_k_T0",
  },
];

export const SPECIFICATIONS: SpecRow[] = [
  { label: "Height", value: "1270 mm (Folded: 690 mm)" },
  { label: "Total Weight", value: "35 kg (inc. Battery)" },
  { label: "Degrees of Freedom", value: "43 (23 per Arm + 3 Head + 14 Legs)" },
  { label: "Top Speed", value: "2.5 m/s" },
  { label: "Processor", value: "Intel® Core™ i7-1260P / NVIDIA Orin™" },
  { label: "Sensing", value: "3D LiDAR + Depth Camera + IMU" },
];

export const GALLERY = [
  {
    id: "g1",
    title: "G1 Studio Portrait",
    alt: "A cinematic, full-body shot of the Unitree G1 standing in a vast white studio space.",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeeHXJgkJvwqFUHK0NcXGgzg5i0BHSiHQ4K1rUZtxQUR-K_GZhdyzxQFFaOsa8mMQtb0MEcthzpjrBnQDSZBrTMF1zsZr6Lti3l2eUUsWt9DawqE8SSL3c1LDFcCx11D3qM5aGaj3LTOe-bmBfJL2O0YlPzc3mrJsaGAzE3lW6xdOUGiF8W23RFizxJ29jc68m6iGNXF-5wZ6R6Nn5I177DQWMlG0KNRFpNqEDWa2edziwymryef2kd_z4FsZJijmnVF0ptgaT3v8",
    spanClass: "md:col-span-8",
  },
  {
    id: "g2",
    title: "Dexterous Manipulation",
    alt: "Detailed shot of the multi-fingered hand showing tactile sensors and glowing blue accents.",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQpct0Uq2YS4vKZg1S39I1bMsN2fm4BRt4rwNiJDZvYJ0YBOxtgxCCO7z9JrwXGm-WY4xH5Bx8J3aZAlRk5lCyZtFItNh9SQlyT_4vnd78mdG4keVzIDakrnXAZhaXrNyqDmvvs60rTVCw1KRCyNiBquqoEB3HBXSy57jtalL8tsxfodoZiWam9POiy_1NtbJOmuDFVB3sWaIaPvVTXmC-W3gT7hPlARCp43CQAhp2rl4ddT4ChzJx9AV4UAv7Ge8pxIcHBkp9xhw",
    spanClass: "md:col-span-4",
  },
  {
    id: "g3",
    title: "Technical Schematic",
    alt: "Blueprint-style cybernetic schematic of the robot skeletal joints and sensors.",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOmzJmoAVjr-Q3StWbPP4QQdTZs_KqSVgW2rQ6GQWW0cDqvro5sXSasDcaDnS4UN95TMkwQEyYJ0dQ_LkACWjkV6RQuWJPHkc2yj8HSgAGUvHBHgfHxPM3RJh2RYIfMLkdb74s2Eqx2ielSrwUrK650BtJrjZnkcYW981fVuScWRhI2Mg-_UWNkKi8AmCEXIl3DuPrV5wJ8V4ljLo4O3PIMtHKBcArkSB3zvdNrDb4Pfxnmc1xBQPPZVW04GLqiilyr-YGkURrKKo",
    spanClass: "md:col-span-4",
  },
];

export const COMPARISONS = [
  {
    feature: "Mobility",
    g1: "Dynamic human-like stride",
    traditional: "Stiff, quasi-static walking",
  },
  {
    feature: "Portability",
    g1: "35kg / Foldable Design",
    traditional: "80kg+ / Fixed Frame",
  },
  {
    feature: "Intelligence",
    g1: "Reinforcement Learning AI",
    traditional: "Pre-programmed sequences",
  },
  {
    feature: "Hardware",
    g1: "Integrated High-Torque Actuators",
    traditional: "Commercial Gearboxes",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Dr. Elena Thorne",
    role: "Head of AI Research, TechCorp",
    rating: 5,
    comment:
      "\"The G1 represents a significant leap in torque-to-weight performance. It's the first humanoid I've seen that feels truly agile enough for household applications.\"",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZJ5uNX1WkOFtCQtPQ6jIEdDTXjK95vJu7827-DQNgzZEdk73KMwlk0aLW545vwpAdKxiFmFny16gWdy0Xq9IE7u4KKlnuX-eF8qqAWA4llho6u9DzLIp4Akk_84fCr_trAU9iOnRa5pJMtYeObLE-ScLRVaV0BP2b91sy4o2vItWQ97UMQgTihNBk1i_U9Q6odVqaOQ7s7DBNqAh39frkWCZ7lSLbNR-XrY1_ZI69cw60PFQs8NGPZVKW-IMjWrjyB8o_9nL9S4",
  },
  {
    id: "r2",
    name: "Marcus Vane",
    role: "Editor, Future Robotics",
    rating: 5,
    comment:
      '"Unmatched dexterous hands. The G1 handles objects with a delicacy that we haven\'t seen in this price range before."',
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAhXKFS6xHLmVk0aJiL0HuxNY0wde7NRL2-8m_ue_H-6sE8P0VYGqQWx7Ps8bg7zUMmXW7g2aYTg2nhg2nKgPsqB5_EtUd9x7h_TgOMvZPoUKbv1ZgzlfUDMHw1L1AbmMDxmniE7ZuC-1GkF6wuw4EVIIZowPI13qWoM3b-Wr6ehG-ZawM-juOhG8cWRthdMWQhEMuYpRS76omeRNXklC33A__Pav5TWIxXc_rEaYR-QPhx8i31YccGIcjZtlgzwchqsGcimmtEAs",
  },
  {
    id: "r3",
    name: "Sarah Jenkins",
    role: "CEO, OmniBots",
    rating: 5,
    comment:
      '"Unitree has democratized high-end humanoid research. G1\'s foldable design is a game-changer for field deployment."',
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_nh1jonNvy2Jntfj1KbXq4Upb3FjLQug0QyN_IFGd8MMkAtTuZwNXs0kvWge8uAUky3SQzR_QDhw99ly8d3RPGuzl9EuwaLDy3cHdqisP_375pAtYjw-2bWY9fSNc4McZDSVqKzrbpaStCNQJcXrSihUJAIcM8x32YDTbpMldinofiTrRdb3xes_M2J5GXAVHjbBfRSa08s1ajPRHe32WL0OgaatT6xqwU2_2n4fbC0jscU0o8mHTeQeE3-OOpjn0jNBFepof43M",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "What is the battery life of the G1?",
    answer:
      "The Unitree G1 features a 2.5-hour standard battery life with typical locomotion and manipulation tasks. Batteries are hot-swappable, allowing continuous operation in research and industrial deployments.",
  },
  {
    id: "faq2",
    question: "Can it be used for commercial service?",
    answer:
      "Absolutely. The G1 is designed as a highly versatile platform. With our secondary development SDK (Developer Edition), it can be easily programmed for reception, delivery, guidance, and interactive service roles in hotels, offices, and research facilities.",
  },
  {
    id: "faq3",
    question: "What software languages does it support?",
    answer:
      "Unitree G1 primarily supports C++ and Python through our proprietary Unitree Robotics SDK. It is also compatible with ROS2 (Robot Operating System), making it suitable for standard academic and industrial pipelines.",
  },
];
