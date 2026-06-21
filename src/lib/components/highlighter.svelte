<script>
    // Destructure the children snippet from props
    let { children } = $props();
</script>

<span class="highlight-bg">
    <span class="highlight-text">{@render children?.()}</span>
</span>