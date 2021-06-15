<template>
	<div v-bem>
		<v-expansion-panels>
			<v-expansion-panel
				:key="group.id" v-for="group in catalogList"
			>
				<v-expansion-panel-header>
					{{group.name}}
				</v-expansion-panel-header>

				<v-expansion-panel-content>
					<v-simple-table>
						<template v-slot:default>
							<thead>
							<tr>
								<th class="text-left">
									Название
								</th>
								<th class="text-left">
									Остаток
								</th>
								<th class="text-left">
									Цена
								</th>
								<th class="text-left">
								</th>
							</tr>
							</thead>
							<tbody>
								<CatalogItem :key="item.id" v-bind="item" v-for="item in group.items"/>
							</tbody>
						</template>
					</v-simple-table>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
  import CatalogItem from './CatalogItem';

  export default {
    name: "catalog",
    components: {CatalogItem},
    props: {},
    data() {
      return {
        catalogList: this.$store.getters.catalogList
      }
    },
    computed: {},
    mounted() {
    },
    methods: {}
  }
</script>
