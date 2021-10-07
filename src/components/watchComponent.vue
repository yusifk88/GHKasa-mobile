<template>
    <f7-block>


    <f7-block-title>Watch Now</f7-block-title>

   <f7-swiper :spaceBetween="20" :speed="500" :slidesPerView="3">
        <f7-swiper-slide  v-for="video in videos" :key="video.id" @click="watchVideo(video)">
                <img :src="video.snippet.thumbnails.default.url">
            <f7-icon style="position: absolute; z-index: 99; left:30%; top:30%; color:red; opacity:0.6" size="44px" f7="arrowtriangle_right_square_fill"></f7-icon>

        </f7-swiper-slide>

       <f7-swiper-slide  class="slide-card">
            <f7-button>More..</f7-button>
        </f7-swiper-slide>
   </f7-swiper>
    </f7-block>


</template>

<script>
    import axios from "axios";

    export default {
        name: "watchComponent",
        data(){
            return{
                videos:[]
            }
        },
        mounted() {

            this.getVideos();

            },
        methods:{
            watchVideo(video){
              const link = "https://youtube.com/watch?v="+video.id.videoId;
              window.open(link);
            },
            getVideos(){
                axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDdZtQpJZajlNXFdwSqBCKPsixo3Sc_gS4&part=snippet&channelId=UC16nG9OjCsvabRLoaVj5T5A&order=date')
                    .then(res=>{
                        this.videos = res.data.items;
                        console.log(res.data)
                    })

            }
        }
    }
</script>

<style >
    .trunc-text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 150px;
        padding: 10px;
    },
    .slide-card {
        background: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 200px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
</style>
