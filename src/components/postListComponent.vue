<template>
    <f7-block-title v-html="category.name">

    </f7-block-title>

    <f7-list media-list class="search-list" >
        <loading-component :count="10" v-if="loading"></loading-component>

    <f7-list-item
            v-else
            link="#"
            @click="viewPost(news)"
            v-for="news in posts"
            :key="news.id"
            :title="news.title.rendered"
            :subtitle="news.date_gmt"

    >
        <template #media>
            <img :src="news.jetpack_featured_media_url" width="80" />
        </template>
    </f7-list-item>
    </f7-list>
    <f7-button

            :loading="gettingMore"
            @click="getMore"
            :preloader="true"
    >Load More...</f7-button>

</template>

<script>
    import store from "../js/store";
    import axios from "axios";
    import LoadingComponent from "./loadingComponent.vue";
    export default {
        components: {LoadingComponent},
        props:['category_id','category'],
        name: "postListComponent",
        data(){
          return{
              store,
              posts:[],
              loading:false,
              per_page:20,
              gettingMore:false
          }
        },
        watch:{
          category_id(){
              this.posts = this.store.state.allPosts.filter(post=>{

                  return post.categories.includes(this.category_id);

              })
            }
        },
        methods:{
            viewPost(post){
               this.$emit('postSelected',post);
            },
            getFirst(){
                this.loading=true;
                axios.get('https://ghkasa.com/wp-json/wp/v2/posts?per_page='+this.per_page+'&categories='+this.category_id)
                    .then(res=>{
                        this.posts= res.data;
                        this.loading=false;

                    })
            },
            getMore(){
                this.gettingMore=true;
                this.per_page+=20;
                axios.get('https://ghkasa.com/wp-json/wp/v2/posts?per_page='+this.per_page+'&categories='+this.category_id)
                    .then(res=>{
                        this.posts= res.data;
                        this.gettingMore=false;

                    })
            }
        },
        mounted() {
           this.getFirst();
        },

    }
</script>

<style scoped>

</style>
