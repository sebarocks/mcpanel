import { API_URL } from '$env/static/private';

export class MCManage {
    key: String;

    constructor( key : String){
        this.key = key;
    }

    async getUser(){
        return true;
    }

}

export async function verifyUser() {
    const response = await fetch(API_URL + '/pb/verify', {
        method: 'POST',
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function startServer() {
    const response = await fetch(API_URL + '/pb/start', {
        method: 'POST',
        credentials: 'include'
    });

    const data = await response.json();
    if (response.ok) {
        console.log('Server start accepted', data);
        return true;
    } else {
        console.error('Server start rejected', data);
        return false;
    }
}

export async function getPlayers() {
    const response = await fetch(API_URL + '/players', {
        method: 'GET',
    });

    if (!response.ok) {
        console.error('Failed to fetch players data');
        return [];
    }

    const data = await response.json();
    return data;
}

export async function getStatus() {
    const response = await fetch(API_URL + '/status', {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch status data');
    }

    const data = await response.json();
    return data.instanceState;
}

export async function getIP() {
    const response = await fetch(API_URL + '/IP', {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch IP data');
    }

    const data = await response.json();
    return data;
}

export async function getTime() {
    const response = await fetch(API_URL + '/time', {
        method: 'GET',
    });

    if (!response.ok) {
        console.error('Failed to fetch Time data');
        return null;
    }

    const data = await response.json();
    return data;
}