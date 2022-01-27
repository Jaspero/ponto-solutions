<script>
  import LayoutHeader from "$lib/LayoutHeader.svelte";
  import LayoutFooter from "$lib/LayoutFooter.svelte";
</script>

<LayoutHeader/>

<main>
  <slot></slot>
</main>

<LayoutFooter/>

<!-- TODO: Cookies popup -->
<!-- TODO: Legal -->
<!-- TODO: 404 -->