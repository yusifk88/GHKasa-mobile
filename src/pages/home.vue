<template>
  <f7-page ptr @ptr:refresh="getHome" name="home" :page-content="false">
    <!-- Top Navbar -->
    <f7-navbar :no-hairline="true" >
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" ></f7-link>
      </f7-nav-left>
      <f7-nav-title title="GHKasa"></f7-nav-title>

      <f7-nav-right>
        <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
      </f7-nav-right>
      <f7-searchbar
              class="searchbar-demo"
              expandable
              search-container=".search-list"
              search-in=".item-title"
              :disable-button="!theme.aurora"
      ></f7-searchbar>
    </f7-navbar>
    <f7-toolbar :scrollable="true" tabbar position="top" bg-color="purple" color="white">
      <f7-link tab-link="#home-tab" tab-link-active>Home</f7-link>
      <f7-link  tab-link="#video-tab">Watch</f7-link>
      <f7-link
              :tab-link="'#tab-'+category.id"
              v-for="category in store.state.categories"
              :key="category.id"
      >
        {{category.name}}</f7-link>
    </f7-toolbar>

    <f7-tabs swipeable>
      <f7-tab id="home-tab" class="page-content" tab-active>

        <f7-swiper :grabCursor="true" :effect="'cards'" :slides-per-view="1">
        <f7-swiper-slide v-if="news.length" v-for="item in news" :key="item.id">


        <f7-card  >
          <f7-card-content :padding="false">
            <div :style="{backgroundImage: `url('${item.jetpack_featured_media_url}')` ,
            height: '300px',backgroundRepeat: 'no-repeat',
             backgroundSize:'cover',
             verticalAlign:'bottom'
            }"
                 style="vertical-align:bottom !important;"
            >
              <f7-card-header
                      text-color="white"
                      class="display-block text-color-white bottom-shade"
                      valign="bottom"
                      style="height: 100%;"
                      link="#"
                      @click="viewPost(item)"

              >

                <span style="position: absolute; bottom: 0;" >
                {{item.title.rendered}}
                <br/>
                <small :style="{opacity: 0.7}">{{item.date_gmt}}</small>

                </span>
             </f7-card-header>
            </div>

          </f7-card-content>
        </f7-card>

        </f7-swiper-slide>
    </f7-swiper>

        <f7-block-title>Recent Posts</f7-block-title>
        <loading-component :count="10" v-if="loading"></loading-component>
        <f7-list media-list class="search-list" v-else>
          <f7-list-item
                  link="#"
                  @click="viewPost(news)"
                  v-for="news in other_news"
                  :key="news.id"
                  :title="news.title.rendered"
                  :subtitle="news.date_gmt"

          >
            <template #media>
              <img :src="news.jetpack_featured_media_url" width="80" />
            </template>
          </f7-list-item>
        </f7-list>

      </f7-tab>

         <f7-tab id="video-tab" class="page-content">

          <h1>tab 2</h1>
      </f7-tab>


      <f7-tab
              v-for="category in store.state.categories"
              :key="category.id"
              :id="'tab-'+category.id"
              class="page-content"
      >

          <h1>{{category.name}} Tab</h1>
      </f7-tab>

    </f7-tabs>



  </f7-page>
</template>

<script>
  import { theme } from 'framework7-vue';
  import tag from "../components/tag.vue";
  import axios from "axios";
  import LoadingComponent from "../components/loadingComponent.vue";
  import store from "../js/store";
  export default {
    props: {
      f7router: Object,
    },
    components:{
      LoadingComponent,
      tag
    },

    name:"home",
    data(){
      return{
        theme,
        store,
        news:[],
        other_news:[],
        loading:false

      }
    },

    methods:{
      viewPost(post){
        this.store.state.selectedPost = post;
        this.f7router.navigate('/about/')
      },
      getLatestPosts(){
        axios.get('https://ghkasa.com/wp-json/wp/v2/posts?per_page=3')
        .then(res=>{
          this.news = res.data;
        })
      },
      getHome(){
        this.loading=true;
        axios.get('https://ghkasa.com/wp-json/wp/v2/posts?per_page=30')
                .then(res=>{
                  this.other_news = res.data;
                  this.loading=false;
                })
      }
    },
    mounted() {
      this.getLatestPosts();
      this.getHome();
    }

  }
</script>
<style scoped>
  .bottom-shade{
    width:100%;
  }
  .bottom-shade:before {
    content: "";

    background-image: linear-gradient(
    rgba(0, 0, 0, 0.0) 0%,
    rgb(0, 0, 0) 100%
    );
  };

</style>
