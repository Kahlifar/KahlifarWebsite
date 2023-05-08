<template>
  <div class="default-content">
    <h1>Artikel</h1>
    <p>
      Wir haben eine Liste von Artikeln, die wir auf unserer Website
      veröffentlicht haben. <br />
      Sie beschreiben Vorgänge und Ereignisse, die in der Community
      stattgefunden haben.
    </p>
    <div class="article-list">
      <div v-if="$fetchState.pending">Loading Articles...</div>
      <div v-else-if="$fetchState.error">
        Error: {{ $fetchState.error.message }}
      </div>
      <a v-else v-for="article in articles" :key="article.id" :href="`/article/${article.attributes.UrlName}`" class="article-list__article">
        <!-- <div class="article-image">
          <img :src="article.attributes.image" />
        </div> -->
        <div class="article-list__article__content">
          <h2>{{ article.attributes.Title }}</h2>
          <span>{{ article.attributes.Subtitle }}</span>
          <div class="article-list__article__content__footer">
            <div class="article-author">
              <span class="material-icons"> edit_note </span>
              <span>{{
                article.attributes.Writer.data.attributes.Username
              }}</span>
            </div>
            <div class="article-date">
              <span class="material-icons">calendar_today</span>
              <span>
                {{
                  new Date(article.attributes.updatedAt)
                    .toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    .replace(/(\d+)(st|nd|rd|th)/, "$1")
                }}
              </span>
            </div>
            <div class="article-readingtime">
              <span class="material-icons"> schedule </span>
              <span class="article-redingTime">
                {{ article.attributes.ReadingTime }}min
              </span>
            </div>
          </div>
        </div>
        <div class="article-list__article__arrow">
            <span>
                Hier lesen
            </span>
            <span class="material-icons">
                arrow_forward_ios
            </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await this.$axios.get(
      `${process.env.CMS_URL}/api/articles?populate[Content][populate]=*&populate[Writer][populate]=*&populate[Thumbnail][populate]=*&_sort=createdAt:DESC`
    );
    this.articles = this.articles.data.data;
  },
};
</script>

<style>
</style>