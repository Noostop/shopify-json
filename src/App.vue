<template>
	<div id="app">
		<div class="nav">
			<router-link to="/" tag="span" exact>Home</router-link>|
			<router-link to="/about" tag="span" exact>About</router-link>
		</div>
		
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "hello word"
			};
		}
	};
</script>


<style lang="scss">
	* {
		margin: 0;
	}
	.nav {
		text-align: center;
		padding-bottom: 30px;
		span {
			cursor: pointer;
			display: inline-block;
			padding: 10px 16px;
			color: #ffffff;
			background-color: #409eff;
			&:hover,
			&.router-link-active {
				background: #f56c6c;
			}
		}
	}
</style>
