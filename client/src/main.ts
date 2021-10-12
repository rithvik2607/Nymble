import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://localhost:5000/graphql'
  })
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
