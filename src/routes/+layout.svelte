<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import signIcon from '$lib/assets/images/signiture.png';

	let { children } = $props();
	let isHome = $derived($page.url.pathname === '/');
</script>

<svelte:head>
	<link rel="icon" href={signIcon} type="image/png" />
	<script type="application/ld+json">{JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Sebastian Eschenbach",
		"jobTitle": "Maler",
		"description": "Maler aus der Uckermark, Brandenburg. Großformatige Landschaftsmalerei in Öl, Zeichnung und Aquarell.",
		"url": "https://sebastian-eschenbach.de",
		"address": {
			"@type": "PostalAddress",
			"addressRegion": "Uckermark",
			"addressCountry": "DE"
		}
	})}</script>
</svelte:head>

{@render children()}
{#if !isHome}
	<Footer />
{/if}
