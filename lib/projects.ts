export interface Project {
  id: string;
  name: {
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
    link: "https://en-translator.pages.dev",
    category: "tools",
    year: 2024
  }
];

