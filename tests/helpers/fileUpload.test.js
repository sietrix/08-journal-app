import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({ 
  cloud_name: 'cursos-web', 
  api_key: '165523442811782', 
  api_secret: 'WOjZFxgxKfn-sD9eTUe4w3G7NYI',
  secure: true
});



describe('Pruebas en fileUpload', () => { 
    
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        
        
        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1].replace('.jpg', '');

        await cloudinary.api
            .delete_resources([imageId])
            .then( result => console.log(result) );

    });

    test('debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );

    });



});