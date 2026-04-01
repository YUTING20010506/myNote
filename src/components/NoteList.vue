<script setup>
  import {useNoteStore} from '../stores/note_stores'
  import { storeToRefs } from 'pinia';
  const noteStore = useNoteStore()
  const {showPinned, showUnpinned} = storeToRefs(noteStore)
</script>
<template>
  <div class="sidebar p-3">
    <div class="container-fluid">
      <router-link to="/add_note" class="text-decoration-none">
        <button class="add-btn w-100 py-2 mb-4">
          <i class="fa-solid fa-plus me-2"></i>新增筆記
        </button>
      </router-link>

      <div class="list-section">
        <p class="section-label">重要</p>
        <ul class="custom-list">
          <li class="list-item" v-for="note in showPinned" :key="note.id">
            <div class="item-left">
              <i class="fa-solid fa-thumbtack pin-red"></i>
              <span class="note-title">{{ note.title }}</span>
            </div>
            <div class="item-actions">
  <router-link :to="{name: 'edit_note', params:{id: note.id}}" class="action-link">
    <i class="fa-regular fa-pen-to-square"></i>
  </router-link>
  <i class="fa-regular fa-trash-can delete-icon" @click="deleteNote(note.id)"></i>
</div>
          </li>
        </ul>
      </div>

      <div class="list-section mt-4">
        <p class="section-label">一般</p>
        <ul class="custom-list">
          <li class="list-item" v-for="note in showUnpinned" :key="note.id">
            <div class="item-left">
              <i class="fa-solid fa-note-sticky text-secondary opacity-50"></i>
              <span class="note-title">{{ note.title }}</span>
            </div>
            <div class="item-actions">
              <router-link :to="{name: 'edit_note', params:{id: note.id}}">
                <i class="fa-regular fa-pen-to-square"></i>
              </router-link>
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: #f4f7f6;
  min-height: 100vh;
  border-right: 1px solid #eee;
}

.add-btn {
  background-color: #ffc107;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  color: #333;
  transition: all 0.2s;
}
.add-btn:hover {
  background-color: #e5ac00;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #636e72;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-left: 10px;
}

.custom-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  transition: background 0.2s;
  background: transparent;
  border: none;
}

.list-item:hover {
  background-color: #fff9e6;
  transform: translateX(5px);
}

.item-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.note-title {
  font-size: 0.95rem;
  font-weight: 500;
  color: #2d3436;
  /* 強制不換行 */
  white-space: nowrap;
  overflow: hidden;
  /* 顯示省略號... */
  text-overflow: ellipsis;
}

.pin-red {
  color: #ef5350;
  transform: rotate(45deg);
  font-size: 0.9rem;
}


.item-actions {
  display: flex;
  align-items: center; 
  gap: 12px;
  margin-left: 10px;
  flex-shrink: 0;
  width: 55px; 
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.2s;
}

.list-item:hover .item-actions {
  opacity: 1;
}

.item-actions i {
  font-size: 0.9rem;
  color: #aaa;
  cursor: pointer;
}

.item-actions i:hover {
  color: #ff9800;
}

.action-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}
</style>