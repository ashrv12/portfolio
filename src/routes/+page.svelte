<script lang="ts">
	import Introduction from "$lib/components/Introduction.svelte";
	import WorkExperience from "$lib/components/WorkExperience.svelte";

</script>

<!-- this is just a layout main container (our outermost layer) -->
<main class="relative flex flex-col h-dvh w-dvw items-center overflow-y-scroll px-[20px] py-[30px]">
<!-- Start of the content container -->
	<div class="w-full">
		<Introduction />
		
		<h5 class="text-[var(--color-secondary)] font-medium text-lg">---</h5>

		<WorkExperience />
	</div>
</main>
