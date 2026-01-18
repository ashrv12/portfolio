<script>
</script>

<main class="flex w-dvw justify-center py-2 text-xl">
	<div
		class="flex gap-y-5 w-full max-w-[75%] flex-col p-4"
	>
		<div class="flex items-center gap-x-3">
			<a class="w-fit text-3xl font-thin" href=".">{`<<`} Home</a>
			<img alt="bocchi" src="./bocchi_eating_choco.png" class="h-[60px]" />
		</div>

		<!-- work experience -->
		<h1 class="text-3xl font-semibold">{`Work experience articles`}</h1>
		<div class="flex flex-col gap-y-3 p-3 border rounded-sm jetbrains-mono">
			<a href="./devlogs/pinecone">The beginnings of a true Monolith at <u>Pinecone</u></a>
			<a href="./devlogs/tdb">How I leveled up at <u>Trade Development Bank of Mongolia</u></a>
			<!-- <a href="./devlogs/pinecone">The lies of the "Neo" at <u>M-Bank</u></a> -->
		</div>

		<!-- devops guides -->
		<h1 class="text-3xl font-semibold">{`The path to Dev"Sec"Ops`}</h1>
		<h3 class="jetbrains-mono text-red-600">WORK IN PROGRESS</h3>
		<div class="flex flex-col gap-y-3 p-3 border rounded-sm jetbrains-mono opacity-10">
			<h3>Introduction to Docker</h3>
			<h3>Introduction to Kubernetes</h3>
			<h3>A simple guide on observability</h3>
			<h3>Security fundamentals</h3>
		</div>
	</div>
</main>
