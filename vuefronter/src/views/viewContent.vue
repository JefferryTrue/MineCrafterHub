<template>
  <div class="viewContent">
    <div class="container">
        {{blog._id}}
        <h2>Title:</h2>
        <h2>{{blog.title}}</h2>
        <h2>date:</h2>
        <h2>{{blog.date}}</h2>
        <h2>Author:</h2>
        <h2>{{blog.author}}</h2>
        <p v-html="blog.content"></p>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
    name:'viewContent',
    data(){
        return {
            blog:{}
        }
    },

    created:function(){
      var id = this.$route.query.id;
      axios.get('http://localhost:3000/api/blogs/'+id)
      .then(blog => {
        console.log(blog.data);
        this.blog = blog.data;
      })
    }
}
</script>

<style scoped>

</style>