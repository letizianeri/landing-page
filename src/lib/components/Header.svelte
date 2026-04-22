<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
	<Link class="brand" title="Mei Meeting" ref="/" />

	<nav>
		<Link class="nav-link" title="Home" ref="/" />
		<Link class="nav-link" title="Blog" ref="/" />
	</nav>
</header>

<style>
	header {
		padding-block: var(--size-6);

		display: flex;
		gap: var(--size-8);
		justify-content: space-between;
		align-items: center;
	}

	nav {
		display: flex;
		gap: var(--size-6);
		align-items: center;
	}

	/* Typography variants for header links */
	:global(.brand) {
		font-family: "Open Sans Condensed", var(--font-primary);
		font-weight: 800; /* ExtraBold */
		letter-spacing: -0.01em;
		font-size: 2rem;
	}

	:global(.nav-link) {
		font-family: var(--font-primary);
		font-weight: 600; /* Semibold */
		font-size: 1.5rem;
	}
</style>
