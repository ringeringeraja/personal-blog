<template>
    <div class="home">
        <NewPost />
        <Post
            v-for="(post, index) in posts"
            :key="`post-${index}`"

            :post="post"
        />
    </div>
</template>

<script>
import { defineAsyncComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        Post: defineAsyncComponent(() => import('components/post')),
        NewPost: defineAsyncComponent(() => import('components/privileged/new-post'))
    },

    setup() {
        const store = useStore()
        const posts = store.getters['post/items']


        onMounted(() => {
            if( posts.length === 0 ) {
                store.dispatch('post/getAll')
            }
        })
        
        return {
            posts: computed(() => store.getters['post/items'])
        }
    }
}
</script>

<style scoped src="./home.css"></style>