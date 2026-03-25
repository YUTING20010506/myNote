<script setup>
  import {useNoteStore} from '../stores/note_stores'
  import { storeToRefs } from 'pinia';
  const noteStore = useNoteStore()
  const {showPinned, showUnpinned} = storeToRefs(noteStore)
</script>
<template>
  <div class="sidebar">
    <div class="container">
      <router-link to="/add_note">
        <button class="mt-3 btn btn-warning">新增筆記</button>
      </router-link>

      <h5 class="mt-4 text-start">筆記列表</h5>
      <h6 class="mt-4 text-start">重要</h6>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(note, i) in showPinned" :key="note.id">
          <i class="fa-solid fa-thumbtack me-3 rotate"></i>
          <span>{{ note.title }}</span>
          <div class="icon-group">
            <router-link :to="{name: 'edit_note', params:{id: note.id}}">
              <i class="fa-solid fa-pen-to-square me-3"></i>
            </router-link>
            <i class="fa-solid fa-trash"></i>
          </div>
        </li>
      </ul>
      <h6 class="mt-4 text-start">一般</h6>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(note, i) in showUnpinned" :key="note.id">
          <i class="fa-solid fa-thumbtack me-3"></i>
          <span>{{ note.title }}</span>
          <div class="icon-group">
            <router-link :to="{name: 'edit_note', params:{id: note.id}}">
              <i class="fa-solid fa-pen-to-square me-3"></i>
            </router-link>
            <i class="fa-solid fa-trash"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<style scoped>
.icon-group{
  display: flex;
  width: 50px;
  justify-content: space-between;
  align-items: center;
}
.icon-group i{
  cursor: pointer;
}
.icon-group i:hover{
  color:chocolate;
}
.rotate{
  transform: rotate(45deg);
  color: red;
}

</style>