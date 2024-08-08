<script lang="ts">
	import PlayerInfo from "$lib/PlayerInfo.svelte";
	import PlayerList from "$lib/PlayerList.svelte";
	import ServerInfo from "$lib/ServerInfo.svelte";
	import Switch from "$lib/Switch.svelte";

	export let data;

	let user = data.user?.username;

	let players : Array<string> = data.players;	

	let serverState =  {
            'status': data.status?.instanceState,
            'ip': data.ip,
			'time': data.serverTime
    };


</script>


<main class="centred mt-50">
	<article class="blurred-white rounded centred col p-3 mw-450">
		<PlayerInfo user={user}/>

		<ServerInfo {serverState}/>

		<Switch {serverState} />
		
		{#if players && serverState.status == "running"}
		<PlayerList players={players} />
		{/if}

	</article>
</main>