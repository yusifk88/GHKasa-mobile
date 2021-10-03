<template>
    <f7-chip text="Chris"  media-bg-color="orange" text-color="black"  ></f7-chip>
</template>

<script>
    import axios from "axios";

    export default {
        props:['tag_id'],
        name: "tag",
        data(){
            return{
                tag:null
            }
        },
        mounted() {
            axios.get('https://ghkasa.com/wp-json/wp/v2/tags/'+this.tag_id)
                .then(res=>{
                    console.log(res.data)
                })
        }
    }
</script>

<style scoped>

</style>
