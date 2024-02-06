import { useData, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";
import "./indent.css";

export default {
  ...DefaultTheme,
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();
    imageViewer(route);
    giscusTalk(
      {
        repo: "proskynova/proskynova.github.io",
        repoId: "R_kgDOLEtJ4A",
        category: "评论区",
        categoryId: "DIC_kwDOLEtJ4M4Cch85",
        mapping: "title",
        strict: 1,
        reactionsEnabled: 1,
        emitaMetadata: 1,
        inputPosition: "top",
        theme: "preferred_color_scheme",
        lang: "zh-CN",
        loading: "lazy",
      },
      {
        frontmatter,
        route,
      },
      true,
    );
  },
};
