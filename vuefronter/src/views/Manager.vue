<template>
  <div class="manager">
    <div class="container">
      <Upload></Upload>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload/index.vue';

export default {
name:'manager',
data(){
    return {

    }
},
components:{ Upload }

}
</script>

<style scoped>
.manager{
  display: block;
  margin: 0;
  padding: 0;
  width:100%;
}

.container{
  display: block;
  margin: auto;
  padding: 48px;
  max-width: 1376px;
}

</style>