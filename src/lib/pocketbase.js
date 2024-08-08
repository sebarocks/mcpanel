import PocketBase from 'pocketbase';
import { PB_URL } from '$env/static/private';

export let pb = new PocketBase(PB_URL);

