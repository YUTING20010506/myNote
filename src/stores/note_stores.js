import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'


export const useNoteStore = defineStore('note', {

  state: () => ({
    notes:[
      {
        "id": 1,
        "title": "會議記錄",
        "content": "下週一早上十點與設計團隊開會，討論新版首頁的 UI/UX 設計方向。",
        "pinned": true
      },
      {
        "id": 2,
        "title": "購物清單",
        "content": "衛生紙、洗衣精、鮮奶、雞蛋、蘋果、燕麥片。",
        "pinned": false
      },
      {
        "id": 3,
        "title": "Vue 3 學習筆記",
        "content": "今天學習了 Composition API 和 Pinia 的基本用法，感覺比 Vue 2 的 Options API 更靈活。",
        "pinned": true
      },
      {
        "id": 4,
        "title": "週末待辦事項",
        "content": "1. 打掃房間 2. 洗衣服 3. 去圖書館還書 4. 幫家裡的盆栽澆水",
        "pinned": false
      },
      {
        "id": 5,
        "title": "京都旅遊計畫",
        "content": "預計秋天去京都賞楓，必去景點：清水寺、伏見稻荷大社、嵐山。還要記得預訂和服體驗。",
        "pinned": false
      },
      {
        "id": 6,
        "title": "閱讀心得 - 原子習慣",
        "content": "「每天進步 1%，一年後就會進步 37 倍。」建立好習慣的關鍵在於讓它變得顯而易見、有吸引力、容易執行且令人滿足。",
        "pinned": false
      },
      {
        "id": 7,
        "title": "健身計畫",
        "content": "每週一、三、五重訓，二、四有氧。記得多補充蛋白質，每天喝水 2000cc。",
        "pinned": true
      },
      {
        "id": 8,
        "title": "專案靈感",
        "content": "想開發一個可以自動整理發票並記帳的 App，結合 OCR 技術，應該會很實用。",
        "pinned": false
      },
      {
        "id": 9,
        "title": "餐廳口袋名單",
        "content": "信義區新開的拉麵店聽說很厲害，下次找朋友一起去吃。還有中山區的某家老字號居酒屋。",
        "pinned": false
      },
      {
        "id": 10,
        "title": "年度目標回顧",
        "content": "今年的目標是學會日文 N3 並考取駕照。目前日文進度落後，需要再多花點時間複習。",
        "pinned": false
      }
    ]
  }),

  getters: {
      showPinned(){
        return this.notes.filter(note => note.pinned)
      },
      showUnpinned(){
        return this.notes.filter(note =>!note.pinned)
      }
    },
  actions: {
    addNote(note){
      // 1. 印出從元件傳進來的資料，方便開發時除錯確認
      console.log(note)
      // 2. 產生一組新的 id
      const last_id = this.notes.length +1
      // 3. 把新筆記的資料推進 (push) notes 陣列裡
      this.notes.push({
        id:last_id,                 // 賦予剛剛算出來的新 id
        title: note.title1,         // 讀取傳入物件中的 title1 作為標題
        content: note.content1,     // 讀取傳入物件中的 content1 作為內容
        pinned:false                // 預設這篇新筆記為「未置頂」狀態
      })
      return true
    },
    editNote(id, new_title, new_content){
      const note = this.notes.find(note => note.id === id)
      if (!note) return false
      note.title = new_title
      note.content = new_content
      return true
    },
    deleteNote(id){

    },
    searchNotes(keyword){
      this.searchResults = this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword))
      console.log(this.searchResults);
      return this.searchResults;
    }
  }
})