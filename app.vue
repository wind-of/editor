<script setup lang="ts">
import { executeCodeRequest } from "@/api"
import { useDisplay } from "vuetify"

const { thresholds } = useDisplay()
const smallScreen = computed(() => thresholds.value.sm + "px")

// Стоило бы вынести логику, связанную с редактором, в отдельный store, но в рамках этой задачи оставлю как есть
const language = ref(LanguagesEnum.JavaScript)
const code = ref("console.log('Hello, World!')")
const isLoading = ref(false)

const executionResult = ref<CodeExecutionResponse>()

async function handleCodeExecution() {
	if (isLoading.value) {
		return
	}
	const payload: CodeExecutionPayload = {
		code: code.value,
		language: language.value,
	}
	isLoading.value = true
	executionResult.value = await executeCodeRequest(payload)
	isLoading.value = false
}
</script>

<template>
	<VApp>
		<section class="main d-flex flex-column">
			<AppHeader class="header" @run="handleCodeExecution" :isLoading="isLoading" />
			<section class="content d-flex">
				<TaskDescription />
				<TaskCode
					v-model:language="language"
					v-model:code="code"
					:executionResult="executionResult"
				/>
			</section>
		</section>
	</VApp>
</template>

<style scoped>
* {
	--header-height: 60px;
}
.header {
	height: var(--header-height);
}
.main {
	width: 100vw;
	height: 100svh;
}
.content {
	width: 100%;
	height: calc(100% - var(--header-height));

	@media screen and (max-width: 960px) {
		flex-wrap: wrap;
	}

	& > * {
		flex-grow: 1;
		overflow-y: auto;
	}
}
</style>
