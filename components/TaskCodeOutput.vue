<script setup lang="ts">
const props = defineProps<{ executionResult?: CodeExecutionResponse }>()

const isError = computed(() => props.executionResult?.status === CodeExecutionStatusEnum.Error)
const isSuccess = computed(() => props.executionResult?.status === CodeExecutionStatusEnum.Success)
</script>

<template>
	<section class="code-result" :class="{ error: isError, success: isSuccess }">
		<pre class="pa-2">{{ executionResult?.output || "" }}</pre>
	</section>
</template>

<style scoped>
.code-result {
	border: 2px solid #e6e6e6;

	&.error {
		border-color: red;
	}
	&.success {
		border-color: rgb(108, 181, 255);
	}
}
</style>
