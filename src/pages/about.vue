<template>
  <f7-page
      name="about"
           :padding="false"
           style="padding-top: -10px !important;"
  >
    <f7-navbar
        :no-shadow="true"
        :sliding="true"
        inner-class="bg-color-yellow"

    >
      <f7-nav-left>
        <f7-link @click="f7router.back()" text-color="black" ><f7-icon icon="icon-back"></f7-icon>Back</f7-link>
      </f7-nav-left>
      <f7-nav-title text-color="black" v-html="store.state.selectedPost.title.rendered">

      </f7-nav-title>
    </f7-navbar>
    <img
        :src="store.state.selectedPost.jetpack_featured_media_url"
        style="max-width:100%;"
    >
    <f7-block
        class="post-view"
        strong
        v-html="store.state.selectedPost.content.rendered"
        :padding="true"
    >

    </f7-block>

    <f7-block-title>Related Posts</f7-block-title>

    <f7-list media-list class="search-list">

      <f7-list-item
          :link="'/about/'+news.id"
          v-for="news in store.state.selectedPost['jetpack-related-posts']"
          :key="news.id"
          :title="news.title"
          :subtitle="news.date"

      >
        <template #media>
          <img :src="news.img.src" width="80"/>
        </template>
      </f7-list-item>
    </f7-list>

    <template #fixed>
      <!-- FAB Backdrop -->
      <f7-fab-backdrop></f7-fab-backdrop>

      <!-- FAB Right Bottom -->
      <f7-fab text-color="black" position="right-bottom">
        <f7-icon f7="ellipsis"></f7-icon>
        <f7-icon ios="f7:xmark" f7="xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="top">
          <f7-fab-button text-color="black" @click="share" label="Share">
            <f7-icon f7="arrowshape_turn_up_right"></f7-icon>
          </f7-fab-button>
          <f7-fab-button text-color="black" @click="openInBrowser" label="Open in browser">
            <f7-icon text-color="black" f7="globe"></f7-icon>
          </f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>
    </template>
  </f7-page>
</template>
<script>
import {f7} from 'framework7-vue';
import store from "../js/store";
import axios from "axios";
import {Share} from '@capacitor/share';
import {App} from "@capacitor/app";
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },
  computed: {
    pagId() {
      return this.f7route.params.postId;
    }
  },
  watchEffect: {
    pagId() {
      alert(this.pagId);
      this.viewPost(this.pagId);

    }
  },
  data() {
    return {
      store,
      isAndroid:true
    }
  },
  mounted() {
    this.viewPost(this.pagId);
    App.addListener('backButton', () => {
      this.viewPost(this.pagId);

    });


    },
  methods: {
    openInBrowser(){
      window.open(this.store.state.selectedPost.link);

    },
   async share() {

      await Share.share({
        title: this.store.state.selectedPost.title.rendered,
        text: this.store.state.selectedPost.title.rendered,
        url: this.store.state.selectedPost.link,
        dialogTitle: 'Share post from GHKasa',
      });

    },
    gotoRoute(postId) {
      this.f7router.navigate('/about/' + postId)
    },
    viewPost(postId) {


      const all = store.state.allPosts;
      const selectedPost = all.find(p => {
        return p.id === postId;
      });

      if (store.state.selectedPost.id===postId){

      }else if (selectedPost) {

        this.store.state.selectedPost = selectedPost;
        //this.f7router.navigate('/about/' + selectedPost.id);
      } else {
        this.f7router.navigate('/about/' + postId);

        f7.dialog.preloader("Loading...");

        axios.get('https://ghkasa.com/wp-json/wp/v2/posts/' + postId)
            .then(res => {
              this.store.state.selectedPost = res.data;
              this.store.state.allPosts.push(res.data);


              f7.dialog.close();
            })


      }

    }
  },

}
</script>
<style>
iframe {
  width: 100% !important;
}

.post-view img {
  max-width: 100%;
  height: auto;
}

.post-view table {
  max-width: 100%;
  height: auto;
}
.post-view video {
  max-width: 100%;
  height: auto;
}
</style>
