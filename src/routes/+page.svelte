<script lang="ts">
	import { getPlayers, getStatus, getIP } from "$lib/mcmanage-client.js";
	import PlayerInfo from "$lib/PlayerInfo.svelte";
	import PlayerList from "$lib/PlayerList.svelte";
	import ServerInfo from "$lib/ServerInfo.svelte";
	import Switch from "$lib/Switch.svelte";
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import { onMount } from "svelte";

	export let data;

	let user = data.user?.username;
	let players : Array<string> = data.players;
	let serverStatus = data.status;	
	let serverIp = data.ip

	onMount(() => {
		const p = setInterval(async () => players = await getPlayers(), 15000);
		const s = setInterval(async () => serverStatus = await getStatus(), 5000);
		const i = setInterval(async () => serverIp = await getIP(), 120000);
		return () => { clearInterval(p); clearInterval(s); clearInterval(i)}
	})

</script>


<main class="centred mt-50">
	<article class="blurred-white rounded centred col p-3 mw-450">
		<PlayerInfo user={user}/>

		<ServerInfo status={serverStatus} serverIp={serverIp} time={data.serverTime} />

		<Switch {serverStatus} />
		
		{#if players && serverStatus == "running"}
		<PlayerList players={players} />
		{/if}

	</article>
</main>
<SvelteToast/>