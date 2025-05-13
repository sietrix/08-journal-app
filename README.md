# Intalaciones
```
npm i react-router
npm install firebase
npm install sweetalert2
```

# Pruebas
## Instalación y configuracion de Jest + React Testing Library

1. Instalaciones:
```
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react 
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
npm install --save-dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs']
}
```

__jest.setup.cjs__
```
// En caso de necesitar la implementación del FetchAPI
// Ponerlo en la cabezera del archivo de test si no funciona en el archivo jest.setup.cjs
require( 'whatwg-fetch' );
const { TextEncoder } = require('util');
global.TextEncoder = TextEncoder;

// Si te lo pide se instala
const { TextDecoder } = require('util');
global.TextDecoder = TextDecoder;
