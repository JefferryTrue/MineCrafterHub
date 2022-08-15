<template>
	<div id="app">
		<Header1></Header1>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
import Header1 from './components/Header/index.vue'
import 'element-ui/lib/theme-chalk/display.css';
// import Carousel from './components/Carousel/index.vue';
import Footer from './components/Footer/index.vue';

export default{
  name:"app",
  data(){
	return {
		
	}
  },
  components:{ Header1,Footer }
}
</script>

<style>

html,
body{
	margin: 0;
}


</style>

