<template>
    <SidebarItemContainer>
        <template #title>
            Administração
        </template>
        <template #content>
            <Button @click="shiftNewPost">Nova publicação</Button>
            <Button @click="goToConfig">Configurações</Button>
            <Button @click="signout">Sair</Button>
        </template>
    </SidebarItemContainer>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

import Base from './base'

export default {
    extends: Base,
    setup() {
        const router = useRouter()
        const route = useRoute()

        const store = useStore()

        function shiftNewPost() {
            store.dispatch('post/clear')

            if( route.path === '/') {
                window.scrollTo(0, 0)
                store.dispatch('admin/shiftNewPost')
            } else {
                router.push({ name: 'post-new' })
            }
        }

        function goToConfig() {
            router.push({ name: 'config' })
        }

        function signout() {
            store.dispatch('user/signout')
        }

        return {
            shiftNewPost,
            goToConfig,
            signout
        }
    }
}
</script>