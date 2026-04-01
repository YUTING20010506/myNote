<script setup>
  import { useNoteStore } from '../stores/note_stores'
  import { storeToRefs } from 'pinia';
  const noteStore = useNoteStore()
  const { notes } = storeToRefs(noteStore)
</script>

<template>
    <main id="result" class="container mt-4">
        <div v-if="notes.length === 0" class="text-center py-5">
            <p class="text-muted fs-4">目前沒有任何筆記，點擊上方按鈕新增吧！</p>
        </div>

        <div v-else class="row d-flex justify-content-start">
            <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="(note, i) in notes" :key="note.id">            
                <div class="card h-100" :class="{ 'pinned-bg': note.pinned }">
                    
                    <i v-if="note.pinned" class="fa-solid fa-thumbtack pin-icon rotate"></i>
                    <i v-else class="fa-solid fa-thumbtack pin-icon text-secondary opacity-25"></i>

                    <div class="card-body">
                        <h5 class="card-title">{{ note.title }}</h5>
                        <hr class="custom-hr">
                        <p class="card-text">{{ note.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.card {
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid #eee;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}


.pinned-bg {
  background-color: #fffdf2;
  border-color: #ffeeba;
}


.pin-icon {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  font-size: 1.1rem;
  z-index: 10;
}

.rotate {
  transform: rotate(45deg);
  color: #e74c3c;
}

.card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
  transform: translateY(-8px);
  border-color: #ddd;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
}

.card-title {
  font-weight: 800;
  font-size: 1.2rem;
  color: #333;
  height: 3.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding-right: 2rem;
}

.custom-hr {
  margin: 1rem 0;
  border: 0;
  border-top: 2px solid #f0f0f0;
  opacity: 1;
}

.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #666;
  line-height: 1.7;
  text-align: justify;
  word-break: break-all;
  /* overflow-wrap: break-word; */
}
</style>