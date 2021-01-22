// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.
// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato(animal, vegetable, icon).
// Filtrare i risultati in base alla categoria(ricordate di svuotare il container).
// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.


$(document).ready(function(){
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        }
    ];

    // crea un array prendendo il type degli oggetti -- mi serve che mi restituisca 1 sola volta i vari tipi

    const typeIcone = [];
    

    icons.forEach((element, type) => { // per ogni oggetto presente in icons
        if (!typeIcone.includes(element.type)){ // se il type in (type dell'array icons) non è incluso nell'array typeIcone
            typeIcone.push(element.type); // allora pushalo
        };
    });


    // console.log(typeIcone);// vedi se non esplode il mondo



    const addColore = icons.map((element, index) => { // cosi creo un nuovo array aggiungendo la proprietà che mi interessa
        let tipoColore = 'blue';
        if ( element.type == 'vegetable'){
            tipoColore = 'orange'
        } else if (element.type == 'user'){
            tipoColore = 'viola'
        }// cosi decido quale colore inserirein ogni oggetto
        return {...element, 
            colore: tipoColore
        };
    });

    // console.log(addColore);// cosi vedo tutto

    const posizioneHtml = $('.contenitore');// in questo modo salvo la posizione dell'html in una const in modo da poterla riutilizzare
    
    addColore.forEach((element)=> { // per ogni elemento dell'array

        const {family, prefix, name, colore} = element; //prendi queste proprietà
    
        // console.log(element);// vedi se è vero

        posizioneHtml.append( // aggiungi il testo alla posizione html (posizioneHtml)
            `
            <div class="riquadro">
                <i class="${family} ${prefix}${name} ${colore}"></i>
                <p>${name}</p>
            </div>
            `
        );

    });

    
    // in questo modo aggiungo le voci che mi interessano nel selettore
    $('#selettore').append(`
    <option value="${typeIcone[0]}">${typeIcone[0]}</option>
    <option value="${typeIcone[1]}">${typeIcone[1]}</option>
    <option value="${typeIcone[2]}">${typeIcone[2]}</option>
    `);
    

    

























});


function stampo(array){ 
    return 

};