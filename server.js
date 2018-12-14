require( 'dotenv' ).config();

// CORE
const fs = require( 'fs' );
const path = require( 'path' );

// NPM
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

app.use( express.static( 'dist' ) );
app.use( bodyParser.json() );

function read_existing_file_content() {

    return new Promise(( resolve, reject ) => {

        fs.readFile(
            path.join( __dirname + '/notes.json' ),
            { encoding: 'utf-8' },
            function( err, data ) {
    
                if( err ) {
    
                    reject( 'ERROR: unable to read file: ' + err );
                }
    
                resolve( data );
            });
    });
}

function write_file_content( fileName, content ) {

    return new Promise(( resolve, reject ) => {

        fs.writeFile( fileName, JSON.stringify( content ), 'utf8', err => {

            if( err ) {
    
                reject( err );
            }

            resolve({ result: 'OK' });
        });
    });
}

app.post( '/note', async( req, res ) => {

    // TODO: validation of note content
    let content = await read_existing_file_content();

    const parsed_content = JSON.parse( content );

    parsed_content.notes.push( req.body );

    const write_result = await write_file_content( __dirname + '/notes.json', parsed_content );

    res.status( 200 );
    res.send( write_result );
});


app.get( '/notes', async( req, res ) => {

    let content = await read_existing_file_content();

    const parsed_content = JSON.parse( content );

    res.send( parsed_content );
});



const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {

    console.log( 'server listening on port *' + PORT );
});
