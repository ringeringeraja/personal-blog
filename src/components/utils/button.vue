<template>
    <div class="button">
        <slot></slot>
    </div>
</template>

<script>
export default {
    setup({ label }) {
        return {
            label
        }
    }
}
</script>

<style scoped src="./button.css"></style>