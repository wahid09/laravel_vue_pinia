<template>
    <div class="is-max-desktop px-2 py-4">
        <div class="card has-background-warning p-4 mb-5 has-shadow">
            <div class="field">
                <div class="control">
                    <textarea v-model="form.note" class="textarea" placeholder="Add a new note" ref="newNoteRef" />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                      @click.prevent="AddNewNote"
                      :disabled="!form.note"
                      class="button is-link is-warning has-text-black has-shadow is-rounded is-focused"
                    >
                        Add New Note
                    </button>
                </div>
            </div>
        </div>
        <Note />
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { NoteStore } from "@/store/NoteStore.js";
import Note from '@/components/note/NoteView.vue'
import { ref, reactive } from 'vue'
const router = useRouter()
const noteStore = NoteStore()
let form = reactive({
            note: ''
        });

const message = ref(noteStore.error)
console.log(message);
const AddNewNote = () =>{
    noteStore.storeNote(form)
}
</script>