<template>
    <SidebarItemContainer>
        <template #title>
            Sobre o blog e sobre o autor
        </template>
        <template #content>
            <div class="about">
                {{ about.trim() }}
            </div>
        </template>
    </SidebarItemContainer>
</template>

<script>
import { about } from '~/blog'
import Base from './base'

export default {
    extends: Base,
    setup() {
        return {
            about
        }
    }
}
</script>

<style scoped src="./about.css"></style>