<script>
  import HeroTitle from "$lib/HeroTitle.svelte";
	import Text from "$lib/Text.svelte";
	import SnippetAlt from "$lib/SnippetAlt.svelte";

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

	let snippetAltData1 = {
		theme: 'dark',
		title: 'ENTERTAINMENT VENUES',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.',
		button: 'Expand',
		content: `<h1>title</h1><p>paragraph</p>`
	}

	let snippetAltData2 = {
		theme: 'dark',
		title: 'ENTERTAINMENT VENUES',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.',
		button: 'Expand',
		content: `<h1>title</h1><p>paragraph</p>`
	}
</script>

<HeroTitle data={heroTitleData}/>

<Text data={textData}/>

<SnippetAlt data={snippetAltData1}/>

<SnippetAlt data={snippetAltData2}/>