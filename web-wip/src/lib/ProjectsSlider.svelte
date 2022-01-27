<script>
  export let data = {
    title: undefined,
    buttonText: undefined,
    buttonAction: undefined,
    projects: undefined
  };

  let scrolled = 50;
</script>

<section class="ps">
  <header class="ps-header">
    {#if data.title}<h1 class="ps-title">{data.title}</h1>{/if}
    <div class="ps-progress">
      <div class="ps-progress-inner" style="width: {scrolled}%"></div>
    </div>
    {#if data.buttonText}<button class="ps-button">{data.buttonText}</button>{/if}
  </header>
  {#if data.projects}
    <ul class="ps-list">
      {#each data.projects as project}
        <li class="ps-list-item">
          {#if project.image}<img class="ps-list-image" src={project.image} alt="">{/if}
          {#if project.name}<span class="ps-list-name">{project.name}</span>{/if}
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style>
  .ps {
    background: var(--c-dark);
    color: var(--c-lighter);
    padding: 10rem 1rem;
  }
  .ps-header {
    display: flex;
    max-width: 70rem;
    margin: auto;
  }
  .ps-title {
    font-size: var(--s-xl);
    font-family: var(--f-title);
    line-height: 1;
  }
  .ps-progress {
    position: relative;
    height: 4px;
    background: var(--c-light);
    margin: 0 5rem;
    flex: 1;
    align-self: flex-end;
  }
  .ps-progress-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--c-cyan);
  }
  .ps-button {
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
  .ps-button::after {
    content: '';
    width: .5em;
    height: .5em;
    margin-left: .75em;
    border-right: .15em solid;
    border-top: .15em solid;
    transform: translateY(.1em) rotate(45deg);
  }
  .ps-button:hover {
    background: transparent;
    color: var(--c-blue);
  }
  .ps-list {
    list-style: none;
    width: 100vw;
    display: flex;
    margin: 0 -1rem;
    padding: 2rem 0;
    overflow: auto;
  }
  .ps-list::before {
    content: '';
    width: calc((100vw - 70rem) / 2);
    min-width: 1rem;
    flex-shrink: 0;
  }
  .ps-list-item {
    padding: 0 2rem 0 0;
  }
  .ps-list-image {
    display: block;
    width: 55vw;
    height: 30vw;
    object-fit: cover;
  }
  .ps-list-name {
    display: block;
    font-size: var(--s-xm);
    font-family: var(--f-title);
    margin-top: .5em;
  }
  @media (max-width: 750px) {
    .ps-header {
      position: relative;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .ps-progress {
      position: absolute;
      top: 100%;
      width: 100%;
      margin: 1rem 0;
    }
  }
</style>