import { defineAsyncComponent } from 'vue'

export default {
    components: {
        SidebarItemContainer: defineAsyncComponent(() => import('components/containers/sidebar-item'))
    }
}