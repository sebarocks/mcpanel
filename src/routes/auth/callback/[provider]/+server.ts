import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { REDIRECT_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ locals, url, cookies }) => {
	
	const provider = JSON.parse(cookies.get('provider') || '{}');
	//console.log(provider);

	if (provider.state !== url.searchParams.get('state')) {
        throw new Error('State parameters don\'t match');
    }

    try {
        const res = await locals.pb.collection('users').authWithOAuth2Code(
            provider.name,
            url.searchParams.get('code') || '',
            provider.codeVerifier,
            REDIRECT_URL + provider.name
        )        
    } catch (err) {
		console.error(err);
        return redirect(303, '/login?fail=true');
	} 

	return redirect(303, '/login');
};