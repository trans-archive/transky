import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "药娘的天空",
  description: "《药娘的天空》精修版",
  head: [["link", { rel: "icon", href: "/progynova.png" }]],
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: "https://proskynova.github.io",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/progynova.png",
    sidebar: generateSidebar({
      documentRootPath: "/src",
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      collapsed: true,
    }),
    socialLinks: [{ icon: "github", link: "https://github.com/proskynova" }],
    footer: {
      message: "基于 CC BY-NC-SA 4.0 许可发布",
      copyright: "版权所有 © 2023 Zh40Le1ZOOB",
    },
    editLink: {
      pattern:
        "https://github.com/proskynova/proskynova.github.io/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索本书",
                buttonAriaLabel: "搜索本书",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    docFooter: {
      prev: "上一章",
      next: "下一章",
    },
    darkModeSwitchLabel: "深色模式",
    lightModeSwitchTitle: "切换至浅色模式",
    darkModeSwitchTitle: "切换至深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    externalLinkIcon: true,
  },
});
