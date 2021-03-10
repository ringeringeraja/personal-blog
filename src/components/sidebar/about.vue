<template>
    <SidebarItemContainer>
        <template v-slot:title>
            Sobre o blog
        </template>
        <template v-slot:content>
            Tudo começou em março de 2021, quando algo surpreendente aconteceu...
        </template>
    </SidebarItemContainer>
</template>

<script>
import Base from './base'

export default {
    extends: Base
}
</script>