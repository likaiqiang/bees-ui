<template>
    <div
        class="ui-upload"
        @click="clickHandler"
    >
        <slot>

        </slot>
        <input
            type="file"
            @change="changeHandler"
            ref="input"
        >
    </div>
</template>

<script>
import ajax from './ajax';
export default {
    name: "ui-upload",
    methods: {
        changeHandler(e) {
            const files = e.target.files;
            if (!files) {
                return;
            }
            this.uploadFiles(files);
            this.$refs.input.value = null;
        },
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files);
            if (!this.multiple) postFiles = postFiles.slice(0, 1);
            if (postFiles.length === 0) return;
            postFiles.forEach(file => {
                this.upload(file);
            });
        },
        upload(file) {
            if (!this.beforeUpload) {
                return this.post(file);
            }
            const before = this.beforeUpload(file);
            if (before && before.then) {
                before.then(
                    processedFile => {
                        if (
                            Object.prototype.toString.call(processedFile) ===
                            "[object File]"
                        ) {
                            this.post(processedFile);
                        } else {
                            this.post(file);
                        }
                    },
                    () => {
                        // this.$emit('cancel', file);
                    }
                );
            } else if (before !== false) {
                this.post(file);
            } else {
                // this.$emit('cancel', file);
            }
        },
        post(file) {
            // check format
            if (this.format.length) {
                const _file_format = file.name
                    .split(".")
                    .pop()
                    .toLocaleLowerCase();
                const checked = this.format.some(
                    item => item.toLocaleLowerCase() === _file_format
                );
                if (!checked) {
                    this.onFormatError(file, this.fileList);
                    return false;
                }
            }
            // check maxSize
            if (this.maxSize) {
                if (file.size > this.maxSize * 1024) {
                    this.onExceededSize(file, this.fileList);
                    return false;
                }
            }
            this.handleStart(file);
            let formData = new FormData();
            formData.append(this.name, file);
            ajax({
                headers: this.headers,
                withCredentials: this.withCredentials,
                file: file,
                data: this.data,
                filename: this.name,
                action: this.action,
                onProgress: e => {
                    this.handleProgress(e, file);
                },
                onSuccess: res => {
                    this.handleSuccess(res, file);
                },
                onError: (err, response) => {
                    this.handleError(err, response, file);
                }
            });
        },
        handleStart(file) {
            file.uid = Date.now() + this.tempIndex++;
            const _file = {
                status: "uploading",
                name: file.name,
                size: file.size,
                percentage: 0,
                uid: file.uid,
                showProgress: true
            };
            this.fileList.push(_file);
        },
        clickHandler() {
            this.$refs.input.click();
        }
    },
    props: {
        action: {
            type: String,
            required: true
        },
        headers: {
            type: Object,
            default() {
                return {};
            }
        },
        multiple: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object
        },
        name: {
            type: String,
            default: "file"
        },
        withCredentials: {
            type: Boolean,
            default: false
        },
        showUploadList: {
            type: Boolean,
            default: true
        },
        // type: {
        //     type: String,
        //     validator(value) {
        //         return oneOf(value, ["select", "drag"]);
        //     },
        //     default: "select"
        // },
        format: {
            type: Array,
            default() {
                return [];
            }
        },
        accept: {
            type: String
        },
        maxSize: {
            type: Number
        },
        beforeUpload: Function,
        onProgress: {
            type: Function,
            default() {
                return {};
            }
        },
        onSuccess: {
            type: Function,
            default() {
                return {};
            }
        },
        onError: {
            type: Function,
            default() {
                return {};
            }
        },
        onRemove: {
            type: Function,
            default() {
                return {};
            }
        },
        onPreview: {
            type: Function,
            default() {
                return {};
            }
        },
        onExceededSize: {
            type: Function,
            default() {
                return {};
            }
        },
        onFormatError: {
            type: Function,
            default() {
                return {};
            }
        },
        defaultFileList: {
            type: Array,
            default() {
                return [];
            }
        },
        paste: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style>
</style>
