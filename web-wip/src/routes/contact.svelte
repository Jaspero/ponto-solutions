<script>
  import HeroGallery from "$lib/HeroGallery.svelte";

  let heroGalleryData = {
    themeDarker: true,
    title: 'Through Thick and Thin',
    images: ['images/menu-hover/2.png']
  };
</script>

<HeroGallery data={heroGalleryData}/>