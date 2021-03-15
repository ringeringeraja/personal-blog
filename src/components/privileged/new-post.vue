<template>
    <EntryContainer>
        <template v-slot:title>
            Nova publicação
        </template>
        <template v-slot:content>
            <FormContainer>
                <FormLabel>
                    <div>Título</div>
                    <input
                        class="form__input"
                        type="text"

                        v-model="post.title"
                    />
                </FormLabel>
                <FormLabel>
                    <div>Conteúdo</div>
                    <textarea
                        class="form__textarea"
                        v-model="post.content"
                    ></textarea>
                </FormLabel>

                <Button @click="savePost">
                    Publicar!
                </Button>
            </FormContainer>
        </template>
    </EntryContainer>
</template>

<script>
import { defineAsyncComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        EntryContainer: defineAsyncComponent(() => import('components/containers/entry'))
    },

    setup() {
        const store = useStore()
        const post = reactive(store.getters['post/item'])

        function savePost() {
            store.dispatch('post/save', post)
        }

        return {
            store,
            post,
            savePost
        }
    }
}
</script>

<style scoped src="./new-post.css"></style>