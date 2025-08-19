<script>
	import Experience from './dashboard-components/Experience.svelte';
	import LangnLoc from './dashboard-components/LangnLoc.svelte';
	import Skills from './dashboard-components/Skills.svelte';
	import Socials from './dashboard-components/Socials.svelte';
	import Title from './dashboard-components/Title.svelte';
</script>

<div class="z-2 grid h-[90%] w-[90%] grid-cols-5 grid-rows-5 gap-4">
	<Title />
	<Experience />
	<Skills />
	<LangnLoc />
	<Socials />
</div>
