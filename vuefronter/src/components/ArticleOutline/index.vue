<template>
    <div class="Blogs">
      
        <div class="container" v-for="(item,index) in arrays" :key="index">
          <a class="Each" :href="'/viewContent/?id='+item._id" >
            <h2 class="Each-title">{{item.title}}</h2>
            <div class="content">

              <div class="imgDiv">
                  <img :src=item.previewImg alt="">
              </div>

              <div class="textDiv">
                  <p class="preview">{{item.preview}}</p>
              </div>
            </div>
            <h2 class="readAll">阅读全文..</h2>
        </a>
        </div>
    </div>

</template>

<script>
export default {
    name:'articleOutline',
    data(){
      return {

      }
    },
    props:['arrays']
}
</script>

<style scoped>
.Blogs{
  display: block;
  width: 100%;
  margin: 0 0 100px 0;
  padding: 0;
  border-radius: 12px;
}

.container{
  display: block;
  margin: 0;
  padding: 0;
}

.Each{
  background-color:bisque;
  display: block;
  width: 100%;
  margin: 0 0 30px 0;
  padding: 0;
  border-radius: 10px;
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