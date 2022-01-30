<script>
	export let data = {
		theme: 'accent', // {'dark' || 'light' || 'accent'}
		title: 'SECURITY SYSTEM UNIFICATION',
		titleWidth: 'auto',
    subtitle: 'An expert team of system engineers and programming prowess',
    subtitleWidth: 'auto',
	}
</script>

<section class="t theme-{data.theme}">
	{#if data.title}<h1 class="t-title" style="max-width: {data.titleWidth};">{data.title}</h1>{/if}
	{#if data.subtitle}<p class="t-subtitle" style="max-width: {data.subtitleWidth};">{data.subtitle}</p>{/if}
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
	.t {
		background: var(--bg);
		color: var(--fg);
		text-align: center;
		padding: 4.5rem 0;
	}
	.t-title {
		padding: 0 1rem;
		font-size: var(--s-xl);
		font-family: var(--f-title);
		font-weight: normal;
		max-width: 70rem;
		margin: 0 auto;
	}
	.t-subtitle {
		padding: 0 1rem;
		font-size: var(--s-m);
		margin: 0 auto;
	}
</style>