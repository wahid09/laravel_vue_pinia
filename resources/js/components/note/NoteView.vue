<script setup>
import { computed } from 'vue';
const charLenght = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'Characters' : 'Character'
    return `${length} ${description}`
})

</script>

<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a officiis autem! Itaque saepe velit autem ab doloremque, accusamus earum nesciunt! Ipsa provident nam voluptatum odio ad, illum quo quia.
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>10 Characters</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">
                Delete
            </a>
        </footer>
    </div>
</template>

<style>

</style>