<script setup>
import { useToast } from '@/components/ui-kit/toast/use-toast';

const { toast } = useToast();
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
		<UiButton
			@click="() => {
				errorNotification({
					msg: 'Тестовое уведомление с ошибкой',
				})
			}"
		>
			Показать уведомление с ошибкой
		</UiButton>
	</div>
</template>

<style>

</style>
