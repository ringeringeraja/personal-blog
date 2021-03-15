<template>
    <EntryContainer :is-post="true">
        <template v-slot:title>
            {{ post.title }}
        </template>
        <template v-slot:content>
            {{ post.content }}
        </template>
    </EntryContainer>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    components: {
        EntryContainer: defineAsyncComponent(() => import('components/containers/entry'))
    },
}
</script>

<style scoped src="./post.css"></style>