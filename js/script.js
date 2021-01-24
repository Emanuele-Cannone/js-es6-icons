// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.
// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato(animal, vegetable, icon).
// Filtrare i risultati in base alla categoria(ricordate di svuotare il container).
// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.


$(document).ready(function(){
    const icons = [
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
        }
    ];
   
    const color = ['blue', 'orange', 'violet'];

    // crea un array prendendo il type degli oggetti -- mi serve che mi restituisca 1 sola volta i vari tipi
    
    const typeIcons = takeTypes(icons);
    console.log(typeIcons);

    // aggiungi la proprietà colore negli oggetti di icons
    const addColori = icons.map((element, index)    =>  {  //in questo modo aggiungo una nuova proprietà negli oggetti dell'array icons 
    
    
        // IN QUESTO MODO AGGIUNGO LA STESSA A TUTTI        
        //     return  {...element, 
        //             colore : 'colore1'}; 
        // });


        // PRENDO L'INDEX DELL'ARRAY COLORI E LO ASSEGNO A CASCATA

        const indexMaledetto = typeIcons.indexOf((element.type)); //prendo gli index di tipo di icone

        return {...element, // pusho ad ogni oggetto 
            colore: color[indexMaledetto] // colore : l'index crescente per ogni differente elemento TYPE
        };
        
    });
        

    // console.log(addColori);

    // inserisci i type nelle option per farli visualizzare nel select

    typeIcons.forEach((element)=>{

        $('#selettore').append(
            `
                <option value="${element}">${element}</option>
            `
        );

    });
    
    // fai in modo che quando viene selezionato un selettore per ogni type vengano visualizzate in HTML icone dello stesso tipo 

    let riferimentoHTML = $('.contenitore');
    stampa(addColori, riferimentoHTML);
   
    
    $('#selettore').change(function (){
        let riferimentoHTML = $('.contenitore');
        const tipoSelezionato = $(this).val();
        // const iconePerTipo = addColori.filter((element, type) =>  {
        //     return element.type == tipoSelezionato;
        // });
        // if (tipoSelezionato != 'All'){
        //     alert('sei nell\'if');
        //     stampa(addColori, riferimentoHTML);
        // }
        // stampa(iconePerTipo, riferimentoHTML);

        const selezioneFiltrata = filtroIcone(addColori, tipoSelezionato);

        
        stampa(selezioneFiltrata, riferimentoHTML);
        
    });
    



});



// funzioni

function takeTypes(array){

    const arrayNuovo = [];

    array.forEach((element) => { // per ogni oggetto presente in icons
        if (!arrayNuovo.includes(element.type)){ // se il type in (type dell'array icons) non è incluso nell'array typeIcone
            arrayNuovo.push(element.type); // allora pushalo
        };
    });

    return arrayNuovo;
};


function stampa(array, riferimentoHTML){
    riferimentoHTML.html('');
    array.forEach((element) => {// prendi l'array addColori perchè la proprietà colore esiste solo in questo array


        const { family, prefix, name, colore } = element;// in questo modo vado a destrutturare gli oggetti dell'array per prendermi direttamente le opzioni


        riferimentoHTML.append(

            `
                <div class="riquadro">
                    <i class="${family} ${prefix}${name} ${colore}"></i>
                    <p>${name}</p>
                </div>
            `

        );

    });
};

function filtroIcone(array, type){
    const nuovoArray = array.filter((element)=>{

        return element.type == type;

    });
    if (nuovoArray.length > 0){
        return nuovoArray;
    } 
    return array;
    
};

