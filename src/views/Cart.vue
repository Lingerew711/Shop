<template>
  <div class="home">
    <Cartbody/>
   </div>
</template>

<script>
// @ is an alias to /src
import Cartbody from '../components/Cartbody.vue';
export default {
  name: "Home",
  components: {
    Cartbody,
  
  },
};
</script>
