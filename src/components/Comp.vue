<template>
  <div>
    <Search />
<form>
      <label>Id</label>
      <input type="number" name="wishlistId" v-model="wishlistId"/>
      <br />

      <label>Product Id</label>
      <input type="number"  name="productId" v-model="productId"/>
      <br />
</form>


<!-- <div class="form-group">
    <label class="control-label col-md-3 col-sm-3 col-xs-12">Input 1:</label>
    <div class="col-md-9 col-sm-9 col-xs-12">
        <input type="text" name="vorspeise-traditionell-montag" class="form-control vorspeise" value="<?php echo $yy ?>" required>
    </div>
</div>
<a class="btn btn-warning" href="#" @Click="autoFill('Suppenbuffet'); return false;" role="button">Suppenbuffet</a> -->
<!-- <a href="#" @Click="autoFill();" >Click to Autofill</a>
<form>
  <p>
    <label>Text Input: </label>
    <input type="text" id="input1">
  </p>
  <p>
    <label>Dropdown Input: </label>
    <select id="input2">
      <option value="Dropdown1">First Option</option>
      <option value="Dropdown2">Second Option</option>
      <option value="Dropdown3">Third Option</option>
    </select>
  </p>
  <p>
    <label>Radio Input: </label>
       <input type="radio" name="input3" value="Radio1">First Radio
       <input type="radio" name="input3" value="Radio2">Second Radio
       <input type="radio" name="input3" value="Radio3">Third Radio
  </p>
</form> -->

    <Modal :input="item" />
    <div
      class="card m-3"
      style="width: 20rem"
      v-for="input in directory.edges"
      :key="input.id"
    >
      <img
        class="card-img-top"
        src="@/assets/images/sho.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ input.node.productName }}</h5>
        <p class="card-text">
          <Strong>Brand: </Strong>{{ input.node.brand }} <br />
          <Strong>Price: </Strong
          ><span>{{ input.node.price - input.node.discount * 100 }} ETB</span
          >&nbsp;&nbsp;&nbsp;
          <span class="old-price">{{ input.node.price }} ETB</span> <br />
          <Strong>Status: </Strong>{{ input.node.condition }}
        </p>
        <button
          class="btn btn-outline-primary float-right ml-2"
          title="details"
          type="button"
          @click="update_prop(input.node)"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i class="fa fa-eye"></i>
        </button>
        <button
          @click="createWishlist()"
          type="button"
          class="btn btn-outline-primary float-right"
          title="add to cart"
        >
          <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { ADD_PROD } from '../constants/graphql'
import gql from "graphql-tag";
import axios from "axios";
import Search from "@/components/Search.vue";
import Modal from "@/components/Modal.vue";
// const ADD_PROD = gql`
//   mutation (
//     $productId: Int!
//     $brand: String!
//     $productName: String!
//     $date: Date!
//     $description: String!
//     $category: String!
//     $price: Float!
//     $condition: String!
//     $deliverAvailable: Boolean!
//     $discount: Float!
//     $productCount: Int!
//   ) {
//     createProduct(
//       input: {
//         productId: $productId
//         brand: $brand
//         productName: $productName
//         date: $date
//         description: $description
//         category: $category
//         price: $price
//         condition: $condition
//         deliveryAvailable: $deliverAvailable
//         discount: $discount
//         productCount: $productCount
//       }
//     ) {
//       id
//       productId
//       productName
//       brand
//       date
//       description
//       discount
//       deliveryAvailable
//       productCount
//       price
//       condition
//       category
//     }
//   }
// `;
const ADD_TO_CART = gql`
  mutation ($wishlistId: Int!, $productId: Int!) {
    createWishlist(input: { wishlistId: $wishlistId, productId: $productId }) {
      wishlist {
        id
        wishlistId
        productId {
          productName
        }
      }
    }
  }
`;
export default {
  name: "Comp",
  components: {
    Search,
    Modal,
  },
  props: {
    Text: String,
  },
  data() {
    return {
      product: "",
      directory: [],
      id: null,
      value: '',
      wishlistId: "",
      productId: "",
      // productName: "",
      // brand: "",
      // date: "",
      // description: "",
      // discount: "",
      // deliveryAvailable: "",
      // productCount: "",
      // price: "",
      // condition: "",
      // category: "",
    };
  },

  computed: {
    item() {
      return this.product;
    },
  },

  async mounted() {
    try {
      var result = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/graphql/",
        data: {
          query: `
            {
               allProducts{
                  edges{
                    node{
                      id
                      productId
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
            `,
        },
      });
      this.directory = result.data.data.allProducts;
    } catch (error) {
      console.error(error);
    }
  },
  // apollo: {
  //         products: gql`query {
  //           allProducts{
  //                    edges{
  //                     node{
  //                       id
  //                       productId
  //                       productName
  //                       brand
  //                       date
  //                       description
  //                       category
  //                      price
  //                        condition
  //                        deliveryAvailable
  //                        discount
  //                        productCount
  //                      }
  //                    }
  //                  }
  //         }`
  //         },

  methods: {
    update_prop(item) {
      this.product = item;
    },
    // async createProduct() {
    //   const productId = this.productId;
    //   const productName = this.productName;
    //   const brand = this.brand;
    //   const date = this.date;
    //   const description = this.description;
    //   const discount = parseFloat(this.discount);
    //   const deliveryAvailable = this.deliveryAvailable;
    //   const productCount = this.productName;
    //   const price = parseFloat(this.price);
    //   const condition = this.condition;
    //   const category = this.category;
    //   console.log(`Create product: ${brand}`);
    //   this.$apollo.mutate({
    //     mutation: ADD_PROD,
    //     variables: {
    //       productId: productId,
    //       productName: productName,
    //       brand: brand,
    //       date: date,
    //       description: description,
    //       discount: discount,
    //       deliveryAvailable: deliveryAvailable,
    //       productCount: productCount,
    //       price: price,
    //       condition: condition,
    //       category: category,
    //     },
    //   });
    //   // location.reload();
    // },
    async createWishlist() {
      const wishlistId = parseFloat(this.wishlistId);
      const productId = parseFloat(this.productId);
      console.log( productId)
      this.$apollo.mutate({
        mutation: ADD_TO_CART,
        variables: {
          wishlistId:wishlistId,
          productId:productId
        },
      });
    },
  //    autoFill() {
  //   document.getElementById('input1').value = "My Text Input";
  //   document.getElementById('input2').value = "Dropdown2";
 
  //   var radioElements = document.getElementsByName("input3");

  //   for (var i=0; i<radioElements.length; i++) {
  //     if (radioElements[i].getAttribute('value') == 'Radio3') {
  //       radioElements[i].checked = true;
  //     }
  //   }
  // }    
  },
  
};




</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.card {
  display: inline-flex;
}

.old-price {
  color: #b2b4ca;

  text-decoration: line-through;
}
</style>