export interface Project {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
  link: string;
  category?: string;
  year?: number;
}

export const projects: Project[] = [
  {
    id: "bitquant-ai",
    name: {
      zh: "BitQuant AI",
      en: "BitQuant AI"
    },
    description: {
      zh: "日交易员风险评估模型",
      en: "Risk assessment model for day traders"
    },
    link: "https://bryaninjapan.github.io/Bitquant/",
    category: "tools",
    year: 2024
  },
  {
    id: "english-editor",
    name: {
      zh: "English Editor",
      en: "English Editor"
    },
    description: {
      zh: "专业英语编辑工具，支持多模型LLM",
      en: "Professional English editing tool powered by multiple LLM models"
    },
    link: "https://main.englisheditor.pages.dev",
    category: "tools",
    year: 2024
  },
  {
    id: "jp-legal-translator",
    name: {
      zh: "JP Legal Translator",
      en: "JP Legal Translator"
    },
    description: {
      zh: "日文法律文件全文翻译工具",
      en: "Full-text translation tool for Japanese legal documents"
    },
    link: "https://bryaninjapan.github.io/jp-translator/",
    category: "tools",
    year: 2024
  },
  {
    id: "en-translator",
    name: {
      zh: "EN Translator",
      en: "EN Translator"
    },
    description: {
      zh: "英中法律商务文件翻译工具",
      en: "English to Chinese translation for legal and business documents"
    },
    link: "https://en-translator.pages.dev",
    category: "tools",
    year: 2024
  }
];

