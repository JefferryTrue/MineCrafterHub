
<template>
  <div class="index">
    <div class="VPContent">
      <div class="VPContentPage">
        <main>
          <div style="position: relative">
            <div>
              <section id="hero" class="animate__animated animate__bounceIn">
                <span class="tagContainer">
                  <h1 class="tagline">The</h1>
                  <h1 class="tagline">Versatile MineCraft</h1>
                  <h1 class="tagline">Community</h1>
                </span>
                <p class="description">
                  一个纯净的 专为MC发烧友打造的 我的世界 游戏平台
                </p>
                <p class="actions">
                  <a href="/download" class="game">游戏下载</a>
                  <a href="/resource" class="resource">资源下载</a>
                  <a href="/community" class="community">游戏社区</a>
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="preview animate__animated animate__bounceIn">
      <div class="prvContainer">
        <span class="prv">
          <img src="../assets/carouselImg/1.png" alt="" />
          <h3>新手教程</h3>
          <p>新手如何度过第一天</p>
        </span>

        <span class="prv">
          <img src="../assets/carouselImg/2.png" alt="" />
          <h3>新手教程</h3>
          <p>新手如何度过第一天</p>
        </span>

        <span class="prv">
          <img src="../assets/carouselImg/3.png" alt="" />
          <h3>新手教程</h3>
          <p>新手如何度过第一天</p>
        </span>
      </div>
    </div>

    <div class="responser">
      <div class="resContainer">
        <h2>Our Sponsers:</h2>
        <div class="VUETER">
          <h1>
            <a href="https://github.com/JefferryTrue">VUETER Studio</a>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      arr1: [
        require("../assets/carouselImg/1.png"),
        require("../assets/carouselImg/2.png"),
        require("../assets/carouselImg/3.png"),
      ],
      hrs: [
        "https://www.minecraft.net/zh-hans",
        "http://www.minecraftxz.com/bsl-shaders/",
        "http://www.minecraftxz.com/SEUS/",
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .VPContent {
    overflow-x: hidden;
  }
}

.VPContent {
  border-bottom: 1px solid rgba(255, 248, 220, 0.456);
  padding-bottom: 60px;
}

.index {
  display: block;
  margin: 40px 0 0 0;
}

div {
  display: block;
}

main {
  display: block;
}

.tagContainer {
  display: block;
  margin-bottom: 60px;
}

#hero {
  text-align: center;
}

section {
  display: block;
}

h1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.tagline {
  background-image: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 76px;
  line-height: 1.2;
  font-weight: 2000;
  margin: 25px 0 25px 0;
}

.description {
  max-width: 960px;
  font-size: 35px;
  line-height: 1.5;
  color: antiquewhite;
  font-family: Arial, Helvetica, sans-serif;
  margin: 24px auto 60px;
}

.actions a {
  margin: 0 0 0 30px;
  display: inline-block;
  font-size: x-large;
  border-radius: 10px;
  text-decoration: none;
  padding: 10px;
  color: antiquewhite;
  background-color:rgb(37, 63, 64);
}

.actions a:hover {
  background-color: #126640;
}

.game {
  background-color: #42b883 !important;
}

.preview {
  display: block;
  padding: 100px 0 100px 0;
  
  border-bottom:1px solid #caf1db;
}

.prvContainer {
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
}

.prv {
  width: 600px;
  padding: 30px 20px 20px 20px;
  margin: 0 30px 20px 30px;
  display: inline-block;
  border-radius: 22px;
  background-color: #caf1db;
}

.prv img {
  width: 580px;
  height: 320px;
  border-radius: 22px;
}

@media (max-width: 960px) {
  .tagline {
    font-weight: 900;

    font-size: 64px;
  }
  .description {
    font-size: 30px;
    margin-bottom: 48px;
  }
  .actions a {
    font-size: x-large;
  }
  .prv {
    margin: 20px 20px 20px 20px;
  }
  .prv img {
    width: 580px;
    height: 320px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
  }
  .description {
    font-size: 24px;
    margin-bottom: 30px;
  }
  .actions a {
    font-size: x-large;
    margin-left: 4px;
  }
  .prv {
    width: 306px;
    padding: 16px;
  }
  .preview {
    margin-top: 50px;
  }
  .prv img {
    width: 300px;
    height: 180px;
  }
}

.responser{
  display: block;
  padding: 0;
}

.resContaner{
  display: block;
  text-align: center;
  margin: 0;
  padding: 0;
}

.VUETER{
  display: block;
  margin:0;
  padding:0;
  text-align: center;
}

h2{
  display: block;
  padding: 20px;
  color:#b8dfb4;
  margin: 0;
  text-align: center;
}

.VUETER h1{
  margin:60px;
}

h1 a{
  text-decoration: none;
  color: #c39c1c;
  font-family: Arial, Helvetica, sans-serif;
}

h1 a:hover{
  color: #b8dfb4;
}

.MERTRURY{
  margin: 0;
  padding: 0;
}

</style>
