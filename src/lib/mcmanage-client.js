import { PUBLIC_API_URL } from "$env/static/public";


export async function getPlayers() {
    const response = await fetch(PUBLIC_API_URL + '/players');

    if (!response.ok) {
        console.error('Failed to fetch players data');
        return [];
    }

    const data = await response.json();
    return data;
}

export async function getStatus() {
    const response = await fetch(PUBLIC_API_URL + '/status');

    if (!response.ok) {
        throw new Error('Failed to fetch status data');
        return null;
    }

    const data = await response.json();
    return data.instanceState;
}

export async function getIP() {
    const response = await fetch(PUBLIC_API_URL + '/IP');

    if (!response.ok) {
        throw new Error('Failed to fetch IP data');
    }

    const data = await response.json();
    return data;
}

export async function getTime() {
    const response = await fetch(PUBLIC_API_URL + '/time');

    if (!response.ok) {
        console.error('Failed to fetch Time data');
        return null;
    }

    const data = await response.json();
    return data;
}