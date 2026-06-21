<script lang="ts">
	import Highlighter from "./highlighter.svelte";

    // Format options to force 2-digit padded years, months, and days
    const formatter = new Intl.DateTimeFormat('en-ZA', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
    });
    
    // This outputs exactly "YYYY/MM/DD" (e.g., "2026/06/18")
    const date = formatter.format(new Date());
</script>

<div class="flex flex-col justify-between gap-[90px]">
    <!-- name and date -->
    <div class="flex flex-col w-full gap-3">
        <div class="flex w-full justify-between items-end">
            <h1 class="font-sans font-medium text-lg">DevSecOps Engineer.</h1>

            <h4 class="font-mono font-light text-sm"><span class="text-[var(--color-secondary)]">[</span> {date} <span class="text-[var(--color-secondary)]">]</span></h4>
        </div>
        <div>
            <h4 class="font-mono font-light text-sm"><span class="text-[var(--color-secondary)]">[ ##### ]</span>shirav.b</h4>
        </div>
    </div>

    <!-- introduction begins here -->
    <div class="flex flex-col gap-3">
        <h1 class="font-sans font-medium text-lg"><span class="text-[var(--color-secondary)]">[ # ]</span> Introduction</h1>

        <p class="font-mono font-light text-sm sm:w-[45%]">
            <Highlighter>I specialize in systems / architectural design. </Highlighter>
            Rust is my day to day language of choice and I am CKS certified. 
            I always strive for peak efficiency in all aspects.
        </p>
    </div>
    
</div>