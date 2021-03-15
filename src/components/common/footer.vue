<template>
    <div class="footer">
        Versão {{ version }}
    </div>
</template>

<script>
import { version } from '../../../package.json'

export default {
    setup() {
        return {
            version
        }
    }
}
</script>