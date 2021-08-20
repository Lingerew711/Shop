<template>
  <div>
    <Search />
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
        <h5 class="card-title">{{ input.node.productId.productName }}</h5>
        <p class="card-text">
          <Strong>Brand: </Strong>{{ input.node.productId.brand }} <br />
          <Strong>Brand: </Strong>{{ input.node.productId.productId }} <br />
          <Strong>Price: </Strong
          ><span>{{ input.node.productId.price - input.node.productId.discount * 100 }} ETB</span
          >&nbsp;&nbsp;&nbsp;
          <span class="old-price">{{ input.node.productId.price }} ETB</span> <br />
          <Strong>Status: </Strong>{{ input.node.productId.condition }}
        </p>
        <button
          class="btn btn-outline-primary float-right ml-2"
          title="details"
          @click="update_prop(input.node)"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i class="fa fa-eye"></i>
        </button>
        <button
         @click="deleteWishlist(input.node.productId.productId)"
          href="#"
          class="btn btn-outline-primary float-right"
          title="add to cart"
        >
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
    <!-- Modal -->
     <CarModal :input="item" />
    
  </div>
</template>

<script>
import axios from "axios";
import gql from "graphql-tag";
import CarModal from "@/components/CarModal.vue";
import Search from "@/components/Search.vue";
const DELETE_CART = gql`
  mutation ($productId: Int!) {
    deleteWishlist(input: {productId: $productId }) {
      wishlist {
        id
        productId {
          productName
        }
      }
    }
  }
`;
export default {
  name: "Cartbody",
  components: {
    Search,
    CarModal,
  },
  props: {
    Text: String,
  },
  data() {
    return {
      wishlist: '',
      directory: [],   
      
      };
  },
computed: {
    item() {
      return this.wishlist;
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
               allWishlists{
    edges{
      node{
        id
        productId{
         productId
      productName
      brand
      date
      description
      discount
      deliveryAvailable
      productCount
      price
      condition
      category
        }
        date
      }
    }
  }
            }
            `,
        },
      });
      this.directory = result.data.data.allWishlists;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    update_prop(item) {
      this.wishlist = item;
    },
    async deleteWishlist(productId) {
      productId = parseFloat(productId);
      console.log( productId)
      this.$apollo.mutate({
        mutation: DELETE_CART,
        variables: {
          productId:productId
        },
      });
    },
    
    
    }
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