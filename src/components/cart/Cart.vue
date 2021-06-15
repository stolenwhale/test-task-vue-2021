<template>
	<div class="py-10">
		<v-dialog
			v-model="dialog"
			width="1200"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					color="red lighten-2"
					dark
					v-bind="attrs"
					v-on="on"
				>
					<v-icon dark>
						mdi-cart
					</v-icon>
					{{cart.length}}
				</v-btn>
			</template>

			<v-card>
				<v-card-title class="text-h5 grey lighten-2">
					Корзина
				</v-card-title>

				<template v-if="cart.length">
					<v-simple-table height="300px">
						<template v-slot:default>
							<thead>
							<tr>
								<th class="text-left">
									Название
								</th>
								<th class="text-left">
									Количество
								</th>
								<th class="text-left">
									Цена
								</th>
								<th class="text-left">
								</th>
							</tr>
							</thead>
							<tbody>
							<CartItem :key="item.id" class="py-3 px-4" v-bind="item" v-for="item in cart"/>
							</tbody>
						</template>
					</v-simple-table>
				</template>
				<template v-else>
					<div class="py-3 px-4">
						В корзине пусто
					</div>
				</template>

					<div v-if="totalPrice" class="py-3 px-4">
						Всего товаров на сумму {{totalPrice}} ₽
					</div>
				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						@click="dialog = false"
						color="primary"
						text
					>
						Закрыть
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
  import {mapState} from "vuex";
  import CartItem from "./CartItem";

  export default {
    name: "Cart",
    components: {
      CartItem,
    },
    props: {},
    data() {
      return {
        dialog: false
      }
    },
    computed: {
      ...mapState({
        cart: state => state.cart.cart,
        exchange: state => state.exchange
      }),
      totalPrice() {
        return this.cart.reduce((acc, item) => {
          return acc + (item.price_rub * item.cartQuantity)
        }, 0)
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>
