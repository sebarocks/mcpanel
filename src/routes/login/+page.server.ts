import { fail, redirect } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';
import { REDIRECT_URL } from '$env/static/private';

export const load = ({locals, url}) => {
    if(locals.pb.authStore.isValid) {
        return redirect(303,'/');
    }
    const fail = url.searchParams.get('fail') === 'true';
    return {fail}
}

export const actions = {
    login: async ({request, locals}) => {
        const data = Object.fromEntries(await request.formData()) as {
            username: string
            password: string
        };

        try {
            await locals.pb.collection('users')
                .authWithPassword(data.username, data.password);
        } catch (err) {
            const errorObj = err as ClientResponseError;
            return fail(500, {fail: true, message: errorObj.data.message});
        } 
        
        redirect(303, '/');
    },
    google: async ({ locals, cookies }) => {
        const provider = (await locals.pb.collection('users').listAuthMethods()).authProviders.find((p: any) => p.name === 'google');
        cookies.set('provider', JSON.stringify(provider), {httpOnly: true, path: `/auth/callback/google`});
        console.log(provider.authUrl + REDIRECT_URL + provider.name);
        

        throw redirect(303, provider.authUrl + REDIRECT_URL + provider.name);
    },
    logout: async ({ locals }) => {
        await locals.pb.authStore.clear();
        throw redirect(303, '/login');
    }
}