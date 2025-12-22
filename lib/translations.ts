export type Language = "zh" | "en";

export interface Translations {
  siteTitle: string;
  themeToggle: {
    light: string;
    dark: string;
  };
  languageToggle: {
    zh: string;
    en: string;
  };
  categories: {
    all: string;
    tools: string;
    archive: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    siteTitle: "项目集",
    themeToggle: {
      light: "浅色",
      dark: "深色"
    },
    languageToggle: {
      zh: "中文",
      en: "English"
    },
    categories: {
      all: "全部",
      tools: "工具",
      archive: "归档"
    }
  },
  en: {
    siteTitle: "Portfolio",
    themeToggle: {
      light: "Light",
      dark: "Dark"
    },
    languageToggle: {
      zh: "中文",
      en: "English"
    },
    categories: {
      all: "All",
      tools: "Tools",
      archive: "Archive"
    }
  }
};

