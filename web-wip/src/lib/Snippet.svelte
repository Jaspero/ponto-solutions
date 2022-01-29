<script>
	export let data = {
		image: undefined,
		title: undefined,
		subtitle: undefined,
		content: undefined
	}

	let expanded = false;
</script>

<section class="s theme-{data.theme}">
	<div class="s-container">
		{#if data.image}<div class="s-aspect"><img class="s-image" src={data.image} alt=""></div>{/if}
		{#if data.title}<h1 class="s-title">{data.title}</h1>{/if}
		<div class="s-description">
			{#if data.subtitle}<p class="s-subtitle">{data.subtitle}</p>{/if}
			{#if data.content}<button class="s-expand" on:click={() => expanded = !expanded}>Expand</button>{/if}
		</div>
		{#if data.content}
			<div class="s-content" class:active={expanded}>
				{@html data.content}
				<div class="s-close-container">
					<button class="s-close" on:click={() => expanded = !expanded}>Close</button>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.theme-dark {
		--bg: var(--c-darker);
		--fg: var(--c-lighter);
		--btn-bg: var(--c-blue);
		--btn-fg: var(--c-lighter);
	}
	.theme-light {
		--bg: var(--c-light);
		--fg: var(--c-darker);
		--btn-bg: var(--c-darker);
		--btn-fg: var(--c-light);
	}
	.theme-accent {
		--bg: var(--c-blue);
		--fg: var(--c-lighter);
		--btn-bg: var(--c-darker);
		--btn-fg: var(--c-light);
	}
	.s {
		background: var(--bg);
		color: var(--fg);
		padding: 2rem 1rem 4rem;
	}
	.s-container {
		max-width: 70rem;
		margin: 0 auto;
	}
	.s-aspect {
		position: relative;
		padding-bottom: 50%;
	}
	.s-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.s-title {
		font-size: var(--s-xl);
		font-family: var(--f-title);
		font-weight: normal;
		line-height: 1;
		margin: 1em 0 .5em;
	}
	.s-description {
		display: flex;
		align-items: flex-end;
	}
	.s-subtitle {
		font-size: var(--s-m);
	}
	.s-expand {
    border: 1px solid var(--btn-bg);
    background: var(--btn-bg);
    color: var(--btn-fg);
    font-family: var(--f-body);
    font-size: var(--s-m);
    line-height: 1.5;
    padding: 1em 3em;
    cursor: pointer;
		margin-left: 4em;
    transition: .2s;
  }
  .s-expand:hover {
    background: transparent;
    color: var(--btn-bg);
  }
	.s-content {
		margin-top: 2rem;
		display: none;
	}
	.s-content.active {
		display: block;
	}
	.s-close-container {
		text-align: right;
		margin-top: 2rem;
	}
	.s-close {
    border: 1px solid var(--btn-bg);
    background: transparent;
    color: var(--btn-bg);
    font-family: var(--f-body);
    font-size: var(--s-m);
    line-height: 1.5;
    padding: 1em 3em;
    cursor: pointer;
		margin-left: 4em;
    transition: .2s;
  }
  .s-close:hover {
    background: var(--btn-bg);
    color: var(--btn-fg);
  }
	@media (max-width: 650px) {
		.s-description {
			flex-direction: column;
		}
		.s-expand {
			margin-top: 2rem;
			margin-left: unset;
		}
	}
</style>