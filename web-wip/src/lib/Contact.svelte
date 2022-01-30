<script>
	export let data = {
		inquiries: undefined,
		directories: undefined
	}
</script>

<section class="c">
	<div class="c-container">
		<div class="c-1">
			<p class="c-title">GENERAL INQUIRIES</p>
			{#each data.inquiries as inquiry}
				<div class="c-group">
					<strong class="c-label">{inquiry.label}</strong>
					<a class="c-link" href={inquiry.value}>{inquiry.value}</a>
				</div>
			{/each}
		</div>
		<div class="c-1">
			<p class="c-title">EXISTING CLIENTS</p>
			<div class="c-group">
				<strong class="c-label">For all existing clients who need support please email</strong>
				<a class="c-link" href="mailto:Support@ClaritySU.com">Support@ClaritySU.com</a>
			</div>
			<div class="c-group">
				<strong class="c-label">If you have a platinum support membership login to your portal here</strong>
				<a class="c-button" href="">Login</a>
			</div>
		</div>
		<div class="c-2">
			<p class="c-title">GENERAL DIRECTORY</p>
			<div class="c-grid">
				{#each data.directories as directory}
				<div class="c-group">
					<span class="c-name">{directory.name}</span>
					<span class="c-dept">{directory.title}</span>
					<a class="c-link" href={directory.value}>{directory.value}</a>
				</div>
			{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.c {
		padding: 6rem 1rem;
		background: var(--c-darker);
		color: var(--c-lighter);
	}
	.c-container {
		max-width: 70rem;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
	}
	.c-1 {
		flex: 0 1 50%;
		padding-right: 2rem;
	}
	.c-2 {
		flex: 0 1 100%;
	}
	.c-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.c-title {
		font-size: var(--s-xl);
		font-family: var(--f-title);
		margin-bottom: 1em;
		margin-top: 1.5em;
	}
	.c-group {
		display: block;
		margin-bottom: 2em;
		padding-right: 1em;
		font-size: var(--s-m);
	}
	.c-label {
		display: block;
		font-weight: bold;
		margin-bottom: .5em;
	}
	.c-link {
		color: inherit;
	}
	.c-link:hover {
		color: var(--c-cyan);
	}
	.c-button {
		display: inline-block;
    border: 1px solid var(--c-blue);
    background: var(--c-blue);
    color: var(--c-lighter);
    font-family: var(--f-body);
    font-size: var(--s-m);
    line-height: 1.5;
    padding: 1em 3.5em;
    cursor: pointer;
		margin-top: 1rem;
		text-decoration: none;
    transition: .2s;
  }
  .c-button:hover {
    background: transparent;
    color: var(--c-blue);
  }
	.c-name {
		display: block;
	}
	.c-dept {
		display: block;
	}
	@media (max-width: 750px) {
		.c-1 {
			flex: 0 1 100%;
		}
		.c-grid {
			display: block;
		}
	}
</style>