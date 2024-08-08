<script>
    import { createEventDispatcher } from 'svelte';
  
    export let loading = false;
    export let color = "";
  
    const dispatch = createEventDispatcher();
  
    function handleClick() {
      dispatch('click');
    }
  </script>
  
  <button on:click={handleClick} disabled={loading} class="{color} full-width font-white p-3 rounded transparent-input centred">
    {#if loading}
      <div class="spinner"></div>
    {:else}
      <slot/>
    {/if}
  </button>
  
  <style>
    .spinner {
      /* Your spinner styles here */
      border: 2px solid #f3f3f3; /* Light grey */
      border-top: 2px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: spin 2s linear infinite;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
  