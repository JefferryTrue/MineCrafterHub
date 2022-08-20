<template>
  <div class="download" v-title data-title="(σﾟ∀ﾟ)σ MineCrafter社区" >
    
    <div class="container">
      <div style="display:block;"><a href="/manager" style="display: block;margin: 8px; background-color: aliceblue;font-size: 28px;padding: 12px;text-align: center;text-decoration: none; color: cornflowerblue; border-radius: 16px;">我要发帖</a></div>
      <div class="intro">
        <h1>MineCrafter社区--在这里和小伙伴们共建世界！</h1>
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
      axios.get('http://localhost:3000/api/blogs/getbytag/community')
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