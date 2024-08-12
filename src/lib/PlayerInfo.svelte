<script>
	import Logout from "./Logout.svelte";

	export let user;

</script>

<Logout/>
<div class="px-15 full-rounded blurred-white mt-minus50 flex centred">
	<img class="full-rounded width40px mr-10" src="/img/personaje_1.png" alt="Profile-Pic">
	<h2 class="font-1">{ user }</h2>
</div>