<template>
    <template v-for="(value, key) in JSON.parse(links)" :key="key">
        <div class="category">
            <div class="links">
                <li class="title">{{ key }}</li>
                <ul>
                    <li v-for="(value, key) in value" :key="key">
                    <li v-if="newTab">
                        <a :href="value.url" target="_blank">{{ value.label }}</a>
                    </li>
                    <li v-else>
                        <a :href="value.url">{{ value.label }}</a>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    </template>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        links: {
            type: String,
            required: true
        },
        newTab: {
            type: Boolean,
            default: false
        }
    }
};
</script>