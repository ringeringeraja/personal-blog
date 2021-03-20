<template>
    <div class="home">
        <PostEdit v-if="newPost" />
        <PostContainer
            v-for="(post, index) in posts"
            :key="`post-${index}`"

            :post="post"
        />
        <Pagination />
    </div>
</template>

<script>
import { defineAsyncComponent, computed, onMounted } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'

export default {
    components: {
        PostContainer: defineAsyncComponent(() => import('components/containers/post')),
        PostEdit: defineAsyncComponent(() => import('components/privileged/post-edit')),
        Pagination: defineAsyncComponent(() => import('components/utils/pagination'))
    },

    setup() {
        const route = useRoute()
        const store = useStore()

        const posts = store.getters['post/items']
        const offset = store.getters['post/offset']

        onMounted(async () => {
            if( posts.length === 0 || offset > 0 ) {
                const offset = route.params.page
                    ? (route.params.page-1)*10
                    : 0

                await store.dispatch('post/getAll', { start: offset })
            }
        })

        onBeforeRouteLeave(() => {
            if( store.getters['admin/newPost'] == true ) {
                store.dispatch('admin/shiftNewPost', false)
            }
        })
        
        return {
            posts: computed(() => store.getters['post/items']),
            newPost: computed(() => store.getters['admin/newPost'])
        }
    }
}
</script>

<style scoped src="./home.css"></style>