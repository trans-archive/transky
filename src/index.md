---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "药娘的天空"
  actions:
    - theme: brand
      text: 开始阅读
      link: /01/
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/proskynova
  image:
    src: /progynova.png
    alt: Progynova
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
