<template>
    
     <v-card
    class="mx-2 mb-5"
    max-width="400"
     tile
    raised
  >
    <v-list-item three-line>
     <v-list-item-avatar
        tile
        size="100"
        color="grey"
      ></v-list-item-avatar>

      <v-list-item-content>
        <div class="overline mb-4"> # {{ theme.theme_id }}</div>
        <v-list-item-title class="headline mb-1">{{ theme.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ theme.description }}</v-list-item-subtitle>
      </v-list-item-content>


    </v-list-item>
   
    <v-card-actions >
         <v-spacer></v-spacer>
      <div><v-btn color="#004D40" dark right :to="'/quizes/' + theme.theme_id ">Quiz</v-btn></div>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  name : 'Theme',
  props : ['theme']
}
</script>

<style>

</style>