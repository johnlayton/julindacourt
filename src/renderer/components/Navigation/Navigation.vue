<template>
    <div class="container">
        <ul>
            <li>
                <router-link to="/logging-page">Logging</router-link>
                <router-link to="/configuration-page">Configuration</router-link>
            </li>
        </ul>
        <slot>
        </slot>
    </div>
</template>

<script>
</script>

<style scoped>
    div.container {
        margin: 0 auto;
        padding: 15px 15px;
        /*background: #f9f7f5;*/
    }

    div.container ul {
        list-style-type: none;
    }
</style>
