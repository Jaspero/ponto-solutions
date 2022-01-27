<script>  
  import { page } from '$app/stores'
  
  let menuOpened = false;
  
  let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<header class="h h-theme-dark"> <!-- h-theme-dark: [/, /specialties, /contact]; h-theme-light: [/select-clients,] h-theme-accent: [/industrties, /news] -->
  <a class="h-home" href="/">
    <!-- if route: [/, /specialties, /contact]; -->
    <img class="h-logo" src="images/clarity-on-dark.svg" alt="Clarity">
    <!-- if route: [/industries, /select-clients, /news] -->
    <!-- <img class="h-logo" src="images/clarity-on-light.svg" alt="Clarity"> -->
  </a>
  <span class="h-title">
    {#if $page.path === '/'}01. Introduction
    {:else if $page.path === '/industries'}02. Industries
    {:else if $page.path === '/select-clients'}03. Select Clients
    {:else if $page.path === '/specialties'}04. Specialties
    {:else if $page.path === '/news'}05. News
    {:else if $page.path === '/contact'}06. Contact
    {/if}
  </span>
  <button class="h-toggle" on:click={() => menuOpened = !menuOpened} aria-label="Toggle navigation">
    <svg class="h-toggle-img" class:active={menuOpened} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" stroke="#f4f4f4" stroke-width="2"/>
      <path d="M12.929 27.071 27.071 12.93M12.929 12.929 27.071 27.07" stroke="#f4f4f4" stroke-width="2"/>
    </svg>
    <svg class="h-toggle-img" class:active={!menuOpened} viewBox="0 0 40 40" fill="none">
      <path d="M14 13h24C36.5 8.5 31 1 20 1S1 9 1 20s8 19 19 19 16.5-7.5 18-12H14m16-7H10" stroke="#f4f4f4" stroke-width="2"/>
    </svg>
  </button>
</header>

<nav class="h-nav" class:active={menuOpened} on:mousemove={handleMousemove}>
  <a class="h-nav-item active" href="/">
    <span class="h-nav-item-text">01. Introduction</span>
    <img class="h-nav-item-img" src="images/menu-hover/1.png" alt="" style="left: calc({m.x}px - 5rem); top: calc({m.y}px - 2.5rem); background: red;">
  </a>
  <a class="h-nav-item" href="/industries">
    <span class="h-nav-item-text">02. Industries</span>
    <img class="h-nav-item-img" src="images/menu-hover/2.png" alt="" style="left: calc({m.x}px - 5rem); top: calc({m.y}px - 2.5rem); background: green;">
  </a>
  <a class="h-nav-item" href="/select-clients">
    <span class="h-nav-item-text">03. Select Clients</span>
    <img class="h-nav-item-img" src="images/menu-hover/3.png" alt="" style="left: calc({m.x}px - 5rem); top: calc({m.y}px - 2.5rem); background: blue;">
  </a>
  <a class="h-nav-item" href="/specialties">
    <span class="h-nav-item-text">04. Specialties</span>
    <img class="h-nav-item-img" src="images/menu-hover/4.png" alt="" style="left: calc({m.x}px - 5rem); top: calc({m.y}px - 2.5rem); background: cyan;">
  </a>
  <a class="h-nav-item" href="/news">
    <span class="h-nav-item-text">05. News</span>
    <img class="h-nav-item-img" src="images/menu-hover/5.png" alt="" style="left: calc({m.x}px - 5rem); top: calc({m.y}px - 2.5rem); background: crimson;">
  </a>
  <a class="h-nav-item" href="/contact">
    <span class="h-nav-item-text">06. Contact</span>
    <img class="h-nav-item-img" src="images/menu-hover/6.png" alt="" style="left: calc({m.x}px - 5rem); top: calc({m.y}px - 2.5rem); background: white;">
  </a>
</nav>

<style>
  .h-theme-dark {
    --h-fg: var(--c-light);
    --h-bg: var(--c-darker);
  }
  .h-theme-light {
    --h-fg: var(--c-darker);
    --h-bg: var(--c-light);
  }
  .h-theme-accent {
    --h-fg: var(--c-lighter);
    --h-bg: var(--c-blue);
  }
  .h {
    background: var(--h-bg);
    color: var(--h-fg);
    display: flex;
    align-items: center;
    padding: 0 3rem;
    height: 6rem;
  }
  .h-home {
    margin-right: auto;
    text-decoration: none;
  }
  .h-logo {
    display: inline-block;
    width: auto;
    height: 3rem;
    vertical-align: middle;
  }
  .h-title {
    font-size: 2rem;
    font-family: var(--f-title);
    margin-right: 5rem;
  }
  .h-toggle {
    position: fixed;
    z-index: 9;
    top: 1.5rem;
    right: 3rem;
    background: none;
    padding: .25rem;
    border: none;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px var(--c-darker)) drop-shadow(0 0 1px var(--c-darker));
  }
  .h-toggle-img {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    transition: .5s;
  }
  .h-toggle-img.active {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }
  .h-nav {
    position: fixed;
    z-index: 8;
    overflow-x: hidden;
    overflow-y: auto;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background: #121a37;
    box-shadow: -1rem 0 .5rem rgba(0,0,0,.24);
    padding: 6rem;
    transition: .5s;
    opacity: 0;
    visibility: hidden;
  }
  .h-nav.active {
    opacity: 1;
    visibility: visible;
  }
  .h-nav-item {
    position: relative;
    font-size: 2rem;
    color: #ffffff;
    text-shadow: 0 0 8px #121a37;
    font-family: var(--f-title);
    text-decoration: none;
    padding: .5rem;
    margin: auto 0;
  }
  .h-nav-item:hover {
    color: var(--c-cyan);
  }
  .h-nav-item.active {
    color: var(--c-cyan);
  }
  .h-nav-item.active::after {
    content: '';
    position: absolute;
    width: 3rem;
    right: calc(100% + 1rem);
    bottom: .5em;
    height: .06em;
    background: var(--c-cyan);
    pointer-events: none;
  }
  .h-nav-item-text {
    position: relative;
    z-index: 2;
  }
  .h-nav-item-img {
    position: fixed;
    pointer-events: none;
    object-fit: cover;
    z-index: 1;
    width: 10rem;
    height: 5rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity .5s, visibility .5s;
  }
  .h-nav-item:hover .h-nav-item-img {
    opacity: .5;
    visibility: visible;
  }
  @media (max-width: 750px) {
    .h {
      padding: 0 1.5rem;
      height: 5rem;
    }
    .h-title {
      display: none;
    }
    .h-toggle {
      width: 2rem;
      height: 2rem;
      right: 1.5rem;
      top: 1.5rem;
    }
    .h-nav {
      padding: 6rem 4rem 2rem 2rem;
    }
    .h-nav-item {
      font-size: 1.5rem;
    }
    .h-nav-item::after {
      display: none;
    }
    .h-logo {
      height: 2rem;
    }
  }
</style>