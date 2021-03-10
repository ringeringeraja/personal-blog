<template>
    <div class="entry">
        <div
            class="entry__title"
            v-if="$slots.title"

            :contenteditable="isPost"
        >
            <slot name="title"></slot>
        </div>
        <div
            class="entry__content"
            v-if="$slots.content"

            :contenteditable="isPost"
        >
            <slot name="content"></slot>
        </div>
        <div v-if="isPost">
            Ler mais
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isPost: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped src="./entry.css"></style>