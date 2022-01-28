<script>
	export let data = {
		theme: 'dark', // {'light' || 'dark' || 'accent'}
		title: undefined,
		image: undefined
	}
</script>

<section class="ht theme-{data.theme}">
	{#if data.title}<h1 class="ht-title">{data.title}</h1>{/if}
	{#if data.image}<img class="ht-image" src={data.image} alt="">{/if}
</section>

<style>
	.theme-dark {
		--bg: var(--c-darker);
		--fg: var(--c-lighter);
	}
	.theme-light {
		--bg: var(--c-light);
		--fg: var(--c-darker);
	}
	.theme-accent {
		--bg: var(--c-blue);
		--fg: var(--c-lighter);
	}
	.ht {
		background: var(--bg);
		color: var(--fg);
	}
	.ht-title {
		padding: 6rem 1rem;
		font-size: var(--s-xl);
		font-family: var(--f-title);
		font-weight: normal;
		max-width: 70rem;
		margin: 0 auto;
	}
	.ht-image {
		display: block;
		width: 100vw;
		height: 40vw;
		object-fit: cover;
	}
</style>