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
            :accept="accept"
        >
    </div>
</template>

<script>
import ajax from "./ajax";
export default {
    name: "ui-upload",
    data(){
      return {
        fileList:[],
        tempIndex: 1
      }
    },
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
        getFile(file) {
            const fileList = this.fileList;
            let target;
            fileList.every(item => {
                target = file.uid === item.uid ? item : null;
                return !target;
            });
            return target;
        },
        handleProgress(e, file) {
            const _file = this.getFile(file);
            this.onProgress(e, _file, this.fileList);
            _file.percentage = e.percent || 0;
        },
        handleSuccess(res, file) {
            const _file = this.getFile(file);
            if (_file) {
                _file.status = "finished";
                _file.response = res;
                this.onSuccess(res, _file, this.fileList);
                // this.dispatch("FormItem", "on-form-change", _file);
                setTimeout(() => {
                    _file.showProgress = false;
                }, 1000);
            }
        },
        handleError(err, response, file) {
            const _file = this.getFile(file);
            const fileList = this.fileList;
            _file.status = "fail";
            fileList.splice(fileList.indexOf(_file), 1);
            this.onError(err, response, file);
        },
        handleRemove(file) {
            const fileList = this.fileList;
            fileList.splice(fileList.indexOf(file), 1);
            this.onRemove(file, fileList);
        },
        handlePreview(file) {
            if (file.status === "finished") {
                this.onPreview(file);
            }
        },
        clearFiles() {
            this.fileList = [];
        },
        clickHandler() {
            if (this.disabled) return
            this.$refs.input.click();
        }
    },
    props: {
        action: {
            type: String,
            default: "https://upload-11.herokuapp.com/upload"
        },
        headers: {
            type: Object,
            default() {
                return {};
            }
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
        disabled: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style>
</style>
