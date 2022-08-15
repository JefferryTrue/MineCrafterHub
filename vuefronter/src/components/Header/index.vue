
<template>
    <div class="HeaderComp animate__animated animate__bounceInDown" :class="{t:ShowSelect,nt:!ShowSelect}" >
        <div class="VPNavBar" >
            <div class="container " >
                <a href="/index" class="leftLogo">
                    <img src="../../assets/Header/LOGO.png">
                    <h1>MineCrafter</h1>
                </a>

                <div class="content " >
                    <div class="VPNavBarSearch hidden-sm-and-up" >
                        <img src="../../assets/Header/icons8-menu-16.png" @click="changeLogo()" v-if="!ShowSelect">
                        <img src="../../assets/Header/icons8-close-16.png"  @click="changeLogo()" v-if="ShowSelect">
                    </div>

                    <nav class="VPNavBarMenu hidden-xs-only">
                        <a href="/index" class="VPNavBarMenuLink">首页</a>
                        <a href="/download" class="VPNavBarMenuLink">游戏下载</a>
                        <a href="/resource" class="VPNavBarMenuLink">游戏资源</a>
                        <a href="/community" class="VPNavBarMenuLink">社区</a>
                        <a href="https://github.com/JefferryTrue" class="VPNavBarMenuLink">
                            <img src="../../assets/Header/icons8-github-30.png">
                        </a>
                    </nav>

                </div>

            </div>
        </div>

        <div class="VPNavScreen " v-if="ShowSelect" :class="{t:ShowSelect,nt:!ShowSelect}">
            <div class="containerr">
                <nav class="VPNavScreenMenu animate__animated animate__bounceIn">
                        <a href="/index" class="VPNavScreenMenuLink">首页</a>
                        <a href="/download" class="VPNavScreenMenuLink">游戏下载</a>
                        <a href="/resource" class="VPNavScreenMenuLink">游戏资源</a>
                        <a href="/community" class="VPNavScreenMenuLink">社区</a>

                </nav>
            </div>
        </div>

    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
    name:"headerComp",
    data(){
        return {
            ShowSelect:false
        }
    },
    methods:{
        changeLogo:function(){
            this.ShowSelect = !this.ShowSelect;
            if(this.ShowSelect){
                document.querySelector('body').setAttribute('style', 'overflow:hidden');
                document.querySelector('.HeaderComp').setAttribute('style', 'min-height:100vh');
            }
            else
            {
                document.querySelector('body').removeAttribute('style');
                document.querySelector('.HeaderComp').removeAttribute('style');
            }
        }
    }
}
</script>

<style scoped>

.HeaderComp{
    position:relative;
    flex-direction: column;
    top:0;
    height: 54px;
    left: 0;
    width: 100%;
}

.VPNavBar{
    position: relative;
    padding: 0 12px 0 24px;
    height: 55px;
    white-space: nowrap;
    border-bottom: 1px solid cornsilk;
}

.container{
    display: flex;
    justify-content: space-between;
    max-width: 1376px;
    margin: 0 auto;
}

.leftLogo{
    display: flex;
    align-items: center;
    padding-top:1px;
    height: 55px;
    
    text-decoration: none;
}

.leftLogo h1{
    display:flex;
    width: auto;
    height: auto;
    margin-left: 12px;
    color: beige;
}

.content{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
}

@media screen and (min-width: 768px){
    .VPNavBarSearch {
        flex-grow: 1;
        display: flex;
        align-items: center;
        padding-left: 16px;
        margin-right: 4px;
    }
}

@media screen and (min-width: 768px){
    .VPNavBarMenu{
        display: flex;
    }
}

nav{
    display: block;
}

.VPNavBarMenuLink{
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    display: block;
    padding: 0 12px;
    line-height: 54px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    align-items: center;
    color:bisque;
    white-space: nowrap;
    height: 54px;
}

.VPNavBarMenuLink:hover{
    background-color: rgb(40, 68, 68);
}

.VPNavBarMenuLink img{
    text-align: center;
    align-items: center;
    display: block;
    margin-top: 15px;
}

.VPNavScreen{
    position: fixed;
    top: 57px;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 32px;
    background-color:darkslategrey;
    overflow: hidden;
}

.containerr{
    margin: 0 auto;
    padding: 24px 0 96px 0;
    max-width: 288px;
    height: auto;
}

.VPNavScreenMenu{
    padding: 10px;
}

.VPNavScreenMenuLink{
    display: block;
    border-bottom: 1px solid cornsilk;
    padding: 12px 0 11px;
    line-height: 24px;
    font-size: 14px;
    text-decoration: none;
    color: cornsilk;
}
</style>
