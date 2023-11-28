<template>
    <div class="container">
        <div class="left-container">
            <div class="gif">
                <img src="@/assets/lofi.jpg" />
            </div>
        </div>

        <div class="right-container">
            <div class="head">
                <p>> {{ config.greeting }}<span class="blinking">_</span></p>
            </div>

            <div class="bookmarks">
                <template v-for="(value, key) in config.links" :key="key">
                    <linksCategory :title="key" :links="JSON.stringify(value)" />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/assets/config.json';
import linksCategory from '@/components/linksCategory.vue';

export default {
    components: {
        linksCategory,
    },
    data() {
        return {
            config: {},
        };
    },
    mounted() {
        if (!localStorage.getItem('config')) {
            localStorage.setItem('config', JSON.stringify(config));
        }
        this.config = JSON.parse(localStorage.getItem('config'));
    },
};
</script>