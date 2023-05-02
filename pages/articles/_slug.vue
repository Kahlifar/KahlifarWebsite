<template>
  <div class="default-content">
    <div class="article">
      <div class="article__header">
        <div class="article__header__title">
          <h1>{{ article.attributes.Title }}</h1>
          <h2 v-if="article.attributes.Subtitle">{{ article.attributes.Subtitle }}</h2>
        </div>
        <div class="article__header__meta">
          <div class="article__header__meta__item" v-if="article.attributes.Writer.data">
            <span class="material-icons"> edit_note </span>
            <span class="article__header__meta__author">
              {{ article.attributes.Writer.data.attributes.Username }}
            </span>
          </div>
          <div class="article__header__meta__item">
            <span class="material-icons"> calendar_today </span>
            <span class="article__header__meta__date">
              {{ moment(article.attributes.CreatedAt).format("Do MMMM YYYY") }}
            </span>
          </div>
          <div class="article__header__meta__item">
            <span class="material-icons"> schedule </span>
            <span class="article__header__meta__views">
              {{ article.attributes.ReadingTime }}min
            </span>
          </div>
        </div>
        <div
          v-if="article.attributes.Thumbnail.data"
          class="article__header__thumbnail"
        >
          <img
            :src="`${CMS_URL}${article.attributes.Thumbnail.data.attributes.url}`"
            alt=""
          />
        </div>
      </div>
      <div class="article__content">
        <div
          class="article__content__item"
          v-for="contentitem in article.attributes.Content"
          :key="contentitem.id"
        >
          <!-- {{ contentitem }} -->
          <p
            v-if="contentitem.__component == 'text.text'"
            v-html="parsetoMarkdown(contentitem.value)"
          />
          <img
            v-if="contentitem.__component == 'image.image'"
            :src="`${CMS_URL}${contentitem.image.data.attributes.url}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { marked } from "marked";
moment.locale("de");
export default {
  layout: "default",
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(
      `${process.env.CMS_URL}/api/articles?populate[Content][populate]=*&populate[Writer][populate]=*&populate[Thumbnail][populate]=*&filters[UrlName][$eq]=${params.slug}`
    );
    return { article: data.data[0] };
  },
  head() {
    return {
      title: `${this.article.attributes.Title} - Kahlifar Articles`,
    };
  },
  data() {
    return {
      moment: moment,
      CMS_URL: process.env.CMS_URL,
    };
  },
  methods: {
    parsetoMarkdown(text) {
      const renderer = new marked.Renderer()
      renderer.heading = (text, level) => {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
        return `<h${level}><a name="${escapedText}" class="anchor" href="#${escapedText}">${text}</a></h${level}>`
      }
      return marked(text, { breaks: true, renderer});
    },
  },
};
</script>

<style>
</style>