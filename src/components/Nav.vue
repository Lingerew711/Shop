<template>
  <div class="topnav">
    <a href="#home" class="active"><i class="fa fa-2x fa-bars"></i></a>
    <div class="icon-links pb-3">
      <router-link to="/"><a href="#products" class="product">Products</a></router-link>
    <div class="right-align">
      <router-link to="/cart"><a href="#cart"><span class="fa-stack has-badge" data-count="6"><i class="fa fa-2x fa-shopping-cart"></i></span></a></router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>

/* Add a black background color to the top navigation */
.topnav {
    background-color: blue;
    overflow: hidden;
    height: 63px;
  }
  .icon-links{
    padding-top: -10px;
  }
  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    
  }
  .right-align {
    float: right;
  }
  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  /* Add an active class to highlight the current page */
  .topnav a.active {
    background-color: #04aa6d;
    color: white;
  }
  
  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }
.product{
    font-weight: bold;
    font-size: 22px;
}
  /* Badge Css */
  .fa-stack[data-count]:after{
    position:absolute;
    right: 1%;
    content: attr(data-count);
    font-size:50%;
    padding:.6em;
    border-radius:999px;
    line-height:.75em;
    color: #fff;
    background:rgba(255,0,0,1);
    text-align:center;
    min-width:2em;
    font-weight:bold;
  }
</style>
