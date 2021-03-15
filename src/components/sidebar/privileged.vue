<template>
    <SidebarItemContainer>
        <template v-slot:title>
            Administração
        </template>
        <template v-slot:content>
            Teste123
        </template>
    </SidebarItemContainer>
</template>

<script>
import Base from './base'

export default {
    extends: Base
}
</script>