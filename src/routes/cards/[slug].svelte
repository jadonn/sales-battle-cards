<script context="module">
    export async function preload( { params, query } ) {
        const res = await this.fetch( `cards/${ params.slug }.json` );
        const card = await res.json();
        if ( res.status === 200 ) {
            return card ;
        } else {
            this.error( res.status, data.error );
        }
    }
</script>

<script>
    export let card;
</script>
<style>
    .logo {
        grid-area: logo;
    }
    .leftHeading {
        grid-area: leftHeading;
    }
    .rightHeading {
        grid-area: rightHeading;
    }
    .side-content {
        grid-area: sideContent;
    }
    .left-content {
        grid-area: leftContent;
    }
    .right-content {
        grid-area: rightContent;
    }
    #card-layout-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr );
        grid-auto-rows: minmax(100px, auto);
        grid-template-areas:
        "logo         leftHeading rightHeading"
        "sideContent  leftContent rightContent"
    }
</style>
<svelte:head>
    { #if card.title }
        <title>{ card.title }</title>
    { /if }
</svelte:head>
<div id="card-layout-grid">
    { @html card.content }
</div>