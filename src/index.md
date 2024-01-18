---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 药娘的天空

hero:
  name: 药娘的天空
  text: 一个 2000 年代的跨性别者的故事。
  tagline: <i>千篇一律的景，时长时短的影。无人相伴的路，惝恍迷离的舞。</i>
  actions:
    - theme: brand
      text: 开始阅读
      link: /01/
    - theme: brand
      text: EPUB 版
      link: /药娘的天空.epub
    - theme: brand
      text: PDF 版
      link: /药娘的天空.pdf
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/proskynova
  image:
    src: /progynova.png
    alt: Progynova

features:
  - icon: ✅
    title: 内容完整
    details: 基于作者一手原稿，内容完整无缺。
  - icon: ⭕
    title: 错误修正
    details: 在不改变内容含义与行文风格的前提下最大限度地修正错误。
  - icon: 🆓
    title: 自由发布
    details: 基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a> 许可发布，自由开放。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
