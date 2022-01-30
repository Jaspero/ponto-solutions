<script>
  import HeroGallery from "$lib/HeroGallery.svelte";
  import Contact from "$lib/Contact.svelte";
  import Divider from "$lib/Divider.svelte";

  let heroGalleryData = {
    themeDarker: true,
    title: 'Through Thick and Thin',
    images: ['images/menu-hover/2.png']
  };

  let contactData = {
    inquiries: [
      {
        label: 'New Project Inquiries',
        value: 'Sales@ClaritySSU.com'
      },
      {
        label: 'Finance',
        value: 'Accounts@ClaritySSU.com'
      }
    ],
    directories: [
      {
        name: 'Alex Petrou',
        title: 'President',
        value: 'Alex@ClaritySSU.com'
      },
      {
        name: 'Todd Spencer',
        title: 'Engineering Director',
        value: 'Todd@ClaritySSU.com'
      },
      {
        name: 'Danny Baker',
        title: 'Field Director',
        value: 'Danny@ClaritySSU.com'
      },
      {
        name: 'Shane Yarnell',
        title: 'Project Administration',
        value: 'Shane@ClaritySSU.com'
      }
    ]
  }
  
  let dividerData = {
    theme: 'dark'
  }
</script>

<HeroGallery data={heroGalleryData}/>

<Contact data={contactData}/>

<Divider data={dividerData}/>