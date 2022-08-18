<template>
    <div class="Blogs">
        <div class="container" v-for="(item,index) in arrays" :key="index">
          <a class="Each" :href="'/viewContent/?id='+item._id" >
            
            <div class="content">
              <div class="imgDiv">
                  <img :src=item.previewImg alt="">
              </div>
              <div class="textDiv">
                  <h2 class="Each-title">{{item.title}}</h2>
                  <p class="preview">{{item.preview}}......</p>
              </div>
              <div style="clear:both"></div>
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
  background-color:#caf1db;
  display: block;
  width: 100%;
  margin: 0 0 30px 0;
  padding: 0;
  border-radius: 10px;
  text-decoration: none;
}



.content{
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
}

.imgDiv{
  display: block;
  margin: 0 0 0 20px;
  width: 320px;
  height: 220px;
  float: left;
}

.imgDiv img{
  display: block;
  margin-top: 30px;
  width:100%;
  height:100%;
  border-radius: 12px;
}

.textDiv{
  display: block;
  align-content: center;
  max-height: 210px;
  margin: 0 10px;
  padding: 0 16px 0 16px;
  overflow: hidden;
}

.Each-title{
  display: block;
  padding: 10px 0 10px 0;
  margin: 20px 0 10px 0;
  font-size: 36px;
  color:rgb(110, 9, 9);
}

.textDiv p{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  display:inline-block;
  font-size: 24px;
  margin: 0;
  padding: 0;
  color:darkslategray;
}

.readAll{
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  font-weight: 400;
  text-align: right;
  color:darkslategray;
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