<template>
    <div :class="`button button--${buttonStyle}`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        buttonStyle: {
            type: String,
            default: 'default'
        }
    },
}
</script>

<style scoped src="./button.css"></style>