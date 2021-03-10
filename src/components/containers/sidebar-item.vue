<template>
    <div class="item">
        <div
            class="item__title"
            v-if="$slots.title"
        >
            <slot name="title"></slot>
        </div>
        <div
            class="item__content"
            v-if="$slots.content"
        >
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped src="./sidebar-item.css"></style>