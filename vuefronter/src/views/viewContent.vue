<template>
  <div class="viewContent">
    <div class="container">
        <h1>{{blog.title}}</h1>
        <p>{{blog.date}}, By @{{blog.author}}</p>
        <div v-html="blog.content" class="context"></div>
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
    },
    mounted:function(){
      document.getElementsByTagName('img').setAttribute("width", "300px");
    }
}
</script>

<style scoped>
.viewContent{
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
}

.container{
  display: block;
  margin: auto;
  width: auto;
  max-width: 1376px;
  padding: 36px 60px 36px 60px;
  
  background-color: rgb(27, 49, 26);
}

.container h1{
  font-size: 50px;
  color: antiquewhite;
}

.container p{
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color:antiquewhite;
}

.context{
  display: block;
  font-size:20px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: antiquewhite;
  margin: 48px 0 0 0;
  min-height: 1280px;
  padding: 12px;
}

img{
  display: block;
  text-align: center;

}

</style>