<template>
    <div class="bookmarks">
        <div class="category" v-for="(bookmark, index) in JSON.parse(bookmarkData)" :key="index">
            <div class="links">
                <li class="title">{{ index }}</li>
                <li v-for="(link, index) in bookmark" :key="index">
                    <a :href="link.url" :target="newTab ? '_blank' : '_self'">{{ link.label }}</a>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bookmarkData: {
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