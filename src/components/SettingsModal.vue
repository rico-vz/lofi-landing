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
                    :href="'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(editedConfig, null, 2))"
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
        };
    },
    methods: {
        saveConfig() {
            this.$parent.config = this.editedConfig;
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
                const config = JSON.parse(e.target.result);
                this.editedConfig = config;
            };
            reader.readAsText(file);
        },
    },
};
</script>
  
<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(5px);
}

.modal-content {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 400px;
    width: 80%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: #999;
}

.btn-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.save-btn,
.cancel-btn,
.export-btn,
.import-btn {
    padding: 8px 16px;
    margin-left: 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
}

.save-btn {
    background-color: #4caf50;
}

.cancel-btn {
    background-color: #f44336;
}

.export-btn {
    font-size: 12px;
    background-color: #2196f3;
}

.import-btn {
    font-size: 12px;
    background-color: #2196f3;
}

.import-btn>label {
    cursor: pointer;
}

.modal-settings {
    display: flex;
    flex-direction: column;

}

.modal-settings>div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.modal-settings>div>label {
    margin-right: 10px;
}

.modal-settings>div>input {
    margin-right: 10px;
}

.import-btn>input {
    display: none;
}

@media (max-width: 768px) {
    .modal-content {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .modal-content {
        padding: 10px;
    }
}

@media (max-width: 320px) {
    .modal-content {
        padding: 5px;
    }
}
</style>
  