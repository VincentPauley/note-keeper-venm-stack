require( 'dotenv' ).config();

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

app.use( express.static( 'dist' ) );
app.use( bodyParser.json() );

app.post( '/note', ( req, res ) => {

    console.log( req.body );
    
    res.status( 200 );
    res.send({ result: 'received' });
});




const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {

    console.log( 'server listening on port *' + PORT );
});
