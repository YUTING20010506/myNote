<script setup>
  import { ref } from 'vue'
  import { useNoteStore } from '../stores/note_stores'
  import { useRouter } from 'vue-router'

  const noteStore = useNoteStore()
  const router = useRouter()
  const keyword = ref("")
  async function seachNotes(){
    const results = await noteStore.searchNotes(keyword.value)
    if(results.length > 0){
      router.push({name:'search'});
    }
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex justify-content-between">
      <div class="logo-container">
        <router-link class="navbar-brand" to="/"><img src="/logo.png" alt="logo" class="logo">Quick Note</router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <form class="d-flex" @submit.prevent="seachNotes">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
  </nav>
</template>

<style scoped>
  .logo{
    width: 100px;
  }
  .navbar {
  background-color: #ffffff !important;
  border-bottom: 1px solid #eee;
  padding: 0.8rem 1rem;
  }

  .navbar-brand {
  color: #2d3436 !important;
  font-size: 1.5rem;
  font-family: "Rock Salt", cursive;
  font-weight: 400;
  font-style: normal;
  }
  .form-control {
  border-radius: 20px;
  background-color: #f1f3f4;
  border: 1px solid transparent;
}

.form-control:focus {
  background-color: #fff;
  border-color: #ffc107;
}

.btn-outline-success {
  border-radius: 20px;
  border-color: #ffc107;
  color: #ffc107;
}

.btn-outline-success:hover {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #fff;
}
</style>