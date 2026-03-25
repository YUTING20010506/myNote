<script setup>
  import { useNoteStore } from '../stores/note_stores'
  import { storeToRefs } from 'pinia';
  const noteStore = useNoteStore()
  const {notes} = storeToRefs(noteStore)
</script>
<template>
<main id="result" class="container mt-4">
    <div class="row d-flex justify-content-start">
        <div class="col-4 mr-2 mb-4" v-for = "(note, i) in notes">            
            <div class="card">
                <i v-if="note.pinned" class="fa-solid fa-thumbtack me-3 mb-3 rotate"></i>
                <i v-else class="fa-solid fa-thumbtack me-3 mb-3"></i>
                
                <div class="card-body">
                    <h5 class="card-title">{{ note.title }}</h5>
                    <hr>
                    <p class="card-text">{{ note.content }}</p>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<style scoped>
.card i{
  position: relative;
  top: 10px;
  left: 10px;
}
.rotate{
  transform: rotate(45deg);
  color: red;
}
</style>