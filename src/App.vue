<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="#00796B"  dark>
      <div>YubaQuiz V1.0.0</div>
      <v-spacer></v-spacer>
   <div>   &copy; 2019  </div>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from './components/layout/Navbar';
import { FETCH_THEMES } from "./store/actions.type";
export default {
  name: 'App',

  components: {
    NavBar
  },

  
  data: () => ({
    //
  }),

  created() {
    this.$store.dispatch(FETCH_THEMES);
  }
};
</script>
