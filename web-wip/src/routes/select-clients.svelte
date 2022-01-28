<script>
  import HeroTitle from "$lib/HeroTitle.svelte";

	let heroTitleData = {
		theme: 'light',
		title: "You're In Good Company",
    image: 'images/menu-hover/2.png'
	}
</script>

<HeroTitle data={heroTitleData}/>