<template>
	<tr v-bem>
		<td v-bem:name>
			{{ name }}
		</td>

		<td v-bem:quantity>
			{{ quantity }}
		</td>

		<td v-bem:price>
			{{ price_rub }} ₽
		</td>

		<td>
			<v-btn
				class="mx-2"
				color="blue"
				dark
				fab
				small
				@click="addToCart"
			>
				<v-icon dark>
					mdi-cart-plus
				</v-icon>
			</v-btn>
		</td>
	</tr>
</template>

<script>
  import _prop from 'vue-types';
  import {mapState} from 'vuex';

  export default {
    name: "catalog-item",
    components: {},
    props: {
      id: _prop.number.isRequired,
      name: _prop.string.isRequired,
      price: _prop.number,
      quantity: _prop.number,
      price_rub: _prop.number,
    },
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'exchange'
      ]),
    },
    mounted() {
    },
    methods: {
      addToCart() {
        this.$store.commit("addItemToCart", {
          id: this.id,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          price_rub: this.price_rub
        });
      }
    }
  }
</script>
