const fs = require( "fs" );

export function cards() {
    try {
        const files = fs.readdirSync( './content/cards/' );
        return files;
    } catch( error ) {
        throw error;
    }
}

export function card( slug ) {
    try {
        const file = fs.readFileSync( `./content/cards/${ slug }/index.md`, { encoding: 'utf-8' } );
        return file;
    } catch( error ) {
        throw error;
    }
}

export function hasCard( slug ) {
    try {
        const exists = fs.existsSync( `./content/cards/${ slug }`);
        return exists;
    } catch( error ) {
        throw error;
    }
}

const content = {};
content.cards = cards;
content.card = card;
content.hasCard = hasCard;

export default content;