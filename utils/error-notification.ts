import { useToast } from '~/components/ui-kit/toast';
import { parseError } from '~/helpers';
import type { FetchError } from '~/model';

/**
 * Функция, которая запускает уведомление об ошибке.
 *
 * @param {Error | unknown} error - Объект ошибки.
 */
export default function (error: Error | unknown)
{
	const { toast } = useToast();

	const title = parseError(error as Error | FetchError);

	toast({
		title,
		variant: 'destructive',
	});
}
