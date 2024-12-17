<script setup lang="ts">
defineProps<{ language: LanguagesEnum }>()
const code = defineModel("code", { type: String, required: true })
</script>

<template>
	<div class="editor-wrapper flex-grow-1">
		<MonacoEditor
			class="editor"
			v-model="code"
			:lang="language"
			:style="{ width: '100%', height: '100%' }"
			:options="{ minimap: { enabled: false } }"
		/>
	</div>
</template>
