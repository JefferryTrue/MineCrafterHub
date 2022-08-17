<template>
  <div class="uploader">

    <span>
        <h2>Title:</h2>
        <input type="text" v-model="title">
        <h2>preview:</h2>
        <input type="text" v-model="preview">
        <h2>author:</h2>
        <input type="text" v-model="author">
        <h2>tag:</h2>
        <input type="text" v-model="tag">
        <h2>预览图片</h2>
        <input type="file">
    </span>
    
    <Markdowner ref='ch'></Markdowner>

    <button @click="sendBlog()">发表</button>
  </div>
</template>

<script>
import axios from 'axios'
import Markdowner from '@/components/markdown/Markdowner.vue';
export default {
    name:'upload',
    data(){
        return {
            title:'123',
            content:'123',
            author:'123',
            preview:'123',
            tag:'123'
        }
    },
    components:{Markdowner},
    methods:{
        sendBlog(){
            let markdown = this.$refs.ch;
            var htmlContent = this.converter.makeHtml(markdown.context);
            this.content = htmlContent;

            var ImgFormData = new FormData;
            ImgFormData.append('image',document.querySelector('input[type=file]').files[0]);

            axios({
                url:'http://localhost:3000/api/img/previewImg',
                method:'post',
                data:ImgFormData,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(ret => {
                const BlogForm = {
                    "title" : this.title,
                    "preview":this.preview,
                    "author":this.author,
                    "content":this.content,
                    "tag":this.tag,
                    "previewImg":ret.data.url
                }
                axios({
                    url:'http://localhost:3000/api/blogs/addBlog',
                    method:'post',
                    data:BlogForm,
                    headers: { 'Content-Type':'application/json' },
                })
            })
            console.log(htmlContent);
        },
    }
}
</script>

<style>
.uploader{
    display: block;
    margin:auto;
    max-width: 1376px;
    padding:0;
}

.span{
    display: block;
    margin: 0;
    padding:0;
}


</style>