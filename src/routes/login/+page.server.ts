import { redirect } from '@sveltejs/kit';

export const load = ({locals}) => {
    if(locals.pb.authStore.isValid) {
        return redirect(303,'/');
    }
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
            console.error(err);
            throw err;
        } 
        
        redirect(303, '/');
    }
}