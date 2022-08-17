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
    </span>
    
    <Markdowner ref='ch'></Markdowner>

    <button @click="sendBlog">发表</button>
  </div>
</template>

<script>
import axios from 'axios'
import Markdowner from '@/components/markdown/Markdowner.vue';
export default {
    name:'upload',
    data(){
        return {
            title:'',
            content:'',
            author:'',
            preview:'',
            tag:''
        }
    },
    components:{Markdowner},
    methods:{
        sendBlog(){
            let markdown = this.$refs.ch;
            var htmlContent = this.converter.makeHtml(markdown.context);
            this.content = htmlContent;
            var formdata = new FormData();
            formdata.append('title',this.title);
            formdata.append('preview',this.preview);
            formdata.append('author',this.author);
            formdata.append('content',this.content);
            formdata.append('tag',this.tag);
            axios({
                url:'http://localhost:3000/api/blogs/addBlog',
                method:'post',
                data:formdata,
                headers: { 'Content-Type': 'multipart/form-data' },
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