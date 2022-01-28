<script>
  import HeroTitle from "$lib/HeroTitle.svelte";
	import Text from "$lib/Text.svelte";

	let heroTitleData = {
		theme: 'accent',
		title: 'Access Granted',
    image: 'images/menu-hover/2.png'
	}

	let textData = {
		theme: 'accent',
		title: 'UNCLASSIFIED INFORMATION',
		subtitle: 'An expert team of system engineers and programming prowess',
	}
</script>

<HeroTitle data={heroTitleData}/>

<Text data={textData}/>