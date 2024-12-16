<script setup lang="ts">
import { LanguagesEnum } from "~/types"

const language = defineModel<LanguagesEnum>("language")
const languages = ref(Object.values(LanguagesEnum))
</script>

<template>
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
</template>
