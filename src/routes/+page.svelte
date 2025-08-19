<script lang="ts">
	import earth from '$lib/assets/earth.svg';
	import Dashboard from '$lib/components/Dashboard.svelte';
</script>

<main class="relative flex h-dvh w-dvw items-center justify-center">
	<img
		class="absolute top-1/2 left-1/2 z-1 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2"
		src={earth}
		alt="earth"
	/>
	<Dashboard />
</main>
