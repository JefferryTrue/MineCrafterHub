<template>
  <div class="uploader">

    <span>
        <h2>Title:</h2>
        <input type="text" v-model="title">
        <h2>Preview:</h2>
        <input type="text" v-model="preview" style="font-size:20px;width: 100%;">
        <h2>Author:</h2>
        <input type="text" v-model="author" style="width:40%">
        <h2>Tag:</h2>
        <select v-model="tag" class="sct">
            <option v-for="item in tagArray" v-bind:key="item.id" v-bind:value="item" v-text="item"></option>
        </select>
        <h2>预览图片:</h2>
        <label  class="FileInput">上传图片<input type="file" style="display:none"></label>
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
            tag:'123',
            tagArray:['runner','resource','community']
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
                }).then(res => {
                    console.log(res.data._id)
                    this.$router.push({ name:'viewContent', query:{ id:res.data._id} })
                })
            })
            
        },
    }
}
</script>

<style scoped>
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

span h2{
    color: antiquewhite;
    font-size:24px;
}

input{
    width: 80%;
    padding: 4px 0 4px 0;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
    border: 0px;
}

.FileInput{
    display: inline-block;
    font-size: 24px;
    padding: 6px;
    margin-bottom: 20px;
    color: antiquewhite;
    border: 2px solid antiquewhite;
    border-radius: 8px;
}

.FileInput:hover{
    cursor: pointer;
}


.sct{
    display: block;
    width: 198px;
    height: 32px;
    background-color: transparent;
    border: 2px solid antiquewhite;
    border-radius: 8px;
    font-size: 24px;
    color: rgb(249, 177, 61);
    align-content: center;
    margin: 0;
    padding: auto;
}



</style>