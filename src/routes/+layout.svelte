<script>
	import favicon from "$lib/assets/favicon.svg";

	import "$lib/styles/reset.css";
	import "$lib/styles/tokens.css";
	import "$lib/styles/base.css";
	import "$lib/styles/utilities.css";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Satoshi Font -->
	<link rel="preconnect" href="https://api.fontshare.com/" />
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />

	<!-- Inter Font -->
	<link rel="preconnect" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<Header />

{@render children()}

<Footer />
