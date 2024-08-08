<script>
    export let players;
</script>


<section class="blurred-green rounded centred col p-3 mw-450">
    <h3>Jugadores Conectados:</h3>
    <ul id="lista-players">
    {#each players as player }
        <li>{player}</li>
    {/each}
    </ul>
</section>