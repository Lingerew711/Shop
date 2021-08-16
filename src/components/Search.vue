<template>
  <div>
    <div class="search mt-4">
      <form action="" @submit.prevent="mounted()">
        <input
          v-model="product"
          product=""
          type="text"
          class="searchTerm"
          placeholder="search..."
        />
        <button type="submit" name="button" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default{
    name: 'Search',
    data(){
      return {
        product: '',
        directory: []
      }
    },
    methods: {
    async mounted () {
	try {
        var result = await axios({
          method: 'POST',
          url: 'http://127.0.0.1:8000/graphql/',
          data: {
            query: `
           {
               allProducts(productName: "`+this.product+`"){
                  edges{
                    node{
                      id
                      productName
                      brand
                      date
                      description
                      category
                      price
                      condition
                      deliveryAvailable
                      discount
                      productCount
                    }
                  }
                }
            }
            `
          }
        })
        this.directory = result.data.data.allProducts
      } catch (error) {
        console.error(error)
      }
    }
  }
}





</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.search {
  width: 70%;
  position: relative;
  margin-left: 10%;
}

.searchTerm {
  width: 70%;
  border: 1px solid blue;
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 40px;
  border: 1px solid blue;
  background: blue;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 18px;
}
</style>