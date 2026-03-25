<script setup>
import NoteList from './components/NoteList.vue';
import TopBar from './components/TopBar.vue';
</script>

<template>
  <div class="row">
    <div class="col-12">
      <TopBar/>
    </div>
    <div class="col-12 col-md-3">
      <NoteList/>
    </div>
    <div class="col-12 col-md-9">
      <router-view></router-view>
    </div>
    <footer class="col-12">
      <p>copyright&copy; MacroViz.com</p>
    </footer>
  </div>
</template>

<style>
  footer{
    height: 50px;
    background-color: black;
    color: rgb(255, 255, 255);
    line-height: 50px;
  }
</style>
