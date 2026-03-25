import { createRouter, createWebHistory } from 'vue-router'
import AddNote from '../components/AddNote.vue'
import EditNote from '../components/EditNote.vue'
import NoteGrid from '../components/NoteGrid.vue'
import NoteList from '../components/NoteList.vue'
import SearchResult from '../components/SearchResult.vue'

const router = createRouter({

  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: NoteGrid, meta:{title:'我的筆記應用'}},
    {path: '/add_note', name: 'add_note', component: AddNote, meta:{title:'新增筆記 | 我的筆記應用'}},
    {path: '/edit_note/:id', name: 'edit_note', component: EditNote, meta:{title:'編輯筆記 | 我的筆記應用'}},
    {path: '/list', name: 'list', component: NoteList},
    {path: '/search', name: 'search', component: SearchResult, meta:{title:'搜尋結果 | 我的筆記應用'}},
  ]
})

export default router