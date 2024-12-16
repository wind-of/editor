<script setup lang="ts">
defineProps<{ executionResult?: CodeExecutionResponse }>()
const code = defineModel<string>("code", { required: true })
const language = defineModel<LanguagesEnum>("language", { required: true })
</script>

<template>
	<v-container class="task-code d-flex flex-column">
		<TaskCodeHeader v-model:language="language" />
		<section class="code-wrapper flex-grow-1 d-flex flex-column ga-2">
			<TaskCodeEditor class="editor-wrapper" v-model:code="code" :language="language" />
			<TaskCodeOutput class="code-result" :executionResult="executionResult" />
		</section>
	</v-container>
</template>

<style scoped>
.task-code {
	height: 100%;
	border-right: 1px solid #e6e6e6;
}
.select {
	width: 150px;
}
.editor-wrapper,
.code-result {
	border: 1px solid #e6e6e6;
}
.code-result {
	width: 100%;
	height: 250px;
}
</style>
