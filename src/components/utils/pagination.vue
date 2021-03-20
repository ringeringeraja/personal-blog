<template>
    <div class="pagination">
        <div class="pagination__page">
            Página {{ page }} de {{ maxPage }}
        </div>
        <Button
            style="order: 0"
            @click="prevPage"
            
            :class="{ hidden: page <= 1 }"
        >
            Página anterior
        </Button>
        <Button
            style="order: 2"
            @click="nextPage"

            :class="{ hidden: page >= maxPage }"
        >
            Próxima página
        </Button>
    </div>
</template>

<script>
import { inject, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const router = useRouter()
        const store = useStore()
        
        const { postCount } = inject('configuration')

        function prevPage() {
            const offset = store.getters['post/offset']
            store.dispatch('post/getAll', { start: offset - 10 })
        }

        function nextPage() {
            const offset = store.getters['post/offset']
            store.dispatch('post/getAll', { start: offset + 10 })
        }
        
        watch(
            () => store.getters['post/offset'],
            (offset) => {
                const page = (+Math.floor(offset)/10) + 1
                router.push(`/page/${page}`)
            }
        )

        return {
            page: computed(() => Math.abs(store.getters['post/offset']/10) + 1),
            posts: computed(() => store.getters['post/count']),
            postCount,
            maxPage: Math.floor(postCount/10) + 1,

            prevPage,
            nextPage
        }
    }
}
</script>


<style scoped src="./pagination.css"></style>