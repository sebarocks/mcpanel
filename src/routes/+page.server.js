import { redirect } from "@sveltejs/kit"
import { getPlayers, getStatus, getIP, getTime } from "$lib/mcmanage";

export const load = async ({locals}) => {
    if(!locals.pb.authStore.isValid) {
        return redirect(303,'/login');
    }

    let user = locals.pb.authStore.model;

    return {
        players: await getPlayers(),
        status: await getStatus(),
        ip: await getIP(),
        user: user,
        serverTime: await getTime(),
    }
}