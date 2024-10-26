import genConfig from "@project-trans/vitepress-theme-project-trans/config";
import type { ThemeContext } from "@project-trans/vitepress-theme-project-trans/utils";
import { withThemeContext } from "@project-trans/vitepress-theme-project-trans/utils";
import path from "path";
import type { DefaultTheme } from "vitepress";
import fs from "fs";

type NavConfig = DefaultTheme.Config["nav"];
function countWords(content: string): number {
  const cleanedContent = content
    .replace(/```[\s\S]*?```/g, "") // 移除代码块
    .replace(/!\[.*?\]\(.*?\)/g, "") // 移除图片链接
    .replace(/\[.*?\]\(.*?\)/g, "") // 移除普通链接
    .replace(/<[^>]+(>|$)/g, "") // 移除 HTML 标签
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "") // 移除标点符号
    .replace(/\s+/g, " ") // 将多余的空格归为一个空格
    .trim(); // 去除首尾空格

  const chineseCharacters =
    cleanedContent.match(/[\u4E00-\u9FFF\uFF01-\uFFE5]/g) || [];
  const words = cleanedContent.split(/\s+/).filter(Boolean);

  return chineseCharacters.length + words.length;
}

function readMarkdownFileContent(filePath: string): string {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  }
  return "";
}

function searchForFirstTitle(filePath: string): string {
  const content = readMarkdownFileContent(filePath);
  const title = content.match(/# (.*)/);
  if (title) {
    return title[1];
  }
  return "";
}

const nav = [
  { text: "正文", link: "/foreword" },
  { text: "关于", link: "/about" },
];

const sidebarOptions = [
  {
    documentRootPath: "/src",
    scanStartPath: "/",
    resolvePath: "/",
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    manualSortFileNameByPriority: [
      "foreword.md",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "afterword.md",
      "illustrations.md",
    ],
    collapsed: true,
    excludeFiles: ["about.md", "SUMMARY.md"],
  },
];

const themeConfig: ThemeContext = {
  siteTitle: "药娘的天空",
  SiteTitle: "药娘的天空",
  siteDescription: "一个 2000 年代的跨性别者的故事。",
  siteLogo: "/progynova.png",
  /** Repo */
  githubRepoLink: "https://github.com/transky-book/transky",
  /** vitepress 根目录 */
  rootDir: "/src",
  /** 文档所在目录（目前似未使用此项） */
  include: ["src"],
  nav,
  sidebarOptions,
  enableChangeLog: true,
  enableSuggestionBox: false,
  /** 文档所在目录（用于GitHub编辑链接） */
  sitePattern: `src`,
};

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, () => {
  const config = genConfig();
  return {
    ...config,
    transformPageData(pageData) {
      // 构建 Markdown 文件路径
      const markdownFile = `${pageData.relativePath}`;
      const filePath = path.join(process.cwd(), "src", markdownFile);

      // 从文件系统读取文件内容
      const content = readMarkdownFileContent(filePath);
      const title = searchForFirstTitle(filePath);

      // 统计字数并插入到 Frontmatter
      const wordCount = countWords(content);

      return {
        frontmatter: {
          ...pageData.frontmatter,
          wordCount, // 将字数写入 Frontmatter
          autoTitle: title,
        },
      };
    },
  };
});
