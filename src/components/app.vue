<template>
  <f7-app v-bind="f7params" >

  <!-- Left panel with cover effect-->
  <f7-panel left cover>
    <f7-view>
      <f7-page>
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-block>Left panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>




  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/"></f7-view>



  </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';


  import routes from '../js/routes.js';
  import store from '../js/store';
  import axios from "axios";

  export default {
    setup() {

      // Framework7 Parameters
      const f7params = {
        name: 'GHKasa', // App name
        theme: 'auto', // Automatic theme detection

        // App store
        store: store,
        // App routes
        routes: routes,
      };


      onMounted(() => {
        f7ready(() => {

          axios.get('https://ghkasa.com/wp-json/wp/v2/categories')
                  .then(res=>{
                  console.log(res.data);
                  store.state.categories=res.data;

                  })


        });
      });

      return {
        f7params,

      }
    }
  }
</script>
