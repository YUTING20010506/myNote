<script setup>
  import { useNoteStore } from '../stores/note_stores'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  //定義title,content為空容器
  const title = ref('')
  const content = ref('')
  const showSuccessAlert = ref(false)
  const router = useRouter()
  const noteStore = useNoteStore()
  const inValidShow1 = ref(false)
  const inValidShow2 = ref(false)

  
  function clearPlaceholder(){
    document.querySelector('#title').placeholder = ''
    inValidShow1.value = false
  }
  function addPlaceholder(){
    document.querySelector('#title').placeholder = '請輸入標題...'
    if (title.value === '') inValidShow1.value = true
  }
  function checkContent(){
    if(content.value ==='') inValidShow2.value = true
    else inValidShow2.value = false
  }
  //確認我們的title跟content有送出
  function createNote(){
    // 檢查是否有輸入標題，有才進行新增
    if (title.value.trim() === '') return
    //將筆記新增
    const res = noteStore.addNote({
      title1: title.value,
      content1: content.value
    })
    if(res){
      title.value = '';
      content.value = '';
      showSuccessAlert.value = true;
    // 設定 2 秒後自動隱藏成功訊息
      setTimeout(() => {
        showSuccessAlert.value = false;
        router.push('/')
      }, 2000);
    }
    // 顯示成功提示並清空輸入框
      
  }
</script>
<template>
<div class="container p-5">
  <div class="alert alert-success text-left" role="alert" v-if="showSuccessAlert">
    更新成功!
  </div>
  <h2 class="mb-5">新增筆記</h2>
  <form @submit.prevent = 'createNote'>
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder" @blur="addPlaceholder" v-model="title">
        <p v-show="inValidShow2" class="invalid">請輸入內容</p>
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="20" v-model="content"></textarea>
    </div>
    <button class="btn btn-outline-success">儲存 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>
</template>

<style scoped>
  
</style>