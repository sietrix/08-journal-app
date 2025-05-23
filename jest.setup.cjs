// En caso de necesitar la implementación del FetchAPI
// Ponerlo en la cabezera del archivo de test si no funciona en el archivo jest.setup.cjs
require( 'whatwg-fetch' );
const { TextEncoder } = require('util');
global.TextEncoder = TextEncoder;

// Si te lo pide se instala
const { TextDecoder } = require('util');
global.TextDecoder = TextDecoder;


require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));
