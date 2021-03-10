<template>
    <div class="app">
        <div class="app__banner">
            <Banner />
        </div>
        <main class="app__main">
            <router-view />
        </main>
        <aside class="app__sidebar">
            <Sidebar />
        </aside>
        <footer class="app__footer">
            <Footer />
        </footer>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Banner: defineAsyncComponent(() => import('components/common/banner')),
        Footer: defineAsyncComponent(() => import('components/common/footer')),
        Sidebar: defineAsyncComponent(() => import('components/common/sidebar'))
    }
}
</script>

<style scoped src="./app.css"></style>