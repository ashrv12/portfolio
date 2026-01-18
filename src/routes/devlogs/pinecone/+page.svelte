<script>
	import { base } from "$app/paths";

</script>

<main class="w-dvw flex justify-center py-2 text-xl">
	<div class="w-full max-w-[75%] border rounded-lg p-4 flex flex-col gap-y-10">
		<div class="flex items-center gap-x-2">
			<a class="text-3xl font-thin" href=".">{`<<`} DevLogs</a>
			<img alt="sushi" src="{base}/kirby-sushi.png" class="h-[60px]" />
		</div>
		<img alt="banner" src="{base}/pinecone-banner.gif" class="h-[250px] object-cover w-full rounded-md"/>

		<h1 class="text-4xl font-semibold">Work Experience</h1>

		<ul class="list-disc px-4 text-2xl flex flex-col gap-y-5">
			<li>
				Improved the overall developer experience by shifting from frontend based testing to <code class="text-green-300 font-bold jetbrains-mono">API based testing</code>.
			</li>

			<li>
				Lead a team of 6 and built a CMS project for students and teachers. In the process swapped out <code class="text-blue-300 font-bold jetbrains-mono">NodeJS for Bun</code> and improved backend API performance by tenfold.
			</li>

			<li>
				Taught interns about <code class="text-green-300 font-bold jetbrains-mono">NextJS</code> and virtual dom based reactivity.
				How to optimize webapp performance using the <code class="text-blue-300 font-bold jetbrains-mono">react-compiler</code> and building as standalone.
			</li>

			<li>
				Advocated to move from <code class="text-red-300 font-bold jetbrains-mono">GraphQL</code> to a microservices based architecture to simplify CI/CD deployment and to improve
				overall developer experience.
			</li>

			<li>
				Wrote multitude of <code class="text-blue-300 font-bold jetbrains-mono">Github</code> CI/CD pipelines focused mainly on deploying to 
				<code class="text-orange-300 font-bold jetbrains-mono">Lambda / EC2</code> instances.
			</li>
		</ul>

		<!-- tech and skills used -->
		<h1 class="text-4xl font-semibold">Skills required</h1>
		<div class="flex px-4 gap-x-4 w-full">
			<img src="{base}/docker.svg" alt="docker" class="w-[70px]" />
			<img src="{base}/graphql.svg" alt="graphql" class="w-[70px]" />
			<img src="{base}/mongodb.svg" alt="mongodb" class="w-[70px]" />
			<img src="{base}/react.svg" alt="react" class="w-[70px]" />
			<img src="{base}/typescript.svg" alt="typescript" class="w-[70px]" />
			<img src="{base}/nodejs.svg" alt="nodejs" class="w-[70px]" />
			<img src="{base}/bun.svg" alt="bun" class="w-[70px]" />
		</div>

	</div>
</main>
