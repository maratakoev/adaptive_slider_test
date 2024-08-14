import type { FetchError } from '~/model';

/**
 * Функция, которая парсит объект ошибки.
 *
 * @param {Error} error - Объект ошибки.
 * @return {string} - Текст ошибки.
 */
export const parseError = (error: Error | FetchError): string =>
{
	if ('msg' in error)
	{
		return error.msg;
	}

	return error.message;
};
