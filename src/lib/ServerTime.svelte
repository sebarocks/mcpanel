<script lang="ts">
	import { onMount } from "svelte";
    import { MCTime } from "./mctime";
	import { getTime } from "./mcmanage-client";

// componente que recibe hora y empieza a mover el reloj a 0.7x
// cada 30 segundos reales sincroniza con API

export let hour : number
export let minute : number

let show = hour != undefined;
let mctime = new MCTime(hour,minute);
let daylightEmoji = emoji(mctime.daylight);

function emoji(daylight : boolean){
    return daylight ? '☀️' : '🌌';
}

function passMinute() {
        mctime.addMinute();
        hour = mctime.hour;
        minute = mctime.minute;
    }

async function updateTime(){
    const time = await getTime();

    if (time == null) {
        show = false;
        return;
    }
    mctime.update(time.tick);
    daylightEmoji = emoji(mctime.daylight) 
}

onMount(() => {
    setInterval(passMinute, 833);
    setInterval(updateTime, 10000);
})

</script>

{#if show}
    <div> Hora del Juego: {daylightEmoji} {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')} </div>
{/if}
