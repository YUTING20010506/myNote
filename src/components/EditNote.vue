<script setup>
  import { ref, watch } from 'vue'
  import { useNoteStore } from '../stores/note_stores'
  import { useRouter, useRoute} from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  const noteStore = useNoteStore()
  let id = Number(route.params.id)
  let current_note = noteStore.notes.find(n => n.id == id)
  const note_title = ref(current_note ? current_note.title : '')
  const note_content = ref(current_note ? current_note.content : '')
  const showAlert = ref(false)


  watch(() => route.params.id, (newId) => {
    id = Number(newId)
    current_note = noteStore.notes.find(n => n.id == id)
    note_title.value = current_note ? current_note.title : ''
    note_content.value = current_note ? current_note.content : ''
  })

  function updateNote(){
    if(current_note){
      const res = noteStore.editNote(current_note.id, note_title.value, note_content.value)
        if(res){
          showAlert.value = true
          setTimeout(function(){
            showAlert.value = false
            router.push('/')
          },2000)
        }
    }
  }
</script>

<template>
<div class="container p-5">
  <div v-show="showAlert" class="alert alert-success text-left" role="alert">
    更新成功!
  </div>
  <h2 class="mb-5">編輯筆記</h2>
  <form @submit.prevent="updateNote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." v-model="note_title">
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="10" v-model="note_content"></textarea>
    </div>
    <button class="btn btn-outline-success">更新 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>

</template>

<style scoped>
.container {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
}

h2 {
  color: #2d3436;
}

.form-control {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  color: #2d3436;
  transition: all 0.3s ease;
}


.form-control:focus {
  border-color: #ffc107;
  box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.15);
  outline: none;
}


.form-control::placeholder {
  color: #b2bec3;
}


.btn-outline-success {
  border-color: #2ecc71;
  color: #2ecc71;
  font-weight: 600;
  border-radius: 8px;
}

.btn-outline-success:hover {
  background-color: #2ecc71;
  color: white;
}
</style>