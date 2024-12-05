import genConfig from "@project-trans/vitepress-theme-project-trans/config";
import type { ThemeContext } from "@project-trans/vitepress-theme-project-trans/utils";
import { withThemeContext } from "@project-trans/vitepress-theme-project-trans/utils";
import type { DefaultTheme } from "vitepress";

type NavConfig = DefaultTheme.Config["nav"];

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
  hostName: 'https://transky.mtf.wiki',
};

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig);
