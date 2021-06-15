<template>
  <v-app>
    <v-main>
      <v-container>
        <Cart />
        <Catalog />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Catalog from './components/catalog/Catalog';
import Cart from  './components/cart/Cart';

export default {
  name: 'App',

  components: {
    Catalog,
    Cart
  },

  data: () => ({
    //
  }),
  mounted() {
  }
};
</script>
