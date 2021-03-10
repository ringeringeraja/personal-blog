<template>
    <SidebarItemContainer>
        <template v-slot:title>
            Changelog
        </template>
        <template v-slot:content>
            v0.0 — naquele jeitao
        </template>
    </SidebarItemContainer>
</template>

<script>
import Base from './base'

export default {
    extends: Base
}
</script>