<script>
	import { base } from '$app/paths';
</script>

<div
	class="col-start-4 col-end-6 row-start-3 row-end-4 flex flex-col justify-between rounded-sm bg-[#733B73] p-2"
>
	<h1 class="text-xl font-bold sm:text-4xl">Socials</h1>
	<div
		class="jetbrains-mono flex w-full flex-col gap-2 text-sm font-bold sm:flex-row sm:gap-6 md:text-lg"
	>
		<a
			href="https://github.com/ashrv12"
			target="_blank"
			class="group relative z-1 flex items-center gap-1"
		>
			<img
				src="./github.svg"
				class="h-[1.5rem] w-[1.5rem] sm:h-[2.3rem] sm:w-[2.3rem]"
				alt="github"
			/>
			<h2 class="text-xs sm:text-base">Github</h2>

			<!-- dropdown content -->
			<div
				class="pointer-events-none absolute top-[100%] right-0 h-fit w-[200px] overflow-hidden rounded-md border opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
			>
				<img src="github-profile.png" class="w-full" alt="github" />
			</div>
		</a>
		<a
			target="_blank"
			href="https://www.linkedin.com/in/ariyashiravb/"
			class="group relative z-0 flex items-center gap-1"
		>
			<img src="./linkedin.png" class="h-[1.5rem] sm:h-[2.3rem]" alt="linkedin" />
			<h2 class="text-xs sm:text-base">Linkedin</h2>

			<!-- dropdown content -->
			<div
				class="pointer-events-none absolute top-[100%] right-0 h-fit w-[200px] overflow-hidden rounded-md border opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
			>
				<img src="linkedin-profile.png" class="w-full" alt="linkedin" />
			</div>
		</a>

		<!-- Stories and devlogs -->
		<a target="_blank" href="devlogs" class="group relative z-0 flex items-center gap-1">
			<img src="./itsfine.jpeg" class="h-[1.5rem] sm:h-[2.3rem]" alt="linkedin" />
			<h2 class="text-xs sm:text-base">Dev Logs (CLICK ME!!!)</h2>
		</a>
	</div>
</div>
