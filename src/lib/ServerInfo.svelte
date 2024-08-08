<script>
    import { PUBLIC_SERVER_IP } from '$env/static/public';
    export let serverState;
    // mostrar ip o dominio
    const IP_MODE = false;


</script>

<section class="centred col py-3rem">
    <h1 class="pb-10px">
        <p class="font-1 mt-minus28 bold">El server está: </p>
        <b id="estado-title" class="capitalize font-1 is-size-2">{serverState.status}</b>
    </h1>

    {#if IP_MODE}
    <h2>IP: {serverState.ip}</h2>
    {:else}
    <h2>URL: {PUBLIC_SERVER_IP}</h2>
    {/if}
    
    <h3>Hora del Juego: {serverState.time.hour}:{serverState.time.minute}</h3>
</section>