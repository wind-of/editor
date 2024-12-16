<template>
	<VApp>
		<section class="main d-flex flex-column">
			<AppHeader class="header" />
			<section class="content d-flex">
				<TaskDescription />
				<TaskCode />
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

	& > * {
		height: 100%;
		width: 50%;
		padding: 1rem;
		overflow-y: auto;
	}
}
</style>
