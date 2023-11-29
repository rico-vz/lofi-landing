<template>
    <div class="modal">
        <div class="modal-content">
            <span class="close-btn" @click="closeModal">×</span>
            <h2>Lofi Landing • Settings</h2>

            <div class="modal-settings">
                <div>
                    <label>Show Name:</label>
                    <input type="checkbox" v-model="editedConfig.showName" />
                </div>
                <div>
                    <label>Show Snow:</label>
                    <input type="checkbox" v-model="editedConfig.showSnow" />
                </div>
                <div>
                    <label>Show Rain:</label>
                    <input type="checkbox" v-model="editedConfig.showRain" />
                </div>
                <div>
                    <label>Open Links in New Tab:</label>
                    <input type="checkbox" v-model="editedConfig.openNewTab" />
                </div>
                <div>
                    <label>Greeting:</label>
                    <input type="text" v-model="editedConfig.greeting" />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" v-model="editedConfig.name" />
                </div>
            </div>

            <div class="btn-container">
                <a class="export-btn"
                    :href="'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ config: editedConfig, bookmarks: editedBookmarkData }, null, 2))"
                    :download="'lofi_landing-config_' + new Date().toISOString().split('T')[0] + '.json'">
                    Export
                </a>

                <div class="import-btn">
                    <label for="import-config">Import</label>
                    <input type="file" id="import-config" @change="importConfig" accept=".json" />
                </div>
                <button class="save-btn" @click="saveConfig">Save</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            editedConfig: JSON.parse(JSON.stringify(this.$parent.config)),
            editedBookmarkData: JSON.parse(JSON.stringify(this.$parent.bookmarkData)),
        };
    },
    methods: {
        saveConfig() {
            this.$parent.config = this.editedConfig;
            this.$parent.bookmarkData = this.editedBookmarkData;
            localStorage.setItem('config', JSON.stringify(this.editedConfig));
            this.$emit('close');
        },
        closeModal() {
            this.$emit('close');
        },
        importConfig(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const { config, bookmarks } = JSON.parse(e.target.result);
                this.editedConfig = config;
                this.editedBookmarkData = bookmarks;
            };
            reader.readAsText(file);
        },
    },
};
</script>