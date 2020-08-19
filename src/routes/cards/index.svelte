<script context="module">
    export function preload( { params, query } ) {
        return this.fetch( `cards.json` ).then( r => r.json() ).then( cards => {
            return { cards };
        } );
    }
</script>
<script>
    export let cards;
</script>
<svelte:head>
    <title>Sales Battle Cards</title>
</svelte:head>

<h1>Available Cards</h1>
<ul>
    { #each cards as card }
        <li><a rel="prefetch" href="cards/{card.slug}">{card.title}</a></li>
    { /each }
</ul>