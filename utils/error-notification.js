import { useToast } from '~/components/ui-kit/toast';

/**
 * Функция, которая запускает уведомление об ошибке.
 *
 * @param {Error | unknown} error - Объект ошибки.
 */
export default function (error)
{
	const { toast } = useToast();

	const title = parseError(error);

	toast({
		title,
		variant: 'destructive',
	});
}
