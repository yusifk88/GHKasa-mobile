<template>
  <f7-page name="about" :padding="false" style="padding-top: 0 !important;">
    <f7-navbar
            :transparent="true"
            :no-shadow="true"
            :title="store.state.selectedPost.title.rendered"
            back-link="Back"
            :sliding="true"
    ></f7-navbar>
   <img
           :src="store.state.selectedPost.jetpack_featured_media_url"
           style="max-width:100%; margin-top: -45px;"
   >
    <f7-block
            class="post-view"
            strong
            v-html="store.state.selectedPost.content.rendered"
            :padding="true"
    >

    </f7-block>

      <f7-block-title>Related Posts</f7-block-title>

      <f7-list media-list class="search-list" >

          <f7-list-item
                  link="#"
                  @click="viewPost(news)"
                  v-for="news in store.state.selectedPost['jetpack-related-posts']"
                  :key="news.id"
                  :title="news.title"
                  :subtitle="news.date"

          >
              <template #media>
                  <img :src="news.img.src" width="80" />
              </template>
          </f7-list-item>
      </f7-list>

      <template #fixed>
          <!-- FAB Backdrop -->
          <f7-fab-backdrop></f7-fab-backdrop>

          <!-- FAB Right Bottom -->
          <f7-fab position="right-bottom">
              <f7-icon f7="ellipsis"></f7-icon>
              <f7-icon ios="f7:xmark" f7="xmark" md="material:close"></f7-icon>
              <f7-fab-buttons position="top">
                  <f7-fab-button label="Share">
                      <f7-icon f7="arrowshape_turn_up_right"></f7-icon></f7-fab-button>
                  <f7-fab-button label="Open in browser">1</f7-fab-button>
              </f7-fab-buttons>
          </f7-fab>
      </template>
  </f7-page>
</template>
<script>
    import { f7 } from 'framework7-vue';
  import store from "../js/store";
  import axios from "axios";
  export default {
      props: {
          f7router: Object,
      },
    data(){
      return{
        store
      }
    },
      methods:{
        viewPost(post){

            const all = store.state.allPosts;
            const selectedPost = all.find(p=>{
               return p.id === post.id;
            });

            if (selectedPost) {
                this.store.state.selectedPost = selectedPost;
                this.f7router.navigate('/about/' + selectedPost.id);
            }else {
                f7.dialog.preloader("Loading...");

                axios.get('https://ghkasa.com/wp-json/wp/v2/posts/'+post.id)
                .then(res=>{
                    this.store.state.selectedPost = res.data;
                    this.store.state.allPosts.push(res.data);

                    this.f7router.navigate('/about/' + res.data.id);

                    f7.dialog.close();
                })


            }
            console.log(selectedPost);

        }
      },
      mounted() {
         console.log(store.state.selectedPost['jetpack-related-posts']);
      }
  }
</script>
<style >
  iframe{
    width: 100% !important;
  }
  .post-view img{
    max-width:100%;
    height:auto;
  }
</style>
