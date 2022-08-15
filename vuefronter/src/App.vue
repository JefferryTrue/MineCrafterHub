<template>
	<div id="app">
		<Header1></Header1>
		<router-view></router-view>
	</div>
</template>

<script>
import Header1 from './components/Header/index.vue'
import 'element-ui/lib/theme-chalk/display.css';

export default{
  name:"app",
  data(){
	return {

	}
  },
  components:{Header1}
}
</script>


<style>

html,
body{
	margin: 0;
}


</style>

