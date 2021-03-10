<template>
    <div class="sidebar">
        <About />
        <Changelog />
        <Categories />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        About: defineAsyncComponent(() => import('components/sidebar/about')),
        Changelog: defineAsyncComponent(() => import('components/sidebar/changelog')),
        Categories: defineAsyncComponent(() => import('components/sidebar/categories')),
    }
}
</script>

<style scoped src="./sidebar.css"></style>