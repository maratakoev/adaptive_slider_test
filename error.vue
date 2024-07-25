<script
	setup
	lang="ts"
>
import type {NuxtError} from '#app'

const props = defineProps({
	error: Object as () => NuxtError
})
</script>

<template>
	<NuxtLayout name="default">
		<h1>{{ error?.message || 'Страница не найдена' }}</h1>
		<h2>Код ошибки: {{ error?.statusCode || '404' }}</h2>
		<NuxtLink to="/">Вернуться на главную</NuxtLink>
	</NuxtLayout>
</template>