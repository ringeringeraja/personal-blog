<template>
    <EntryContainer>
        <template v-slot:title>
            Nova publicação
        </template>
        <template v-slot:content>
            <input type="text">
        </template>
    </EntryContainer>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        EntryContainer: defineAsyncComponent(() => import('components/containers/entry'))
    }
}
</script>