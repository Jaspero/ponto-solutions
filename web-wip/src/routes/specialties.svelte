<script>
  import HeroTitle from "$lib/HeroTitle.svelte";
	import Text from "$lib/Text.svelte";

	let heroTitleData = {
		theme: 'dark',
		title: "You're In Good Company",
    image: 'images/menu-hover/2.png'
	}

	let textData = {
		theme: 'dark',
		title: 'SECURITY SYSTEM UNIFICATION',
		titleWidth: '18ch',
		subtitle: 'An expert team of system engineers and programming prowess',
	}
</script>

<HeroTitle data={heroTitleData}/>

<Text data={textData}/>