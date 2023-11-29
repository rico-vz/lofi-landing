<template>
    <div v-for="(category, index) in bookmmarks" :key="index" class="category">
        <div class="links">
            <li class="title">{{ index }}</li>
            <li v-for="bookmark in category">
                <a :href="bookmark.url">{{ bookmark.label }}</a>
            </li>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        bookmarks: {
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