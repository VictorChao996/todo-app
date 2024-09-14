<script setup>
	import { defineProps, onUpdated } from "vue";
	import axios from "axios";

	const props = defineProps(["todos"]);
	console.log(`props todo`, props.todos);

	onUpdated(() => {
		console.log("todos updated... save data to server");
		saveData(); //when todos updated, save data to server
	});

	function saveData() {
		axios
			.post("http://localhost:3000/api/save-todos", {
				todos: props.todos,
			})
			.then((response) => {
				console.log(`saveData success`);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function deleteTodo(index) {
		console.log("delete todo");
		props.todos.splice(index, 1);
	}
</script>

<template>
	<div>
		<h1>Todo List 1</h1>
		<ul>
			<div class="todo-list">
				<li v-for="(todo, index) in todos" class="todo">
					<p>{{ todo }}</p>
					<button @click="deleteTodo(index)">delete</button>
				</li>
			</div>
		</ul>
	</div>
</template>

<style>
	.todo-list {
		/* display: flex; */
		justify-content: space-between;
	}
	.todo {
		display: flex;
		justify-content: space-evenly;
	}
</style>
