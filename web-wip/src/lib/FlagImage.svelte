<script>
  export let data = {
    image: undefined,
    title: undefined,
    description: undefined,
    buttonText: undefined,
    buttonAction: undefined
  }
</script>

<section class="fi" style="background-image: url({data.image});">
  <div class="fi-container">
    {#if data.title}<h1 class="fi-title">{data.title}</h1>{/if}
    {#if data.description}<p class="fi-description">{data.description}</p>{/if}
    {#if data.buttonText}<button class="fi-button">{data.buttonText}</button>{/if}
  </div>
</section>

<style>
  .fi {
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--c-dark);
  }
  .fi-container {
    max-width: 70rem;
    margin: auto;
    padding: 12rem 1rem;
  }
  .fi-title {
    font-family: var(--f-title);
    font-weight: normal;
    font-size: var(--s-xl);
    color: var(--c-light);
    text-shadow: 1px 1px 4px var(--c-darker);
  }
  .fi-description {
    font-size: var(--s-m);
    line-height: 2;
    max-width: 48ch;
    color: var(--c-lighter);
    text-shadow: 1px 1px 4px var(--c-darker);
    margin: 0 0 2.5em;
  }
  .fi-button {
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
  .fi-button::after {
    content: '';
    width: .5em;
    height: .5em;
    margin-left: .75em;
    border-right: .15em solid;
    border-top: .15em solid;
    transform: translateY(.1em) rotate(45deg);
  }
  .fi-button:hover {
    background: transparent;
    color: var(--c-blue);
  }
</style>