<script>
	export let data = {
		theme: 'dark', // {'dark' || 'light'}
	}
</script>

<hr class="d theme-{data.theme}">

<style>
	.theme-dark { outline: 1px solid var(--c-cyan); }
	.theme-light { outline: 1px solid var(--c-blue); }
	.d {
		height: 0;
		border: none;
		margin: auto;
		max-width: 70rem;
	}
</style>