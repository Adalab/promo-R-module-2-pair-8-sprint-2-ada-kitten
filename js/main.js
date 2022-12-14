'use strict';


/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');

//Objetos con cada gatito
const kittenData_1 = {
    image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    name: "Anastacio",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_2 = {
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
    name: "Fiona",
    desc: "Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_3 = {
    image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
    name: "Cielo",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};

//let kittenDataList = [kittenData_1, kittenData_2, kittenData_3]; //lo comentamos para traer la información de los gatitos desde el servidor "fetch"

//Funciones
function renderKitten(kittenData) {
    const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
    return kitten;
}

function renderKittenList(kittenDataListparametre) {
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataListparametre) { 
        listElement.innerHTML += renderKitten(kittenItem);
    }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
    newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
    newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newFormElement.classList.contains('collapsed')) {
        showNewCatForm();
    } else {
        hideNewCatForm();
    }
}

//Adicionar nuevo gatito



function addNewKitten(event) {
    event.preventDefault();
    let valueDesc = inputDesc.value;
    let valuePhoto = inputPhoto.value;
    let valueName = inputName.value;
    let valueRace = inputRace.value;
    
    const newKittenDataObject = {
        image: valuePhoto,
        name: valueName,
        desc: valueDesc,
        race: valueRace
    };

    if (valueDesc === "" && valuePhoto === "" && valueName === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
            labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
            kittenDataList.push(newKittenDataObject); 
            renderKittenList(kittenDataList);
            inputDesc.value = "";
            inputPhoto.value = "";
            inputName.value = "";
            inputRace.value = "";
        }
    };

}





//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
}

//Filtrar por descripción
/*function filterKitten(event) {
    event.preventDefault();
    // const descrSearchText = input_search_desc.value;
    listElement.innerHTML = "";
    const filterKittens = kittenDataList.filter((kittenItem) => kittenItem.desc.includes(input_search_desc.value));
    console.log(filterKittens);
    for (const kittenItem of filterKittens) {
        listElement.innerHTML += renderKitten(kittenItem);
    }
}*/


//Filtrar por descripción y raza

function filterKitten(event) {
    event.preventDefault();
    // const descrSearchText = input_search_desc.value;
    listElement.innerHTML = "";
    const filterKittens = kittenDataList
        .filter((kittenItem) => kittenItem.desc.includes(input_search_desc.value))
        .filter((kittenItem) => kittenItem.race.includes(input_search_race.value));
    console.log(filterKittens);
        for (const kittenItem of filterKittens) {
            listElement.innerHTML += renderKitten(kittenItem);
        }
    }

//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);

//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);
searchButton.addEventListener("click", filterKitten);
buttonAdd.addEventListener("click", addNewKitten);
buttonCancelForm.addEventListener("click", cancelNewKitten);

//Agregar un nuevo gatito al listado (clase arrays y bucles 2)








