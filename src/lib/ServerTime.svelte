<script lang="ts">
	import { onMount } from "svelte";
    import { MCTime, parseTime } from "./mctime";
	import { PUBLIC_API_URL } from "$env/static/public";

// componente que recibe hora y empieza a mover el reloj a 0.7x
// cada 30 segundos reales sincroniza con API

export let hour : number
export let minute : number

let mctime = new MCTime(hour,minute);

function passMinute() {
        mctime.addMinute();
        hour = mctime.hour;
        minute = mctime.minute;
    }

async function updateTime(){
    const response = await fetch(PUBLIC_API_URL + '/time', {
        method: 'GET',
    });

    if (!response.ok) {
        console.error('Failed to fetch Time data');
        return null;
    }

    const data = await response.json();
    mctime.update(data.tick);    
}

onMount(() => {
    setInterval(passMinute, 833);
    setInterval(updateTime,10000);
})

</script>

{hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
