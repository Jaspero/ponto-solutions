<script>
	export let data = {
		title: undefined,
		images: []
	}
</script>

<section class="g">
	{#if data.title}<h1 class="g-title">{data.title}</h1>{/if}
	{#if data.images}
		<div class="g-images">
			{#each data.images as image}
				<div class="g-aspect">
					<img class="g-image" src={image} alt="">
				</div>
			{/each}
		</div>
	{/if}
</section>

<style>
	.g {
		background: var(--c-darker);
		color: var(--c-lighter);
		padding: 6rem 1rem;
	}
	.g-title {
		font-family: var(--f-title);
		font-size: var(--s-xl);
		font-weight: normal;
		max-width: 70rem;
		margin: 0 auto .25em;
	}
	.g-images {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		max-width: 70rem;
		margin: auto;
	}
	.g-aspect {
		position: relative;
		grid-column: span 1;
		padding-bottom: 66%;
	}
	.g-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		outline: 1px solid;
		object-fit: cover;
	}
	@media(max-width: 750px) {
		.g-images {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>