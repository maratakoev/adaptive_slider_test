import { toast } from '~/components/ui-kit/toast';

export default defineNuxtPlugin(() =>
{
	const userAuth = useCookie('token');
	const config = useRuntimeConfig();

	const $customFetch = $fetch.create({
		baseURL: config.public.baseUrl,
		onRequest({ options })
		{
			if (userAuth.value)
			{
				options.headers = options.headers || {};
				// @ts-expect-error Ошибка типизации самого Nuxt, поэтому можно игнорить
				options.headers.Authorization = `Bearer ${userAuth.value}`;
			}
		},
		onResponseError({ response })
		{
			toast({
				title: response.statusText || 'Произошла ошибка',
				variant: 'destructive',
			});
		},
	});
	return {
		provide: {
			customFetch: $customFetch,
		},
	};
});
