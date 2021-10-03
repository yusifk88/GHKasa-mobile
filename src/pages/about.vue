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

  </f7-page>
</template>
<script>
  import store from "../js/store";
  export default {
    data(){
      return{
        store
      }
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
