<template>
	<tr v-bem>
		<td v-bem:name>
			{{ name }}
		</td>

		<td v-bem:quantity>
			<input type="number" v-model="cartQuantityInput">
			<div v-if="isNotEnoughProducts">
				(ограниченное количество товара)
			</div>
		</td>

		<td v-bem:price>
			{{ price_rub }} ₽
		</td>

		<td>
			<v-btn
				@click="deleteFromCart"
				class="mx-2"
				color="red"
				dark
				fab
				small
			>
				<v-icon dark>
					mdi-cart-off
				</v-icon>
			</v-btn>
		</td>
	</tr>
</template>

<script>
  import _prop from "vue-types";
  import {mapState} from "vuex";

  export default {
    name: "CartItem",
    components: {},
    props: {
      id: _prop.number.isRequired,
      name: _prop.string.isRequired,
      price: _prop.number,
      price_rub: _prop.number,
      quantity: _prop.number,
      cartQuantity: _prop.number,
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'exchange'
      ]),
      cartQuantityInput: {
        get() {
          return this.cartQuantity;
        },
        set(value) {
          this.$store.commit("updateItemQuantityById", {
            id: this.id,
            value: parseInt(value)
          });
        }
      },
      isNotEnoughProducts() {
        return this.cartQuantity * 100 / this.quantity > 80;
      }
    },
    mounted() {
    },
    methods: {
      deleteFromCart() {
        this.$store.commit("deleteItemFromCartById", this.id);
      }
    }
  }
</script>
