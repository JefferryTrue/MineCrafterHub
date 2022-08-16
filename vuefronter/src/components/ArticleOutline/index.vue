<template>
    <div class="Blogs">
        <a class="Each" href="/index">
            <h2 class="Each-title">123</h2>
            <div class="content">

            <div class="imgDiv">
                <img src="../../assets/carouselImg/1.png" alt="">
            </div>

            <div class="textDiv">
                <p class="preview">我的世界启动器是玩我的世界的玩家必须使用的管理工具，使用启动器可以帮助玩家轻松管理我的世界的各种不同游戏版本，一些游戏存档，我的世界启动器的版本是非常多的，各种不同的我的世界启动器都是有着自己特色的，感兴趣的玩家就来看看吧！</p>
            </div>
            </div>
            <h2 class="readAll">阅读全文..</h2>
        </a>
    </div>

</template>

<script>
export default {
    name:'article',
    data(){

    },
    props:['tag']
}
</script>

<style scoped>
.Blogs{
  background-color:bisque;
  display: block;
  width: 100%;
  margin: 0 0 100px 0;
  padding: 0;
  border-radius: 12px;
}

.Each{
  display: block;
  width: 100%;
  margin: 0 0 30px 0;
  padding: 0;
  text-decoration: none;
}

.Each-title{
  display: block;
  text-align: center;
  padding: 10px 0 10px 0;
  margin: 0;
  font-size: 30px;
  color:darkgreen;
}

.content{
  display: inline-block;
  padding: 0;
  margin: 0;
}

.imgDiv{
  display: block;
  margin: 0 0 0 20px;
  width: 360px;
  height: 220px;
  float: left;
}

.imgDiv img{
  display: inline-block;
  width:100%;
  height:100%;
  border-radius: 12px;
}

.textDiv{
  display: block;
  align-content: center;
  max-height: 226px;
  margin: 0 10px;
  padding: 0 16px 0 16px;
  overflow: hidden;
}

.textDiv p{
  font-size: 24px;
  margin: 0;
  padding: 0;
}

.readAll{
  display: block;
  text-align: right;
  padding: 0 16px 16px 0;
}

@media (max-width: 960px) {
  .imgDiv{
    display: none;
  }
}

@media (max-width: 768px) {
  .intro h1{
    display: block;
    font-size: 40px;
  }
}

</style>