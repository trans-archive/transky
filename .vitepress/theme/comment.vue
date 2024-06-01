<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <p style="text-align: center; margin-top: 40px;">本站不提供评论服务，如有评论需求，请移步至 <a style="color: #a8b1ff;" href="https://github.com/transky-book/transky/discussions/categories/%E8%AF%84%E8%AE%BA%E5%8C%BA">GitHub Discussions</a>。</p>
    </template>
  </Layout>
</template>
