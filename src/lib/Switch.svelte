<script>
	import ButtonLoad from './ButtonLoad.svelte';
    import {PUBLIC_API_URL} from '$env/static/public';
	import { toast } from '@zerodevx/svelte-toast';

	export let serverStatus;

	let isLoading = false;

	async function handleSubmit() {
		isLoading = true;

		try {
            const response = await fetch(PUBLIC_API_URL + '/pb/start', {
                method: 'POST',
                credentials: 'include'
            });
			var data = await response.json();
		} 
		catch (error) {
			console.log(error);
			isLoading = false;
			toast.push('Error en la solicitud de encendido de servidor.')
			
		} 
		finally {
			isLoading = false;
            console.log(data);
			toast.push('Solicitud de encender servidor enviada.', { duration: 1500 })
		}
	}
</script>

<section class="centred col pb-3rem full-width">
	{#if serverStatus == 'stopped'}
		<div id="form-apagado" class="full-width server-form">
			<ButtonLoad bind:loading={isLoading} on:click={handleSubmit} color="bg-green">
				<span id="spanTextTurnOnOff" class="font-1 mb-minus5px is-size-6">Encender</span>
			</ButtonLoad>
		</div>
	{/if}
</section>
