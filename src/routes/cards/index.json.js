import content from "./_content";
import showdown from "showdown";

export function get( req, res ) {
    const conv = new showdown.Converter( { metadata: true } );
    const cards = content.cards();
    const linkData = [];
    for ( const card of cards ) {
        const rawCard = content.card( card );
        const html = conv.makeHtml( rawCard );
        const metadata = conv.getMetadata();
        const cardLinkData = {
            title: metadata.title,
            slug: metadata.slug
        }
        linkData.push( cardLinkData );
    }

    res.writeHead( 200, { "Content-Type": "application/json" } );

    res.end( JSON.stringify( linkData ) );
}
