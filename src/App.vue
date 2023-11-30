<template>
    <SnowEffect v-if="config.showSnow" :config="config" />
    <RainEffect v-if="config.showRain" :config="config" />

    <div class="container">
        <div class="left-container">
            <div class="gif">
                <img src="@/assets/lofi.jpg" />
            </div>
        </div>

        <div class="right-container">
            <div class="head">
                <p>> {{ config.greeting }}{{ config.showName ? ' ' + config.name : '' }}<span class="blinking">_</span></p>
            </div>

            <Bookmarks :bookmarkData="JSON.stringify(bookmarkData)" :newTab="config.openNewTab" />

            <button class="open-settings-btn" @click="showSettingsModal = true">⚙️</button>
            <button class="open-bookmarks-btn" @click="showBookmarksModal = true">🔖</button>

            <SettingsModal v-if="showSettingsModal" @close="showSettingsModal = false" />
            <BookmarksModal v-if="showBookmarksModal" @close="showBookmarksModal = false" />
        </div>
    </div>
</template>


  
<script>
import config from '@/assets/config.json';
import bookmarkData from '@/assets/bookmarks.json';
import Bookmarks from '@/components/Bookmarks.vue';
import SettingsModal from '@/components/SettingsModal.vue';
import BookmarksModal from '@/components/BookmarksModal.vue';
import SnowEffect from '@/components/SnowEffect.vue';
import RainEffect from '@/components/RainEffect.vue';

export default {
    watch: {
        'config.showSnow': function (newVal) {
            if (!newVal) {
                const canvas = document.getElementById('canvas');
                if (canvas) {
                    canvas.remove();
                }
            }
        },
        'config.showRain': function (newVal) {
            if (!newVal) {
                const canvas = document.getElementById('canvas');
                if (canvas) {
                    canvas.remove();
                }
            }
        }
    },
    components: {
        Bookmarks,
        SettingsModal,
        BookmarksModal,
        SnowEffect,
        RainEffect
    },
    data() {
        return {
            config: {},
            bookmarkData: {},
            showSettingsModal: false,
            showBookmarksModal: false,
        };
    },
    mounted() {
        if (!localStorage.getItem('config')) {
            localStorage.setItem('config', JSON.stringify(config));
        }
        if (!localStorage.getItem('bookmarkData')) {
            localStorage.setItem('bookmarkData', JSON.stringify(bookmarkData));
        }

        this.config = JSON.parse(localStorage.getItem('config'));
        this.bookmarkData = JSON.parse(localStorage.getItem('bookmarkData'));
    },
};
</script>
