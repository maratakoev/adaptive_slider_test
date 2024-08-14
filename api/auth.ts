import { Endpoints } from '~/constants';

export const isLogged = async () =>
{
	return await useCustomFetch(Endpoints.AUTH_IS_LOGGED);
};
