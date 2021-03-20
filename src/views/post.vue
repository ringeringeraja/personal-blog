<template>
    <div class="post">
        <PostContainer
            :post="post"
            :is-preview="false"
        >
            <template #bottom v-if="isAuthenticated">
                <Button @click="editPost">Modificar</Button>
                <Button @click="removePost">Deletar</Button>
            </template>
        </PostContainer>
    </div>
</template>

<script>
import { defineAsyncComponent, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
    components: {
        PostContainer: defineAsyncComponent(() => import('components/containers/post'))
    },
    setup() {
        const router = useRouter()
        const route = useRoute()

        const store = useStore()

        async function editPost() {
            const { slug } = store.getters['post/item']

            router.push({
                name: 'post-edit',
                params: {
                    slug
                    }
                })
        }

        async function removePost() {
            const { slug } = store.getters['post/item']

            await store.dispatch('post/remove', { slug })
            await store.dispatch('post/clear')

            router.push({ name: 'home' })
        }

        onMounted(async () => {
            const { slug } = route.params
            
            if( slug && !store.getters['post/hasItem'] ) {
                await store.dispatch('post/get', { slug })
            }
        })

        return {
            post: computed(() => store.getters['post/item']),
            isAuthenticated: computed(() => store.getters['user/isAuthenticated']),
            
            editPost,
            removePost,
        }
    }
}
</script>

<style scoped src="./post.css"></style>