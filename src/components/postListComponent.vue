<template>
    <f7-list media-list class="search-list" >

    <f7-list-item
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
</template>

<script>
    import store from "../js/store";
    export default {
        props:['category_id'],
        name: "postListComponent",
        data(){
          return{
              store,
              posts:[]
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
        },
        mounted() {
            this.posts = this.store.state.allPosts.filter(post=>{

                return post.categories.includes(this.category_id);

            });

            console.log("from view",this.posts);
        },
        computed:{

            // posts(){
            //     return this.store.state.allPosts.filter(post=>{
            //
            //         return post.categories.includes(this.category_id);
            //
            //     })
            // }

        }

    }
</script>

<style scoped>

</style>
