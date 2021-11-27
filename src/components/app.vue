<template>
  <f7-app v-bind="f7params" :theme-dark="darkMode" >

  <!-- Left panel with cover effect-->
  <f7-panel left :swipe="true" :swipe-active-area="20" >
    <f7-card
            :no-shadow="true"
             :no-border="true"
            class="bg-color-yellow"
            style="margin:0 !important; padding:0 !important; border-radius: unset !important;"
    >
      <f7-card-content   :style="{width: '100%'}">

        <img src="/icons/gh-kasa-ankasa.png" style="width: 200px;" />

      </f7-card-content>
    </f7-card>
    <f7-view>
      <f7-page style="height: 90vh">
        <f7-list simple-list>
          <f7-list-item>
            <span>Dark Mode</span>
            <f7-toggle

                    @change="themeToggleChanged"
                    :checked="darkMode"
            ></f7-toggle>
          </f7-list-item>
        </f7-list>


      <f7-list >
        <f7-list-item title="About GHKasa">

        </f7-list-item>
        <f7-list-item title="Facebook">

        </f7-list-item>
        <f7-list-item title="Twitter">

        </f7-list-item>
        <f7-list-item title="Instagram">

        </f7-list-item>
        <f7-list-item title="Youtube">

        </f7-list-item>
      </f7-list>

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
  import { App } from '@capacitor/app';
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
          App.addListener('backButton', () => {
              f7.views.main.router.back();

          });

           store.state.loading=true;
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
    },
    data(){
      return{
        darkMode:localStorage.theme==='dark'
      }
    },
    watch:{
      darkMode(){
       localStorage.theme=this.darkMode?'dark':'light';
      }
    },
    computed:{
      appTheme(){
       return  localStorage.theme==='dark';
      }
    },

    methods:{
      themeToggleChanged(){

       this.darkMode=!this.darkMode;

  }
    }

  }
</script>
