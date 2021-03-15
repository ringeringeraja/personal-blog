<template>
    <div class="sidebar">
        <About />
        <Changelog />
        <Categories v-if="false" />

        <Privileged />
        <Signin />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        About: defineAsyncComponent(() => import('components/sidebar/about')),
        Changelog: defineAsyncComponent(() => import('components/sidebar/changelog')),
        Categories: defineAsyncComponent(() => import('components/sidebar/categories')),
        Privileged: defineAsyncComponent(() => import('components/sidebar/privileged')),
        Signin: defineAsyncComponent(() => import('components/sidebar/signin'))
    }
}
</script>

<style scoped src="./sidebar.css"></style>