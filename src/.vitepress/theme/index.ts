// https://vitepress.dev/guide/custom-theme
import PtjsTheme from '@project-trans/vitepress-theme-project-trans/theme'
import layout from "./Layout.vue";
import { useRoute } from "vitepress";
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";

import 'uno.css'
import './style.css'

export default {
  extends: PtjsTheme,
  Layout: layout,
  setup() {
    imageViewer(useRoute());
  },
}
