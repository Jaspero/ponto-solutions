<script>
  export let data = {
    image: 'images/menu-hover/2.png',
    topText: 'Simplify Your Systems',
    bottomText: 'Understand Your Infrastructure'
  };

  let tx = 0;
  let bx = 0;
</script>

{#if data.image}
  <section class="m">
    <img class="m-image" src={data.image} alt="">
    <span class="m-top" style="transform: translateX(calc(50vw - {tx}vw));">{data.topText}</span>
    <span class="m-bottom" style="transform: translateX(calc(-50vw + {bx}vw));">{data.bottomText}</span>
  </section>
{/if}

<style>
  .m {
    position: relative;
    background: linear-gradient(30deg, var(--c-darker) 86%, var(--c-dark) 86%);
    color: var(--c-light);
    text-shadow: 1px 1px 4px var(--c-darker);
    font-size: var(--s-xxl);
    font-family: var(--f-title);
    line-height: 1.5;
    white-space: nowrap;
  }
  .m-image {
    display: block;
    width: 75vw;
    height: 45vw;
    object-fit: cover;
  }
  .m-top {
    position: absolute;
    left: 0;
    bottom: 1.5em;
  }
  .m-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>