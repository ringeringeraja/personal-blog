<template>
    <div class="home">
        <NewPost />
        <Post
            v-for="(i, index) in posts"
            :key="`post-${index}`"

            :post="i"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Post: defineAsyncComponent(() => import('components/post')),
        NewPost: defineAsyncComponent(() => import('components/privileged/new-post'))
    },

    setup() {
        return {
            posts: [
                {
                    title: 'Teste 1',
                    createdAt: '5-5-2021 20:00h'
                },
                {
                    title: 'Teste 2, bla bla',
                    createdAt: '5-5-2021 21:00h'
                }
            ]
        }
    }
}
</script>

<style scoped src="./home.css"></style>