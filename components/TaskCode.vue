<script setup lang="ts">
const value = ref("")
const language = ref(LanguagesEnum.JavaScript)
const languages = ref(Object.values(LanguagesEnum))
</script>

<template>
	<v-container class="task-code d-flex flex-column">
		<header class="mb-2">
			<v-select
				class="select"
				v-model="language"
				:items="languages"
				:elevation="false"
				variant="solo"
				density="compact"
				hide-details
				type="text"
			/>
		</header>
		<div class="editor-wrapper flex-grow-1">
			<MonacoEditor
				class="editor"
				v-model="value"
				:lang="language"
				:style="{ width: '100%', height: '100%' }"
			/>
		</div>
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
.editor {
	border: 1px solid #e6e6e6;
}
</style>
