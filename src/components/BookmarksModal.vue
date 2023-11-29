<template>
    <div class="modal-bookmarks">
        <div class="modal-content-bookmarks">
            <div class="modal-header">
                <span class="close-btn" @click="closeModal">×</span>

                <h2>Lofi Landing • Bookmarks</h2>
            </div>
            <div class="modal-body">
                <div class="bookmarks">
                    <div class="category-modal" v-for="(bookmark, index) in editedBookmarks" :key="index">
                        <div class="links-modal">
                            <button class="add-link-btn btn-style" @click="addLink(index)">➕</button>

                            <li class="title">{{ index }}</li>
                            <li v-for="(link, linkIndex) in bookmark" :key="linkIndex" class="bookmark-dot">
                                <div>
                                    <button class="edit-link-btn btn-style" @click="editLink(index, linkIndex)">🖌️</button>
                                    <button class="remove-link-btn btn-style"
                                        @click="removeLink(index, linkIndex)">🗑️</button>
                                </div>
                                <a>{{ link.label }}</a>
                            </li>
                            <li>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="save-btn" @click="saveBookmarks">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editedBookmarks: JSON.parse(JSON.stringify(this.$parent.bookmarkData)),
        };
    },
    methods: {
        saveBookmarks() {
            this.$parent.bookmarkData = this.editedBookmarks;
            localStorage.setItem('bookmarkData', JSON.stringify(this.editedBookmarks));
            this.$emit('close');
        },
        closeModal() {
            this.$emit('close');
        },
        removeLink(categoryIndex, linkIndex) {
            this.editedBookmarks[categoryIndex].splice(linkIndex, 1);
        },
        addLink(categoryIndex) {
            const label = prompt("Enter the label for the new link:");
            if (label === null) {
                return;
            }
            const url = prompt("Enter the URL for the new link:");
            if (url === null) {
                return;
            }
            this.editedBookmarks[categoryIndex].push({ url, label });
        },
        editLink(categoryIndex, linkIndex) {
            const currentLabel = this.editedBookmarks[categoryIndex][linkIndex].label;
            const currentUrl = this.editedBookmarks[categoryIndex][linkIndex].url;
            const newLabel = prompt("Enter the new label:", currentLabel);
            const newUrl = prompt("Enter the new URL:", currentUrl);
            this.editedBookmarks[categoryIndex][linkIndex].label = newLabel;
            this.editedBookmarks[categoryIndex][linkIndex].url = newUrl;
        },
    },
};
</script>