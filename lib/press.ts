export const bio50 =
  "前腾讯T11、前字节3-1，Nextfield Labs创始人。AI编程出海创业者，书已突破百万册。";

export const bio150 =
  "孟健，前腾讯T11、前字节跳动3-1，Nextfield Labs LLC创始人。AI编程创业者、出海产品实践者与技术作者。代表作《DeepSeek极简入门与应用》突破百万册。产品有字流与ShipSolo。首批TRAE Expert，并持续演讲、写作与公开分享。媒体合作请联系微信mjcoding3。";

export const bioEn =
  "Kian Meng (孟健) is the founder of Nextfield Labs LLC. Before that he was a T11 engineer at Tencent and a frontend tech lead at ByteDance. He builds AI-assisted products for global users, including ShipSolo and Ziliu. His book 《DeepSeek极简入门与应用》 has passed one million copies in print.";

export const wechatId = "mjcoding3";
export const email = "384709054@qq.com";

export const headshot = {
  src: "/images/avatar.png",
  alt: "孟健",
};

export const pressPhotos = [
  { src: "/images/avatar.png", alt: "孟健头像", label: "头像（浅色背景）" },
  { src: "/assets/influence/speaking-shenzhen.jpg", alt: "孟健在 AI 破局行动家大会主会场演讲", label: "演讲现场（深圳）" },
];

/**
 * 各平台关注数，取自字流数据采集 2026-11-04。
 * 合计（含知识星球成员、GitHub）约 5.4 万。更新时改这里。
 */
export const audienceTotal = "5万+";
export const audienceAsOf = "2026-11";

export const socials = [
  { name: "公众号", handle: "孟健AI编程", followers: "2.4万", href: "", note: "微信搜「孟健AI编程」" },
  { name: "知乎", handle: "孟健AI编程", followers: "1.3万", href: "https://www.zhihu.com/people/meng-jian-39-32" },
  { name: "视频号", handle: "孟健AI编程", followers: "5200+", href: "", note: "微信搜「孟健AI编程」" },
  { name: "知识星球", handle: "孟健AI编程", followers: "4600+ 成员", href: "" },
  { name: "掘金", handle: "孟健AI编程", followers: "2200+", href: "https://juejin.cn/user/4212984287073895" },
  { name: "抖音", handle: "孟健AI编程", followers: "2100+", href: "https://www.douyin.com/user/MS4wLjABAAAA9qVty54yvKLBl2TvH2DMmmUDT2rbc5hfANqBswXnNyoPh5mzN3IJukKoUpFKScYP" },
  { name: "GitHub", handle: "mengjian-github", followers: "400+", href: "https://github.com/mengjian-github" },
  { name: "B站", handle: "孟健AI编程", followers: "390+", href: "https://space.bilibili.com/507808505" },
  { name: "X", handle: "@xjtumj", followers: "230+", href: "https://x.com/xjtumj" },
  { name: "即刻", handle: "孟健AI编程", followers: "180+", href: "https://web.okjike.com/u/6191CD93-6062-4F9A-A938-1FD1C37EEB47" },
  { name: "YouTube", handle: "孟健AI编程", followers: "", href: "https://www.youtube.com/channel/UCd7AAiUP2hXmZZorendPF9A" },
];

export const pressProducts = [
  { name: "个人网站", href: "https://mengjian.site", note: "mengjian.site" },
  { name: "字流", href: "https://ziliu.online", note: "ziliu.online · 真人 IP 内容操作系统" },
  { name: "ShipSolo", href: "https://shipsolo.cn", note: "shipsolo.cn · AI 编程出海领航" },
  { name: "Shipsite", href: "https://shipsite.ai", note: "shipsite.ai · 山海司 · 从关键词到可上线站点" },
];

/** 可邀约讲题：每个都对应讲过的场次，不写没讲过的。 */
export const talks = [
  {
    title: "AI 编程出海：一个人做产品矩阵",
    text: "从选方向、用 AI 写代码到靠 SEO 拿海外流量，一个月上线 30 个出海站点是怎么做的。",
    past: "破局深圳主会场 · 程前朋友圈 Vol.18",
  },
  {
    title: "MCP 与 AI 编程工作流",
    text: "用 MCP 把文档、数据库和浏览器接进 AI 编程工具，让它真正能干活。",
    past: "TRAE Meetup 上海 2025",
  },
  {
    title: "AI 时代技术人的个人 IP",
    text: "技术人怎么写、怎么发、怎么把内容变成产品和收入。",
    past: "破局行动家交流会上海站",
  },
  {
    title: "养一个 AI 私人助理",
    text: "OpenClaw 实战：记忆、Token 成本和电脑操控权限的安全边界。",
    past: "OpenClaw 华语区实战分享 · 每经专访",
  },
];

export type PressImage = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

export type MediaItem = {
  kicker: string;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  image?: PressImage;
  schema: Record<string, unknown>;
};

export const mediaCoverage: MediaItem[] = [
  {
    kicker: "专访",
    title: "每日经济新闻 / 每经头条",
    text: "「全民养虾」调查专访：谈 OpenClaw「龙虾」记忆膨胀推高 Token 成本、低价套餐的用量限制，以及让 AI 操控电脑的安全风险。2026-03-12。",
    href: "https://www.nbd.com.cn/articles/2026-03-12/4289959.html",
    linkLabel: "阅读原文",
    image: {
      src: "/assets/influence/media-nbd-card.jpg",
      alt: "每经头条：AI 出海创业者、前大厂技术负责人孟健指出「龙虾」存在记忆膨胀问题",
      caption: "每经头条 · 全民「养虾」调查",
    },
    schema: {
      "@type": "NewsArticle",
      headline:
        "全民「养虾」调查：大厂7.9元「包吃住」，为何有人1天花费超2000元？起底 OpenClaw 背后的算力「刺客」",
      url: "https://www.nbd.com.cn/articles/2026-03-12/4289959.html",
      datePublished: "2026-03-12",
      publisher: {
        "@type": "Organization",
        name: "每日经济新闻",
        alternateName: "每经头条",
      },
    },
  },
  {
    kicker: "专访",
    title: "程序员客栈《开发者说》",
    text: "长篇专访，谈从新疆山村到腾讯再到 AI 创业的三次跨越，以及 AI 编程、出海与 OpenClaw。",
    href: "https://mp.weixin.qq.com/s/PzEF9hm4rB5I75r9TuVDrQ",
    linkLabel: "阅读原文",
    schema: {
      "@type": "Article",
      headline: "从新疆山村到腾讯技术专家，再到AI创业：一个技术人的三次跨越",
      url: "https://mp.weixin.qq.com/s/PzEF9hm4rB5I75r9TuVDrQ",
      author: { "@type": "Person", name: "拾星河" },
      isPartOf: { "@type": "CreativeWorkSeries", name: "程序员客栈《开发者说》" },
    },
  },
  {
    kicker: "视频",
    title: "AI破局视频号",
    text: "短片专访《走出大厂，我开始重新学习做生意》，聊 AI 编程出海的创业路径。2026-10-25，广州。",
    href: "https://weixin.qq.com/sph/Ae5ROu39cE",
    linkLabel: "观看",
    schema: {
      "@type": "VideoObject",
      name: "走出大厂，我开始重新学习做生意",
      description: "短片专访：走出大厂后重新学习做生意，分享 AI 编程出海创业路径。",
      url: "https://weixin.qq.com/sph/Ae5ROu39cE",
      uploadDate: "2026-10-25",
      contentLocation: "广州市",
      publisher: { "@type": "Organization", name: "AI破局" },
    },
  },
  {
    kicker: "专访",
    title: "程前朋友圈 Vol.18 · AI编程出海",
    text: "发布在新火社区。聊用 AI 一个月上线 30 个出海网站、培养 6 个 24 小时运转的数字员工。2026-06-24。",
    image: {
      src: "/assets/influence/media-chengqian-card.jpg",
      alt: "程前朋友圈 Vol.18 AI编程出海专访，身份标注为 AI+编程出海创业者",
      caption: "程前朋友圈 · 新火 Vol.18",
    },
    schema: {
      "@type": "Article",
      headline: "Vol.18 AI编程出海",
      datePublished: "2026-06-24",
      description: "程前朋友圈专访，发布在新火社区。身份标注为 AI+编程出海创业者。",
      isPartOf: { "@type": "CreativeWorkSeries", name: "程前朋友圈" },
      publisher: { "@type": "Organization", name: "新火社区" },
    },
  },
  {
    kicker: "播客",
    title: "小宇宙《浪说》",
    text: "嘉宾对谈：腾讯到字节，AI 时代前端工程师的突围。",
    href: "https://www.xiaoyuzhoufm.com/episode/67e2c9b0a3dfefa31f12fbb3",
    linkLabel: "收听这期",
    schema: {
      "@type": "PodcastEpisode",
      name: "腾讯到字节:AI时代前端工程师孟健的突围",
      url: "https://www.xiaoyuzhoufm.com/episode/67e2c9b0a3dfefa31f12fbb3",
      partOfSeries: { "@type": "PodcastSeries", name: "浪说播客" },
    },
  },
];

export type HonorItem = {
  date: string;
  kicker: string;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  image?: PressImage;
  images?: PressImage[];
};

/** 从新到旧。日期统一 YYYY-MM-DD / YYYY-MM / YYYY。 */
export const honors: HonorItem[] = [
  {
    date: "2026-11-07",
    kicker: "受邀",
    title: "掘金 X-Lab Coffee Talk 杭州 #001",
    text: "受邀参加稀土掘金 X-Lab 发起的 Coffee Talk，和独立开发者聊做产品、获客与收入。杭州 · 西湖科学咖啡馆。",
    href: "https://juejin.cn/activity/hangzhouxlab01",
    linkLabel: "活动页",
    image: {
      src: "/assets/influence/poster-juejin-hangzhou.jpg",
      alt: "稀土掘金 X-Lab Coffee Talk 杭州 #001 邀请海报：诚邀孟健",
    },
  },
  {
    date: "2026-03-05",
    kicker: "分享",
    title: "OpenClaw 华语区实战分享",
    text: "「龙虾养殖手册」线上实战分享会嘉宾。",
    image: {
      src: "/assets/influence/poster-openclaw-share.jpg",
      alt: "OpenClaw 华语区实战分享会嘉宾海报，孟健的身份是 AI 出海创业者",
    },
  },
  {
    date: "2026-01-07",
    kicker: "荣誉",
    title: "哥飞的朋友们 2025 年度网站比赛",
    text: "第 15 名，荣誉称号「中流砥柱·坚实力量」。",
    image: {
      src: "/assets/influence/cert-gefei-15.jpg",
      alt: "哥飞的朋友们 2025 年度网站比赛荣誉证书，孟健第 15 名，称号中流砥柱·坚实力量",
    },
  },
  {
    date: "2026-01",
    kicker: "教练",
    title: "破局精英教练",
    text: "破局行动第 09 期精英教练。",
    image: {
      src: "/assets/influence/cert-elite-coach.jpg",
      alt: "破局行动第 09 期授予孟健精英教练的荣誉证书",
    },
  },
  {
    date: "2025-12-27",
    kicker: "演讲",
    title: "AI 破局行动家大会 · 深圳主会场",
    text: "深圳主会场登台，讲 AI 编程出海；席卡身份是 AI 编程出海创业者。",
    image: {
      src: "/assets/influence/speaking-shenzhen.jpg",
      alt: "孟健在 AI 破局行动家大会深圳主会场，席卡身份是 AI 编程出海创业者",
    },
    images: [
      {
        src: "/assets/influence/speaking-shenzhen-2.jpg",
        alt: "孟健在 AI 破局行动家大会深圳主会场演讲",
      },
    ],
  },
  {
    date: "2025-12-28",
    kicker: "奖项",
    title: "破局文曲星",
    text: "AI 破局行动家大会颁发。深圳。",
    image: {
      src: "/assets/influence/award-wenquxing.jpg",
      alt: "AI 破局行动家大会授予孟健AI编程破局文曲星",
    },
  },
  {
    date: "2025-10",
    kicker: "评委",
    title: "GDEC · 代码生成-CSDN 分赛道评委",
    text: "2025 全球数字经济创新大赛 · AIGC 创作大赛代码生成赛道评委。",
    image: {
      src: "/assets/influence/cert-gdec-judge.jpg",
      alt: "2025 GDEC · CSDN 代码生成分赛道评委聘书",
    },
    images: [
      {
        src: "/assets/influence/cert-gdec-panel.jpg",
        alt: "2025 GDEC 代码生成赛道大赛评审团，孟健与蒋涛等并列",
      },
    ],
  },
  {
    date: "2025-09-06",
    kicker: "演讲",
    title: "TRAE Meetup 上海 · MCP 深度实践",
    text: "分享「MCP 深度实践：解锁沉浸式 AI 编程体验」。上海杨浦。",
    href: "https://luma.com/5unk5h45",
    linkLabel: "活动页",
    image: {
      src: "/assets/influence/poster-trae-shanghai.jpg",
      alt: "TRAE Meetup 上海海报：孟健分享 MCP 深度实践",
    },
  },
  {
    date: "2025-06-13",
    kicker: "出品人",
    title: "GIAC 全球互联网架构大会 · 深圳",
    text: "第十二届 GIAC 的 15 位出品人之一，负责把关专题质量和议题筛选。时任字节跳动 Flow-Parallel 前端 leader。",
    href: "https://segmentfault.com/e/1160000046609870",
    linkLabel: "大会介绍",
  },
  {
    date: "2025-05-24",
    kicker: "分享",
    title: "破局行动家交流会 · 上海站",
    text: "直播分享「AI 时代如何打造个人 IP 与副业」。",
    image: {
      src: "/assets/influence/poster-poju-shanghai.jpg",
      alt: "破局行动家交流会上海站海报，孟健分享 AI 时代如何打造个人 IP 与副业",
    },
  },
  {
    date: "2025",
    kicker: "奖项",
    title: "首批 TRAE Expert",
    text: "TRAE 团队正式邀请加入首批 TRAE Expert。",
    image: {
      src: "/assets/influence/invite-trae-expert.jpg",
      alt: "TRAE 团队邀请孟健成为首批 TRAE Expert 的邀请函",
    },
  },
  {
    date: "2025",
    kicker: "奖项",
    title: "TRAE 年度社区影响力奖 · 博文视点年度优秀作者",
    text: "TRAE Achievement Award 2025 年度社区影响力奖；电子工业出版社博文视点 2025 年度优秀作者。",
    image: {
      src: "/assets/influence/award-trae-bowen.jpg",
      alt: "TRAE 年度社区影响力奖与博文视点 2025 年度优秀作者奖杯",
    },
  },
  {
    date: "腾讯期间",
    kicker: "分享",
    title: "腾讯云专场 AI 分享",
    text: "腾讯云专场上的 AI 主题分享交流。",
  },
  {
    date: "2021-12-05",
    kicker: "演讲",
    title: "GMTC 全球大前端技术大会 · 深圳",
    text: "专题演讲《IMWeb DevOps 研发效能实践》。时任腾讯高级工程师、腾讯课堂开发负责人。",
    href: "https://gmtc.infoq.cn/2021/shenzhen/speaker/6205",
    linkLabel: "讲师页",
  },
];
