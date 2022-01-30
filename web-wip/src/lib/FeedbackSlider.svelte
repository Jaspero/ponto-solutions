<script>
  export let data = {
    theme: 'accent', // {'light' || 'accent'}
    title: undefined,
    feedbacks: undefined
  };

  let scrolled = 50;
</script>

<section class="fs theme-{data.theme}">
  <header class="fs-header">
    {#if data.title}<h1 class="fs-title">{data.title}</h1>{/if}
    <div class="fs-progress">
      <div class="fs-progress-inner" style="width: {scrolled}%"></div>
    </div>
  </header>
  {#if data.feedbacks}
    <ul class="fs-list">
      {#each data.feedbacks as feedback}
        <li class="fs-list-item">
          {#if feedback.content}<blockquote class="fs-list-content">{feedback.content}</blockquote>{/if}
          {#if feedback.image}<img class="fs-list-image" src={feedback.image} alt="">{/if}
          {#if feedback.name}<span class="fs-list-name">{feedback.name}</span>{/if}
          {#if feedback.title}<span class="fs-list-title">{feedback.title}</span>{/if}
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style>
  .theme-light {
		--bg: var(--c-light);
		--fg: var(--c-darker);
    --progress-bg: var(--c-blue);
    --progress-fg: var(--c-darker);
    --frame-border: var(--c-blue);
    --person-text: var(--c-darker);
	}
	.theme-accent {
		--bg: var(--c-blue);
		--fg: var(--c-lighter);
    --progress-bg: var(--c-lighter);
    --progress-fg: var(--c-darker);
    --frame-border: var(--c-darker);
    --person-text: var(--c-darker);
	}
  .fs {
    background: var(--bg);
		color: var(--fg);
    padding: 10rem 1rem;
  }
  .fs-header {
    display: flex;
    max-width: 70rem;
    margin: auto;
  }
  .fs-title {
    font-size: var(--s-xl);
    font-family: var(--f-title);
    line-height: 1;
    margin-right: 5rem;
    max-width: 16ch;
  }
  .fs-progress {
    position: relative;
    height: 4px;
    background: var(--progress-bg);
    flex: 1;
    align-self: flex-end;
  }
  .fs-progress-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--progress-fg);
  }
  .fs-list {
    list-style: none;
    width: 100vw;
    display: flex;
    margin: 0 -1rem;
    padding: 2rem 0;
    overflow: auto;
    font-size: var(--s-m);
  }
  .fs-list::before {
    content: '';
    width: calc((100vw - 70rem) / 2);
    min-width: 1rem;
    flex-shrink: 0;
  }
  .fs-list-item {
    padding: 0 2rem 0 0;
  }
  .fs-list-content {
    position: relative;
    width: max(45vw, 21rem);
    border: 1px solid var(--frame-border);
    text-align: center;
    padding: 4em 2em;
    margin-bottom: 2rem;
  }
  .fs-list-content::before {
    content: '"';
    position: absolute;
    top: 0;
    left: 2rem;
    font-size: 8rem;
    line-height: 1;
    font-style: italic;
    font-weight: bold;
  }
  .fs-list-content::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--bg);
    border-left: 1px solid var(--frame-border);
    border-bottom: 1px solid var(--frame-border);
    transform: translate(-50%,-50%) rotate(-45deg);
  }
  .fs-list-image {
    display: block;
    margin: auto;
    width: 4em;
    height: 4em;
    border-radius: 4em;
    object-fit: cover;
  }
  .fs-list-name {
    display: block;
    text-align: center;
    margin-top: .5em;
    font-weight: bold;
    color: var(--person-text);
  }
  .fs-list-title {
    display: block;
    text-align: center;
    color: var(--person-text);
  }
  @media (max-width: 750px) {
    .fs-header {
      position: relative;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .fs-progress {
      position: absolute;
      top: 100%;
      width: 100%;
      margin: 1rem 0;
    }
  }
</style>