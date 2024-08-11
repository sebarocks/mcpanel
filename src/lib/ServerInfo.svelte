<script lang="ts">
	import { PUBLIC_SERVER_IP, PUBLIC_MAP_URL } from '$env/static/public';
	import { estado } from './estado';
	import ServerTime from './ServerTime.svelte';
	import { toast } from '@zerodevx/svelte-toast';
	
	
	export let time;
	export let serverIp;
	export let status;

	// mostrar ip o dominio
	const IP_MODE = true;

	function copyText() {
		const textURL = document.getElementById('url-server')?.innerText;

		navigator.clipboard
			.writeText(textURL ?? '')
			.then(() => toast.push('IP copiada al portapapeles', { duration: 1500 }))
			.catch(console.error);
	}
</script>

<section class="centred col py-3rem">
	<h1 class="pb-10px">
		<p class="font-1 mt-minus28 bold">El server está:</p>
		<b id="estado-title" class="capitalize font-1 is-size-2">{estado(status)}</b>
	</h1>

	{#if IP_MODE}
		<h3>IP: <span id="url-server">{serverIp}</span>
			<button on:click={copyText}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button>
		</h3>
	{:else}
		<h3>URL: <span id="url-server">{PUBLIC_SERVER_IP}</span></h3>
	{/if}

	<h3>🌎️<a href="{PUBLIC_MAP_URL}">Mapa </a></h3>

	{#if time != null}
		<h3>
			<ServerTime hour={time.hour} minute={time.minute} />
		</h3>
	{/if}
</section>