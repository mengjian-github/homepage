export const bio50 =
  "前腾讯T11、前字节3-1，Nextfield Labs创始人。AI编程出海创业者，书已突破百万册。";

export const bio150 =
  "孟健，前腾讯T11、前字节跳动3-1，Nextfield Labs LLC创始人。AI编程创业者、出海产品实践者与技术作者。代表作《DeepSeek极简入门与应用》突破百万册。产品有字流与ShipSolo。首批TRAE Expert，并持续演讲、写作与公开分享。媒体合作请联系微信mjcoding3。";

export const bioEn =
  "Meng Jian founded Nextfield Labs LLC after Tencent (T11) and ByteDance (3-1). He builds AI-programming products for overseas users, including ShipSolo and Ziliu. His book, DeepSeek极简入门与应用, is listed at 100万+ copies (突破百万册).";

export const wechatId = "mjcoding3";

export const headshot = {
  src: "/images/avatar.png",
  alt: "孟健",
};

export const pressProducts = [
  { name: "个人网站", href: "https://mengjian.site", note: "mengjian.site" },
  { name: "字流", href: "https://ziliu.online", note: "ziliu.online" },
  { name: "ShipSolo", href: "https://shipsolo.cn", note: "shipsolo.cn · AI 编程出海领航" },
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
    text: "被《每日经济新闻》专访引用，谈 OpenClaw「龙虾」记忆膨胀推高 Token 成本、低价套餐用量限制，以及赋予 AI 电脑操控权限的安全风险。2026-03-12。",
    href: "https://www.nbd.com.cn/articles/2026-03-12/4289959.html",
    linkLabel: "阅读原文",
    image: {
      src: "/assets/influence/media-nbd-lobster.jpg",
      alt: "每经头条卡片：每日经济新闻引用孟健谈 OpenClaw「龙虾」记忆膨胀与 Token 成本",
      caption: "每经头条 · 养虾调查专访",
      objectPosition: "center 68%",
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
    text: "长篇专访，谈从山村到腾讯再到 AI 创业的三次跨越，以及 AI 编程、出海与 OpenClaw。",
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
    text: "短片专访：走出大厂后重新学习做生意，分享 AI 编程出海创业路径。2026-10-25，广州。",
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
    title: "程前朋友圈 / 新火社区",
    text: "程前朋友圈 Vol.18「AI编程出海」，发布在新火社区。专访介绍：用 AI 一个月上线 30 个出海网站，培养出 6 个数字员工，让它们 24 小时自运转；身份标注为 AI+编程出海创业者。2026-06-24，页面显示 3130 次播放。微信打开：#小程序://新火/a9ySEecVhMIN9sK",
    image: {
      src: "/assets/influence/media-chengqian-xinhuo.jpg",
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
    text: "嘉宾对谈，主题是「腾讯到字节：AI 时代前端工程师孟健的突围」。",
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
};

export const honors: HonorItem[] = [
  {
    date: "2026-11-07",
    kicker: "邀约",
    title: "掘金 Coffee Talk 杭州 #001",
    text: "稀土掘金 X-Lab Coffee Talk 诚邀嘉宾。西湖科学咖啡。",
    href: "https://juejin.cn/activity/hangzhouxlab01",
    linkLabel: "活动页",
  },
  {
    date: "2026-01",
    kicker: "教练",
    title: "破局精英教练",
    text: "破局行动第 09 期授予精英教练。破局俱乐部。",
  },
  {
    date: "2026-01-07",
    kicker: "荣誉",
    title: "哥飞的朋友们 2025 年度网站比赛",
    text: "第 15 名，荣誉称号「中流砥柱·坚实力量」。",
  },
  {
    date: "3月5日",
    kicker: "分享",
    title: "OpenClaw 华语区实战分享",
    text: "「龙虾养殖手册」实战分享会嘉宾，身份为 AI 出海创业者。北京时间晚 8 点。",
    image: {
      src: "/assets/influence/poster-openclaw-share.jpg",
      alt: "OpenClaw 华语区实战分享会嘉宾海报，孟健的身份是 AI 出海创业者",
    },
  },
  {
    date: "2025.12.27–28",
    kicker: "演讲",
    title: "破局上海 / 深圳",
    text: "AI 破局行动家交流会上海站嘉宾，分享 AI 时代的个人 IP 与副业；深圳主会场登台，席卡身份是 AI 编程出海创业者。",
    image: {
      src: "/assets/influence/speaking-shenzhen.jpg",
      alt: "孟健在 AI 破局行动家大会主会场演讲",
    },
  },
  {
    date: "2025.12.27–28",
    kicker: "奖项",
    title: "破局文曲星",
    text: "AI 破局行动家大会把「破局文曲星」授予「孟健AI编程」。深圳。",
    image: {
      src: "/assets/influence/award-wenquxing.jpg",
      alt: "AI 破局行动家大会授予孟健AI编程破局文曲星",
    },
  },
  {
    date: "2025-10",
    kicker: "评委",
    title: "CSDN / GDEC 代码生成赛道评委",
    text: "2025 全球数字经济创新大赛 · AIGC 创作大赛 · 代码生成-CSDN 分赛道评委（GDEC / CSDN）。2025 年 10 月获聘，评审团与蒋涛等并列。",
    image: {
      src: "/assets/influence/cert-gdec-judge.jpg",
      alt: "2025 GDEC · CSDN 代码生成分赛道评委聘书",
    },
  },
  {
    date: "2025-09-06",
    kicker: "演讲",
    title: "TRAE Shanghai · MCP 深度实践",
    text: "嘉宾分享「MCP 深度实践：解锁沉浸式 AI 编程体验」。上海杨浦。",
  },
  {
    date: "2025",
    kicker: "奖项",
    title: "首批 TRAE Expert",
    text: "TRAE 团队正式邀请加入首批 TRAE Expert，并获得 TRAE Achievement Award 2025 年度社区影响力奖。同一张照片里还有博文视点 2025 年度优秀作者。",
    image: {
      src: "/assets/influence/award-trae-bowen.jpg",
      alt: "TRAE 年度社区影响力奖与博文视点 2025 年度优秀作者",
    },
  },
  {
    date: "2025",
    kicker: "出版",
    title: "博文视点 2025 优秀作者",
    text: "电子工业出版社博文视点授予 2025 年度优秀作者。《DeepSeek极简入门与应用》突破百万册。",
  },
  {
    date: "2025",
    kicker: "演讲",
    title: "GIAC 全球互联网架构大会",
    text: "GIAC 2025 深圳站讲师。",
  },
  {
    date: "播客",
    kicker: "播客",
    title: "小宇宙《浪说》",
    text: "嘉宾对谈，主题是「腾讯到字节：AI 时代前端工程师孟健的突围」。",
    href: "https://www.xiaoyuzhoufm.com/episode/67e2c9b0a3dfefa31f12fbb3",
    linkLabel: "收听这期",
  },
  {
    date: "",
    kicker: "演讲",
    title: "GMTC 与腾讯云专场",
    text: "GMTC 全球大前端技术大会演讲嘉宾。腾讯云专场 AI 分享交流。",
  },
];
