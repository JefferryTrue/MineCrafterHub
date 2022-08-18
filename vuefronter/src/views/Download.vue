<template>
  <div class="download" v-title data-title="(*^▽^*)MineCrafter-游戏下载" >
    <div class="container">
      <div class="intro">
        <h1>我的世界启动器介绍</h1>
        <p>我的世界启动器是玩我的世界的玩家必须使用的管理工具，使用启动器可以帮助玩家轻松管理我的世界的各种不同游戏版本，一些游戏存档，我的世界启动器的版本是非常多的，各种不同的我的世界启动器都是有着自己特色的，感兴趣的玩家就来看看吧！</p>
      </div>
      
      <ArticleOutline v-bind:arrays="blogs"></ArticleOutline>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
import ArticleOutline from '../components/ArticleOutline/index.vue';
export default {
    name:'download',
    data(){
        return {
          blogs:[]
        }
    },
    components:{
      ArticleOutline
    },
    created:function(){
      axios.get('http://localhost:3000/api/blogs/getbytag/runner')
      .then(blogs => {
        console.log(blogs.data);
        this.blogs = blogs.data;
      })
    }
}
</script>

<style scoped>

.download{
  display: block;
  margin: 0;
  padding: 0;
}

.container{
  display: block;
  margin:auto;
  padding: 20px 30px 20px 30px;
  max-width: 1376px;
}

.intro{
  display: block;
  color: antiquewhite;
  max-width: 1376px;
}

.intro h1{
  display: block;
  font-size: 60px;
}

.intro p{
  font-size: 22px;
  line-height: 1.2;
}

@media (max-width: 960px) {
  .intro h1{
    font-size: 40px;
  }
  .intro p{
    font-size:20px
  }
  .imgDiv{
    display: none;
  }
}

@media (max-width: 768px) {
  .intro h1{
    font-size: 36px;
  }
  .intro p{
    font-size:18px
  }
}

</style>