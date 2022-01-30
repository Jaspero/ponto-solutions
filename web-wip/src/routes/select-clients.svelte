<script>
  import HeroTitle from "$lib/HeroTitle.svelte";
	import Text from "$lib/Text.svelte";
	import Snippet from "$lib/Snippet.svelte";
	import FeedbackSlider from "$lib/FeedbackSlider.svelte";
	import Divider from "$lib/Divider.svelte";

	let heroTitleData = {
		theme: 'light',
		title: "You're In Good Company",
    image: 'images/menu-hover/2.png'
	}

	let textData = {
		theme: 'light',
		title: 'SECURITY SYSTEM UNIFICATION',
		titleWidth: '18ch',
		subtitle: 'An expert team of system engineers and programming prowess'
	}

	let snippetData1 = {
		theme: 'light',
		image: 'images/menu-hover/2.png',
		title: 'ENTERTAINMENT VENUES',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.',
		button: 'Expand',
		content: `<h1>title</h1><p>paragraph</p>`
	}

	let snippetData2 = {
		theme: 'light',
		image: 'images/menu-hover/2.png',
		title: 'ENTERTAINMENT VENUES',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.',
		button: 'Expand',
		content: `<h1>title</h1><p>paragraph</p>`
	}

	let feedbackSliderData = {
		theme: 'light',
		title: 'See what others say & Decide for yourself',
		feedbacks: [
			{
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in.',
				image: 'images/menu-hover/2.png',
				name: 'John Doe',
				title: 'Anonymus',
			},
			{
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in.',
				image: 'images/menu-hover/2.png',
				name: 'John Doe',
				title: 'Anonymus',
			},
			{
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in.',
				image: 'images/menu-hover/2.png',
				name: 'John Doe',
				title: 'Anonymus',
			}
		]
	}

	let dividerData = {
		theme: 'dark'
	}
</script>

<HeroTitle data={heroTitleData}/>

<Text data={textData}/>

<Snippet data={snippetData1}/>

<Snippet data={snippetData2}/>

<FeedbackSlider data={feedbackSliderData}/>

<Divider data={dividerData}/>