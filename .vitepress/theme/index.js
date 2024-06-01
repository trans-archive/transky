import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import comment from "./comment.vue";
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";
import "./indent.css";

export default {
  ...DefaultTheme,
  Layout: comment,
  setup() {
    imageViewer(useRoute());
  },
};
