<script setup>
	import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
</script>

<template>
	<nav>
		<RouterLink to="/">Home Page</RouterLink>
		<RouterLink to="/about">About Page</RouterLink>
	</nav>
	<div>----</div>
	<RouterView />
</template>
