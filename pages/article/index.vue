<template>
  <div>
    <div class="article">
      <h1>Danh sách bài viết</h1>
      <div class="article__contents" v-for="(item,index) in get_articles" :key="item.id">
        <span class="article_number">{{index+1}}</span>
        <h3 class="article__title"><NuxtLink to="#">{{item.title}}</NuxtLink></h3>
        <span class="article__date">28-12-2020</span>
        <span><button>Sửa</button><button>Xóa</button></span>
      </div>
    </div>
  </div>
</template>

<script>

import gql from "graphql-tag";

export default {
    apollo: {
        get_articles: gql`
            query {
                get_articles {
                    id,
                    url,
                    title,
                    created_at
                }
            }`
    }

};
</script>

<style scoped>

.article__contents span {
  margin-left: 5px;
}

.articles {
    margin-top: 50px;
}
</style>
