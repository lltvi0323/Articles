<template>
  <div class="container">
    <h1>Thực hiện thêm sửa xóa bài viết</h1>
     <ArticleForm />
     <Article />
  </div>
</template>

<script>
import ArticleForm from "@/components/ArticleForm";
import Article from "./Article";
export default {
    components: {
    ArticleForm,
    Article
  }
}
</script>

<style scoped>
.container h1 {
  text-align: center;
}
</style>
