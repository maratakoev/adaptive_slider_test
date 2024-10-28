/**
 * Функция, которая парсит объект ошибки.
 *
 * @param {Error} error - Объект ошибки.
 * @return {string} - Текст ошибки.
 */
export default function (error)
{
	if ('msg' in error)
	{
		return error.msg;
	}

	return error.message;
};
