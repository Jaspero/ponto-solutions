<script>
  export let data = {
    title: undefined,
    description: undefined,
    buttonText: undefined,
    buttonAction: undefined,
    videoCover: undefined,
    videoSrc: undefined,
    videoWidth: undefined,
    videoHeight: undefined,
  }

  let videoDialog = false;;

  $: if (videoDialog) {
    try {
      document.body.classList.add('scroll-disabled');
    } catch (e) {}
  } else {
    try {
      document.body.classList.remove('scroll-disabled');
    } catch (e) {}
  }

  function close() {
    showing = false;
  }
  
  function closeOnEscape(event) {
    if (event.key === 'Escape') {
      close();
    }
  }
</script>

<svelte:window on:keydown={closeOnEscape}/>

<div class="fv">
  <div class="fv-background"></div>
  <div class="fv-content">
    <div class="fv-main">
      {#if data.title}<h1 class="fv-title">{data.title}</h1>{/if}
      {#if data.description}<p class="fv-description">{data.description}</p>{/if}
      {#if data.buttonText}<button class="fv-button">{data.buttonText}</button>{/if}
      <div class="fv-spacer"></div>
    </div>
    {#if data.videoCover}
      <div class="fv-media">
        <img class="fv-cover" src={data.videoCover} alt="">
        <button class="fv-play" aria-label="Play video" on:click={() => videoDialog = true}>
          <svg viewBox="0 0 92 92" fill="none" stroke="currentColor">
            <path d="M39 32.5 60 46 39 59.5v-27Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    {/if}
  </div>
</div>

<div class="fv-dialog" class:active={videoDialog}>
  <iframe class="fv-video" title="Video" width={data.videoWidth} height={data.videoHeight} src={data.videoSrc}/>
  <button class="fv-close" on:click={() => videoDialog = false}>
    <svg viewBox="0 0 92 92" fill="none" stroke="currentColor">
      <path d="m32 60 28-28M60 60 32 32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  </button>
</div>

<style>
  .fv {
    position: relative;
    background: var(--c-dark);
    padding: 8rem 0;
  }
  .fv-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--c-darker);
    transform-origin: left top;
    transform: skewX(-60deg);
  }
  .fv-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    max-width: 70rem;
    margin: auto;
  }
  .fv-main {
    flex: 0 1 50%;
    padding: 2rem 1rem;
  }
  .fv-title {
    color: var(--c-light);
    font-family: var(--f-title);
    font-size: var(--s-xl);
    font-weight: normal;
  }
  .fv-description {
    color: var(--c-light);
    font-size: var(--s-m);
    margin: 0 0 2.5em;
    max-width: 34ch;
    line-height: 2;
  }
  .fv-button {
    border: 1px solid var(--c-blue);
    background: var(--c-blue);
    color: var(--c-lighter);
    display: flex;
    align-items: center;
    font-family: var(--f-body);
    font-size: var(--s-m);
    line-height: 1.5;
    padding: 1em 1.5em;
    cursor: pointer;
    transition: .2s;
  }
  .fv-button::after {
    content: '';
    width: .5em;
    height: .5em;
    margin-left: .75em;
    border-right: .15em solid;
    border-top: .15em solid;
    transform: translateY(.1em) rotate(45deg);
  }
  .fv-button:hover {
    background: transparent;
    color: var(--c-blue);
  }
  .fv-spacer {
    height: 10rem;
  }
  .fv-media {
    position: relative;
    flex: 0 1 50%;
    padding-bottom: 66%;
  }
  .fv-cover {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding: 1rem;
  }
  .fv-play {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    transform: translate(-50%, 50%);
    width: 6rem;
    height: 6rem;
    padding: 0;
    border: 1px solid var(--c-blue);
    border-radius: 50%;
    color: var(--c-lighter);
    background: var(--c-blue);
    cursor: pointer;
    transition: .2s;
  }
  .fv-play:hover {
    color: var(--c-blue);
    background: transparent;
  }
  .fv-dialog {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4rem;
    background: rgba(0,0,0,.8);
    overflow: auto;
    transition: .5s;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
  }
  .fv-dialog.active {
    visibility: visible;
    opacity: 1;
    z-index: 10;    
  }
  .fv-video {
    margin: auto;
    border: none;
  }
  .fv-close {
    position: fixed;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
    padding: 0;
    border: 1px solid var(--c-blue);
    color: var(--c-blue);
    background: transparent;
    cursor: pointer;
    transition: .2s;
  }
  .fv-close:hover {
    color: var(--c-lighter);
    background: var(--c-blue);
  }
  @media (max-width: 750px){
    .fv-content {
      flex-direction: column-reverse;
      align-items: stretch;
    }
    .fv-spacer {
      display: none;
    }
    .fv-media {
      padding-bottom: 150%;
    }
    .fv-cover {
      padding: 0;
    }
    .fv-play {
      left: 50%;
      bottom: 50%;
    }
  }
</style>