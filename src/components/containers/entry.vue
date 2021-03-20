<template>
    <div class="entry">
        <div
            class="entry__title"
            v-if="$slots.title"
        >
            <slot name="title"></slot>
        </div>
        <div
            class="entry__details"
            v-if="$slots.details"
        >
            <slot name="details"></slot>
        </div>
        <div
            class="entry__content"
            v-if="$slots.content"
        >
            <slot name="content" v-if="!isPost"></slot>
            <div v-html="content"></div>
        </div>
        <div
            class="entry__bottom"
            v-if="$slots.bottom"
        >
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

export default {
    props: {
        isPost: {
            type: Boolean,
            default: false,
        },
    },
    setup({ isPost }, { slots }) {
        function renderMarkdown() {
            if( slots.content && isPost ) {
                const md = MarkdownIt()
                const renderedSlot = slots.content()[0].children

                return md.render(renderedSlot)

            }
        }

        return {
            content: computed(() => renderMarkdown())
        }
    }
}
</script>

<style scoped src="./entry.css"></style>