<template>

	<v-navigation-drawer :clipped="$vuetify.breakpoint.mdAndUp" v-model="drawer" app fixed>

		<v-list dense>

			<template v-for="item in items">

				<v-layout v-if="item.heading" :key="item.heading" row align-center>

					<v-flex xs6>
						<v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
					</v-flex>

				</v-layout>

				<v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">

					<v-list-tile slot="activator" :to="item.to">

						<v-list-tile-content>
							<v-list-tile-title>{{ item.text }}</v-list-tile-title>
						</v-list-tile-content>

					</v-list-tile>

					<v-list-tile v-for="(child, i) in item.children" :to="child.to" :key="i">

						<v-list-tile-action v-if="child.icon">
							<v-icon>{{ child.icon }}</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>{{ child.text }}</v-list-tile-title>
						</v-list-tile-content>

					</v-list-tile>

				</v-list-group>

				<v-list-tile v-else :to="item.to" :key="item.text">

					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<v-list-tile-title>{{ item.text }}</v-list-tile-title>
					</v-list-tile-content>

				</v-list-tile>

			</template>

		</v-list>

	</v-navigation-drawer>

</template>

<script>

	export default {
		name: 'PageNavigation',
		props: {
			company: {
				type: String,
				default: 'PWA'
			}
		},
		data: () => ({
			drawer: true,
			items: [{
				icon: 'dashboard',
				text: 'Dashboard',
				to: {
					name: 'PageDashboard'
				}
			},{
				icon: 'face',
				text: 'Characters',
				to: {
					name: 'PageMarvelCharacters'
				}
			}]
		}),
		created() {

			this.$bus.$on('drawer:toggle', () => {
				this.drawer = !this.drawer;
			});

		}
	};

</script>
