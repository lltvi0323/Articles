<template>
<div>
  <div class="article">
    <h1>Danh sách bài viết</h1>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    <div class="article__contents" v-for="(article,index)  in articles" :key="article.id">
      <span class="article_number">{{index+1}}</span>
      <h3 class="article__title">
        <NuxtLink :to="`/article/${article.id}`">{{article.title}}</NuxtLink>
      </h3>
      <span class="article__date">28-12-2020</span>
      <span>
        <button>Sửa</button>
        <button>Xóa</button>
      </span>
    </div>
  </div>
</div>
</template>

<script>
import gql from "graphql-tag";

import {
  getArticles
} from '~/graphql/queries/article';
import ArticleForm from '~/components/ArticleForm';

export default {

  components:{
    ArticleForm
  },
  apollo: {
    articles: {
      query: getArticles,
    }
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
