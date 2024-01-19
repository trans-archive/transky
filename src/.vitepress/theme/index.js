import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";
import "./indent.css";

export default {
  ...DefaultTheme,
  setup() {
    imageViewer(useRoute());
  },
};
