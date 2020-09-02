<script>
    import { onMount } from "svelte";
    onMount(() => {

    })
</script>
<style>
    #home-layout-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
</style>

<svelte:head>
    <title>Sapper Firebase Material Template</title>
</svelte:head>

<div id="home-layout-grid">
    <div>
        <p><a href="cards">Cards</a></p>
    </div>
</div>