<script setup>
    import { useNoteStore } from '../stores/note_stores'
    const noteStore = useNoteStore()
</script>
<template>
    <h2 v-if="!noteStore.searchResults || noteStore.searchResults.length === 0" class="text-center mt-5">查無相關資料</h2>
    <main id="result" class="container d-flex justify-content-start pt-5 flex-wrap">
        <div v-for="note in noteStore.searchResults" class="card-container mb-4">
            <router-link :to="{ name: 'edit_note', params: { id: note.id } }" class="custom-link">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title text-center">{{note.title}}</h5>
                        <hr>
                        <p class="card-text">{{note.content}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </main>
</template>
<style scoped>
#result {
    width: 90%;
    margin: 0 auto;
    gap: 20px;
}

.card-container {
    width: calc(25% - 20px);
    min-width: 250px;
}

.custom-link {
    text-decoration: none; 
    color: inherit;
    display: block;
    height: 100%;
}

.card {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    transition: all 0.3s ease;
    background-color: #fff;
}

.card:hover {
    background-color: #fffdf7;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transform: translateY(-5px);
    border-color: #ffc107;
}

/* 核心對齊設定 */
.card-body {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    justify-content: flex-start;
}

.card-title {
    font-weight: 700;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    text-align: left;
}

hr {
    margin: 0.5rem 0 1rem 0;
    opacity: 0.15;
    border-top: 2px solid #000;
}

.card-text {
    color: #555;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
}
</style>