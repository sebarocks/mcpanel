<script>
	import ButtonLoad from './ButtonLoad.svelte';
    import {PUBLIC_API_URL} from '$env/static/public';
	export let serverState;

	let status = serverState.status;

	let isLoading = false;

	async function handleSubmit() {
		isLoading = true;

		try {
            const response = await fetch(PUBLIC_API_URL + '/pb/start', {
                method: 'POST',
                credentials: 'include'
            });
			var data = await response.json();
		} catch (error) {
			console.log(error);
		} finally {
			isLoading = false;
            console.log(data);
		}
	}
</script>

<section class="centred col pb-3rem full-width">
	{#if status == 'stopped'}
		<div id="form-apagado" class="full-width server-form">
			<ButtonLoad bind:loading={isLoading} on:click={handleSubmit} color="bg-green">
				<span id="spanTextTurnOnOff" class="font-1 mb-minus5px is-size-6">Encender</span>
			</ButtonLoad>
		</div>
	{/if}
</section>
