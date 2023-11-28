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

            <div class="bookmarks">
                <template v-for="(value, key) in config.links" :key="key">
                    <linksCategory :title="key" :links="JSON.stringify(value)" :newTab="config.openNewTab" />
                </template>
            </div>

            <!-- Button to open settings modal -->
            <button @click="showModal = true">Open Settings</button>

            <!-- SettingsModal component -->
            <SettingsModal v-if="showModal" @close="showModal = false" />
        </div>
    </div>
</template>
  
<script>
import config from '@/assets/config.json';
import linksCategory from '@/components/linksCategory.vue';
import SettingsModal from '@/components/SettingsModal.vue'; // Import your SettingsModal component

export default {
    components: {
        linksCategory,
        SettingsModal,
    },
    data() {
        return {
            config: {},
            showModal: false,
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
  