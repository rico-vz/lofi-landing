<template>
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
            <button class="open-settings-btn" @click="showModal = true">⚙️</button>
            <!-- SettingsModal component -->
            <SettingsModal v-if="showModal" @close="showModal = false" />
        </div>
    </div>
</template>
  
<script>
import config from '@/assets/config.json';
import bookmarkData from '@/assets/bookmarks.json';
import Bookmarks from '@/components/Bookmarks.vue';
import SettingsModal from '@/components/SettingsModal.vue'; // Import your SettingsModal component

export default {
    components: {
        Bookmarks,
        SettingsModal,
    },
    data() {
        return {
            config: {},
            bookmarkData: {},
            showModal: false,
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
