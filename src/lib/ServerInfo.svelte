<script>
    import { PUBLIC_SERVER_IP } from '$env/static/public';
    import { estado } from './estado';
    import ServerTime from './ServerTime.svelte';
    export let serverState;
    // mostrar ip o dominio
    const IP_MODE = false;


</script>

<section class="centred col py-3rem">
    <h1 class="pb-10px">
        <p class="font-1 mt-minus28 bold">El server está: </p>
        <b id="estado-title" class="capitalize font-1 is-size-2">{estado(serverState.status)}</b>
    </h1>

    {#if IP_MODE}
        <h2>IP: {serverState.ip}</h2>
    {:else}
        <h2>URL: {PUBLIC_SERVER_IP}</h2>
    {/if}
    
    {#if serverState.time != null}
        <h3>Hora del Juego: <ServerTime hour={serverState.time.hour} minute={serverState.time.minute}/> </h3>
    {/if}
</section>