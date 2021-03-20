<template>
    <EntryContainer>
        <template #title>
            {{
                post._id
                    ? 'Editar publicação'
                    : 'Nova publicação'
            }}
        </template>
        <template #content>
            <FormContainer>
                <FormLabel>
                    <div>Slug</div>
                    <input
                        class="form__input"
                        type="text"

                        v-model="post.slug"
                    />
                </FormLabel>
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
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const router = useRouter()
        const store = useStore()

        async function savePost() {
            const { slug } = await store.dispatch('post/save', store.getters['post/item'])

            router.push({
                name: 'post',
                params: {
                    slug
                }
            })
        }

        return {
            store,
            post: computed(() => store.getters['post/item']),
            savePost
        }
    },
}
</script>

<style scoped src="./post-edit.css"></style>