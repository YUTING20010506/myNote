<script setup>
import NoteList from './components/NoteList.vue';
import TopBar from './components/TopBar.vue';
</script>

<template>
  <div class="container-fluid p-0 d-flex flex-column min-vh-100">
    
    <div class="row g-0 flex-grow-1"> <div class="col-12">
        <TopBar/>
      </div>
      <div class="col-12 col-md-3">
        <NoteList/>
      </div>
      <div class="col-12 col-md-9">
        <router-view></router-view>
      </div>
    </div>

    <footer class="text-center"> <p class="m-0">copyright &copy; MacroViz.com</p>
    </footer>

  </div>
</template>

<style>
  footer {
    height: 50px;
    background-color: black;
    color: rgb(255, 255, 255);
    line-height: 50px;
    width: 100%;
  }

  footer p {
    margin: 0;
  }
</style>
