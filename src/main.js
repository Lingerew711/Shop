import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

const apolloClient = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/"
})

Vue.config.productionTip = false;

Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  apolloProvider,
  store,
  render: (h) => h(App),
}).$mount("#app");
