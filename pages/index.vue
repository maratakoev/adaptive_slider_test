<script
	setup
	lang="ts"
>
import { useToast } from '@/components/ui-kit/toast/use-toast';
import { authApi } from '~/api';

const { toast } = useToast();

const { data } = await authApi.isLogged();
// eslint-disable-next-line no-console
console.log(data);
</script>

<template>
	<div>
		<h1>Главная страница</h1>
		<UiButton
			@click="() => {
				toast({
					title: 'Тестовое уведомление',
				});
			}"
		>
			Показать уведомление
		</UiButton>
	</div>
</template>

<style>

</style>
