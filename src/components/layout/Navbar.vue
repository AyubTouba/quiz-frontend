<template>
    <v-app-bar
      app
      color="#00796B"
      dark
    >
      <div class="d-flex align-center">
   
          <v-btn to="/" text>
        <span >Yuba</span>
        <span class="font-weight-light" > Quiz </span>
          </v-btn>
      <v-btn to="/themes" text>
      <span>Themes</span>
    </v-btn>
       <v-btn to="/about" text>
      <span>About</span>
    </v-btn>
       <v-btn to="/Contact" text>
      <span>Contact us </span>
     </v-btn>
      </div>
        <v-spacer></v-spacer>
     <v-btn >
      <span>Login </span>
      <v-icon right>mdi-login</v-icon>
     </v-btn>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>