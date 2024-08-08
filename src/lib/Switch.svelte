<script>
    export let serverState;

    let status = serverState.status;
    
</script>


<section class="centred col pb-3rem full-width">

    {#if status=="running"}

        <div id="form-encendido" class="full-width server-form" >
            <button class="full-width font-white bg-red p-3 rounded transparent-input centred" type="submit">
                <span id="spanTextTurnOnOff" class="font-1 mb-minus5px is-size-6">Apagar</span>
            </button>
        </div>

    {:else if status=="stopped"}

        <div id="form-apagado" class="full-width server-form">

            <button class="full-width font-white bg-green p-3 rounded transparent-input centred" type="submit">
                <span id="spanTextTurnOnOff" class="font-1 mb-minus5px is-size-6">Encender</span>
            </button>
        </div>

    {:else}

        <p id="form-other" class="server-form" >No hay accion disponible</p>

    {/if}
    
</section>

