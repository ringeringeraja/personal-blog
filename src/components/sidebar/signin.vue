<template>
    <SidebarItemContainer>
        <template #title>
            Área restrita
        </template>
        <template #content>
            <FormContainer>
                <FormLabel>
                    <div>Usuário</div>
                    <input
                        class="form__input"
                        type="text"

                        v-model="pair.username"
                    />
                </FormLabel>
                <FormLabel>
                    <div>Senha</div>
                    <input
                        class="form__input"
                        type="password"

                        v-model="pair.password"
                    />
                </FormLabel>

                <Button @click="signin">
                    Entrar
                </Button>
            </FormContainer>
        </template>
    </SidebarItemContainer>
</template>

<script>
import Base from './base'
import { computed } from 'vue'
import { useStore } from 'vuex' 

export default {
    extends: Base,

    setup() {
        const store = useStore()
        const pair = store.getters['user/pair']

        function signin() {
            store.dispatch('user/signin', pair)
        }

        return {
            store,
            pair: computed(() => pair),
            signin
        }
    }
}
</script>

<style scoped src="./signin.css"></style>