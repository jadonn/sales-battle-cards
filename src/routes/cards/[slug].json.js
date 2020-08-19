import content from "./_content";
import showdown from "showdown";

export function get( req, res, next ) {
    const { slug } = req.params;
    const exists = content.hasCard( slug );
    if ( exists ) {
        let cardData;
        try {
            cardData = content.card( slug );
        } catch( error ) {
            res.writeHead( 500, { "Content-Type": "application/json" } );
            res.end( JSON.stringify( { error: "Card data could not be read." } ) );
        }
        let cardHTML;
        let cardMetadata;
        try {
            const conv = new showdown.Converter( { metadata: true } );
            cardHTML = conv.makeHtml( cardData );
            cardMetadata = conv.getMetadata();
        } catch( error ) {
            res.writeHead( 500, { "Content-Type": "application/json" } );
            res.end( JSON.stringify( { error: "Error parsing Markdown to HTML." } ) );
        }
        const card = {};
        card.content = cardHTML;
        card.metadata = cardMetadata;
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( { card } ) );
    }
}