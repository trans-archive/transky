<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

import { useData } from "vitepress";
import {
  AppFooter,
  AppearanceToggle,
} from "@project-trans/vitepress-theme-project-trans/components";

import CopyrightInfo from "./CopyrightInfo.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <AppearanceToggle>
    <Layout>
      <template #doc-before>
        <NolebaseHighlightTargetedHeading />
      </template>
      <template #doc-after>
        <AppFooter />
        <br />
        <CopyrightInfo />
        <p style="text-align: center; margin-top: 40px">
          本站不提供评论服务，如有评论需求，请移步至
          <a style="color: var(--vp-c-brand-1)"
            href="https://github.com/transky-book/transky/discussions/categories/%E8%AF%84%E8%AE%BA%E5%8C%BA">GitHub
            Discussions</a>。
        </p>
      </template>
      <template #nav-bar-content-after>
        <NolebaseEnhancedReadabilitiesMenu />
      </template>
      <template #nav-screen-content-after>
        <NolebaseEnhancedReadabilitiesScreenMenu />
      </template>
    </Layout>
  </AppearanceToggle>
</template>

<style>
:root {
  --vp-font-family-base: sans-serif;
  --vp-font-family-mono: monospace;
}
</style>
