import { defineStore } from 'pinia'

export const NoteStore = defineStore({
    id:'NoteStoreId',

    state:()=>({
        note: [],
        error: [],
    }),

    getters:{
    },

    actions:{
        async storeNote(data){
            await axios.post('/api/note', data).then(res => {
                if (res.data.success) {
                    //localStorage.setItem('token',res.data.token)
                    //userStore.setToken(res.data.token)
                    //router.push({ name: 'Dashboard' })
                    //console.log(res.data.message);
                    alert(res.data.message)
                    data.note = '';
                }
            }).catch(e => {
                this.error = e.response.data.errors
                alert(this.error.note[0])
            })
        }
    }
})