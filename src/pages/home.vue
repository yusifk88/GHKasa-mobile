<template>
  <f7-page :page-content="false">

      <f7-navbar :no-hairline="true" >
          <f7-nav-title title="GHKasa.com"></f7-nav-title>
          <f7-nav-right>
              <f7-link panel-open="right" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" ></f7-link>
          </f7-nav-right>

<!--          <f7-nav-right>-->
<!--              <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>-->
<!--          </f7-nav-right>-->
<!--          <f7-searchbar-->
<!--                  class="searchbar-demo"-->
<!--                  expandable-->
<!--                  search-container=".search-list"-->
<!--                  search-in=".item-title"-->
<!--                  :disable-button="!theme.aurora"-->
<!--          ></f7-searchbar>-->
      </f7-navbar>



      <f7-toolbar
              :no-shadow="true"
              :no-hairline="true"
              :scrollable="true"
              tabbar
              top
              bg-color="purple"
              color="white"
      >

          <f7-link tab-link="#tab-1" text-color="white" tab-link-active>HOME</f7-link>
          <f7-link
                  text-color="white"
                  :tab-link="'#tab-'+category.id"
                  :key="category.id"
                  v-for="category in store.state.categories"
          >{{category.name.toUpperCase()}}</f7-link>

      </f7-toolbar>


    <f7-tabs animated swipeable>
      <f7-tab
              id="tab-1"
              class="page-content"
              tab-active
      >


        <f7-swiper>
        <f7-swiper-slide v-if="news.length" v-for="item in news" :key="item.id">


        <f7-card>
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
                    <h2 style="margin-bottom: 0; font-weight: bolder;" v-html="item.title.rendered"></h2>
                <small :style="{opacity: 0.8}">{{item.date_gmt}}</small>

                </span>
             </f7-card-header>
            </div>

          </f7-card-content>
        </f7-card>

        </f7-swiper-slide>
    </f7-swiper>

          <watch-component></watch-component>

        <f7-block-title>Recent Posts</f7-block-title>
        <loading-component :count="10" v-if="store.state.loading"></loading-component>
        <f7-list media-list class="search-list" v-else>
          <f7-list-item
                  link="#"
                  @click="viewPost(news)"
                  v-for="news in store.state.allPosts"
                  :key="news.id"
                  :title="news.title.rendered"
                  :subtitle="news.date_gmt"

          >
            <template #media>
              <img :src="news.jetpack_featured_media_url" width="80" />
            </template>
          </f7-list-item>
        </f7-list>

          <p v-if="error">{{error}}</p>



      </f7-tab>

      <f7-tab

        :id="'tab-'+category.id"
        class="page-content"
        :key="category.id"
        v-for="category in store.state.categories"

      >
        <post-list-component
                @postSelected="viewPost"
                :category_id="category.id"
                :category="category"
        ></post-list-component>

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
  import PostListComponent from "../components/postListComponent.vue";
  import WatchComponent from "../components/watchComponent.vue";
  export default {
    props: {
      f7router: Object,
    },
    components:{
        WatchComponent,
      PostListComponent,
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
        loading:false,
          error:null

      }
    },

    methods:{
      viewPost(post){
        this.store.state.selectedPost = post;
        this.f7router.navigate('/about/'+post.id)
      },
      getLatestPosts(){
        axios.get('https://ghkasa.com/wp-json/wp/v2/posts?per_page=3')
        .then(res=>{
          this.news = res.data;
        })
      },
      getHome(){
          store.state.loading=true;
        axios.get('https://ghkasa.com/wp-json/wp/v2/posts?per_page=30')
                .then(res=>{
                  this.store.state.allPosts = res.data;
                    store.state.loading=false;

                })
          .catch(error=>{
              this.error = error;
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
      -webkit-box-shadow: inset 0px -149px 34px 0px rgba(0,0,0,0.58);
      -moz-box-shadow: inset 0px -149px 34px 0px rgba(0,0,0,0.58);
      box-shadow: inset 0px -149px 34px 0px rgba(0,0,0,0.58);
  }


</style>
