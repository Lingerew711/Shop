<template>
  <div>
    <div
      class="modal hide"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              {{ input.productName }}
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
              <Strong>Brand: </Strong>{{ input.brand }} <br />
              <Strong>Price: </Strong
              ><span
                >{{ input.price - input.discount * 100 }} ETB</span
              >&nbsp;&nbsp;&nbsp;
              <span class="old-price">{{ input.price }} ETB</span> <br />
              <Strong>Date: </Strong>{{ input.date }}<br />
              <Strong>Description: </Strong>{{ input.description }}<br />
              <Strong>Category: </Strong>{{ input.category }}<br />
              <Strong>Status: </Strong>{{ input.condition }}&nbsp;&nbsp;
              <Strong>Is Availbale?: </Strong
              >{{ input.deliveryAvailable }}&nbsp;&nbsp;
              <Strong>Amount: </Strong>{{ input.productCount }}
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
export default {
  name: "Modal",
  props:["input"],
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
};
</script>

<style scoped>
.old-price {
  color: #b2b4ca;

  text-decoration: line-through;
}
</style>