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
          <Strong>Price: </Strong
          ><span>{{ input.node.productId.price - input.node.productId.discount * 100 }} ETB</span
          >&nbsp;&nbsp;&nbsp;
          <span class="old-price">{{ input.node.productId.price }} ETB</span> <br />
          <Strong>Status: </Strong>{{ input.node.productId.condition }}
        </p>
        <button
          class="btn btn-outline-primary float-right ml-2"
          title="details"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i class="fa fa-eye"></i>
        </button>
        <button
          href="#"
          class="btn btn-outline-primary float-right"
          title="add to cart"
        >
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
    <!-- Modal -->
    <div
      v-for="input in directory.edges"
      :key="input.id"
      class="modal hide"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              {{ input.node.productId.productName }}
            </h5>
            <button
              type="button"
              class="btn btn-outline-primary float-right ml-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa fa-close"></i>
            </button>
          </div>
          <div class="modal-body">
            <img
              class="card-img-top"
              src="@/assets/images/sho.jpg"
              alt="Card image cap"
            />
            <p class="card-text">
              <Strong>Brand: </Strong>{{ input.node.productId.brand }} <br />
              <Strong>Price: </Strong
              ><span
                >{{ input.node.productId.price - input.node.productId.discount * 100 }} ETB</span
              >&nbsp;&nbsp;&nbsp;
              <span class="old-price">{{ input.node.productId.price }} ETB</span> <br />
              <Strong>Date: </Strong>{{ input.node.productId.date }}<br />
              <Strong>Description: </Strong>{{ input.node.productId.description }}<br />
              <Strong>Category: </Strong>{{ input.node.productId.category }}<br />
              <Strong>Status: </Strong>{{ input.node.productId.condition }}&nbsp;&nbsp;
              <Strong>Is Availbale?: </Strong
              >{{ input.node.productId.deliveryAvailable }}&nbsp;&nbsp;
              <Strong>Amount: </Strong>{{ input.node.productId.productCount }}
            </p>
            <button
              href="#"
              class="btn btn-outline-primary float-right"
              title="add to cart"
            >
              <i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Search from "@/components/Search.vue";
export default {
  name: "CompanyData",
  components: {
    Search,
  },
  props: {
    Text: String,
  },
  data() {
    return {
      directory: [],
    };
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