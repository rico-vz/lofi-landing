<template>
    <component is="script" v-if="config.showSnow" scoped>
        new Hohoho({snowColor:"#ffffff",snowOpacity:"0.6",ns:100,radius:3,interval:30});
    </component>

    <div class="container">
        <!-- Left Container -->
        <div class="left-container">
            <div class="gif">
                <img src="@/assets/lofi.jpg" />
            </div>
        </div>

        <!-- Right Container -->
        <div class="right-container">
            <div class="head">
                <p>> {{ config.greeting }}{{ config.showName ? ' ' + config.name : '' }}<span class="blinking">_</span></p>
            </div>

            <Bookmarks :bookmarkData="JSON.stringify(bookmarkData)" :newTab="config.openNewTab" />

            <!-- Button to open settings modal -->
            <button class="open-settings-btn" @click="showSettingsModal = true">⚙️</button>
            <button class="open-bookmarks-btn" @click="showBookmarksModal = true">🔖</button>
            <!-- SettingsModal component -->
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

export default {
    watch: {
        'config.showSnow': function (newVal) {
            if (!newVal) {
                const canvas = document.getElementById('canvas');
                canvas.remove();
            }
        }
    },
    components: {
        Bookmarks,
        SettingsModal,
        BookmarksModal,
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
