<script setup lang="ts">
defineProps<{ isLoading: boolean }>()
defineEmits(["run"])
</script>

<template>
	<header class="header d-flex align-center justify-space-between px-6">
		<h1>Logo</h1>
		<section class="options">
			<VBtn prepend-icon="mdi-play" color="primary" @click="$emit('run')" :loading="isLoading"
				>Run</VBtn
			>
		</section>
	</header>
</template>

<style scoped>
.header {
	width: 100%;

	border-bottom: 1px solid #e6e6e6;
}
</style>
