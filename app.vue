<script
	setup
	lang="ts"
>
import Toaster from '@/components/ui-kit/toast/Toaster.vue';
import { toast } from '~/components/ui-kit/toast';
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
			<UiButton
				@click="() => {
					toast({
						title: 'Тестовое уведомление',
					});
				}"
			>
				Показать уведомление
			</UiButton>
		</NuxtLayout>
		<Toaster />
	</div>
</template>
