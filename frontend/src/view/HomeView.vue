<script setup>
	import { ref } from "vue";
	import axios from "axios";
	import Todo from "../component/Todo.vue";
	import { backendApiEndpoint } from "../main";

	const todos = ref([]);
	const new_todo_text = ref("");

	init();

	/**
	 * Fetch data from server
	 */
	function init() {
		//get data from localStorage first
		try {
			const localStorageTodos = localStorage.getItem("todos");
			if (localStorageTodos) {
				todos.value = JSON.parse(localStorage.getItem("todos"));
			}
		} catch (e) {
			console.log(e);
		}

		//fetch data from backend
		axios.get(`${backendApiEndpoint}/todos`).then((response) => {
			console.log(response.data);
			todos.value = response.data;
		});
	}

	function add() {
		todos.value.push(new_todo_text.value);
		new_todo_text.value = "";
	}

	function clearData() {
		todos.value = [];
	}
</script>

<template>
	<button @click="clearData">clear Data</button>
	<input
		v-model="new_todo_text"
		type="text"
		placeholder="enter todo title"
		@keyup.enter="add"
	/>
	<button @click="add">add todo</button>
	<Todo :todos="todos" />
</template>
