<script>
  import HeroGallery from "$lib/HeroGallery.svelte";
  import ClarityBanner from "$lib/ClarityBanner.svelte";
  import Marquee from "$lib/Marquee.svelte";
  import FlagList from "$lib/FlagList.svelte";
  import FlagImage from "$lib/FlagImage.svelte";
  import FlagVideo from "$lib/FlagVideo.svelte";
  import DetailsList from "$lib/DetailsList.svelte";
  import ProjectsSlider from "$lib/ProjectsSlider.svelte";

  let heroGalleryData = {
    title: 'SECURITY SYSTEM UNIFICATION',
    subtitle: 'An expert team of system engineers and programming prowess',
    images: ['images/menu-hover/2.png', 'images/menu-hover/2.png', 'images/menu-hover/3.png']
  };

  let clarityBannerData = {
    title: 'The Solution Is Clear'
  };

  let marqueeData = {
    image: 'images/menu-hover/2.png',
    topText: 'Simplify Your Systems',
    bottomText: 'Understand Your Infrastructure'
  };

  let flagListData = {
    title: 'Our Specialties',
    description: 'An expert team of system engineers and programming prowess. An expert team of system engineers and programming prowess.',
    buttonText: 'Find out more',
    buttonAction: '',
    list: ['Entertainment', 'Cannabis', 'Sports Venues', 'Corporate', 'Education']
  }
  
  let flagImageData1 = {
    title: 'Industry Experts',
    description: 'An expert team of system engineers and programming prowess. An expert team of system engineers and programming prowess.',
    buttonText: 'Find out more',
    buttonAction: '',
    image: 'images/menu-hover/2.png'
  }
  
  let flagVideoData = {
    title: 'Industry Experts',
    description: 'An expert team of system engineers and programming prowess. An expert team of system engineers and programming prowess.',
    buttonText: 'Find out more',
    buttonAction: '',
    videoCover: 'images/menu-hover/2.png',
    videoSrc: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    videoWidth: '420',
    videoHeight: '345'
  }

  let detailsListData = {
    list: [
      {
        image: 'images/menu-hover/1.png',
        title: 'Network',
        description: 'Lorem ipsum dolor sit amet, consec tetur Lorem ipsum dolor sit amet, consectetur'
      },
      {
        image: 'images/menu-hover/1.png',
        title: 'Video Surveillance',
        description: 'Lorem ipsum dolor sit amet, consec tetur Lorem ipsum dolor sit amet, consectetur'
      },
      {
        image: 'images/menu-hover/1.png',
        title: 'Access Control',
        description: 'Lorem ipsum dolor sit amet, consec tetur Lorem ipsum dolor sit amet, consectetur'
      },
      {
        image: 'images/menu-hover/1.png',
        title: 'Intrusion',
        description: 'Lorem ipsum dolor sit amet, consec tetur Lorem ipsum dolor sit amet, consectetur'
      },
      {
        image: 'images/menu-hover/1.png',
        title: 'Special Tech',
        description: 'Lorem ipsum dolor sit amet, consec tetur Lorem ipsum dolor sit amet, consectetur'
      },
    ]
  }
  
  let projectsSLiderData = {
    title: 'Projects',
    buttonText: 'Find out more',
    buttonAction: '',
    projects: [
      {
        image: 'images/menu-hover/1.png',
        name: 'Project 1'
      },
      {
        image: 'images/menu-hover/2.png',
        name: 'Project 2'
      },
      {
        image: 'images/menu-hover/3.png',
        name: 'Project 3'
      },
      {
        image: 'images/menu-hover/4.png',
        name: 'Project 4'
      },
    ]
  }

  let flagImageData2 = {
    title: 'Industry Experts',
    description: 'An expert team of system engineers and programming prowess. An expert team of system engineers and programming prowess.',
    buttonText: 'Find out more',
    buttonAction: '',
    image: 'images/menu-hover/1.png'
  }
</script>

<HeroGallery data={heroGalleryData}/>

<ClarityBanner data={clarityBannerData}/>

<Marquee data={marqueeData}/>

<FlagList data={flagListData}/>

<FlagImage data={flagImageData1}/>

<FlagVideo data={flagVideoData}/>

<DetailsList data={detailsListData}/>

<ProjectsSlider data={projectsSLiderData}/>

<FlagImage data={flagImageData2}/>