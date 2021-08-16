<template>
<div class="body">
 <Nav/>
    <router-view><Home/></router-view>
    <!-- <router-view><Cart/></router-view> -->
<Footer/>
  </div>
</template>

<script>
 //import new component
 import Home from "@/views/Home"
//  import Cart from "@/views/Cart"
 import Nav from "@/components/Nav"
 import Footer from "@/components/Footer"
export default {
  name: 'App',
  components: {
    Nav,
    Home,
    
    Footer
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700');

.body{
  font-family: 'Rubik', sans-serif;
}
</style>