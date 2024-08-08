import type { UseFetchOptions } from 'nuxt/app';

export default async function<T>(
	url: string | (() => string),
	options: UseFetchOptions<T> = {},
)
{
	const userAuth = useCookie('token');
	const config = useRuntimeConfig();

	const customOptions: UseFetchOptions<T> = {
		...options,
		baseURL: config.public.baseUrl,
		headers: {
			...options.headers,
			...(userAuth.value && { Authorization: `Bearer ${userAuth.value}` }),
		},
		onResponseError({ response })
		{
			// Базовый пример обработки ошибок

			// Ответ с ошибкой будет лежать в response._data
			// eslint-disable-next-line no-console
			console.log(response._data);

			// После чего ее можно вывести на экран
			errorNotification(response._data);
		},
	};

	return useFetch(url, customOptions);
}
