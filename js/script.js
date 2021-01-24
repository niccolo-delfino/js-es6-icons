$(document).ready(function functionName() {

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
  const colors = ['blue','orange','purple'];

// VOLEVO SEGUIRE IL RAGIONAMENTO DEGL' INDICI, MA STAVO FACENDO UN DISATRO, GG
// ESTRAPOLO I TIPI PER POTERLI INSERIRE NELLA SELECT
  const types = [];

  icons.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });

// ASSEGNO I COLORI ALLE ICONS
  for (var i = 0; i < icons.length; i++) {
    if (icons[i].type == 'animal') {
      icons[i].color = colors[0];
    } else if (icons[i].type == 'vegetable') {
      icons[i].color = colors[1];
    }else if (icons[i].type == 'user') {
      icons[i].color = colors[2];
    };
    console.log(icons[i]);
  };

// STAMPO LE ICONE
  icons.forEach((element) => {
    const {name, prefix, type, family, color} = element;

    $('.icone').append(
    ` <div class="icona">
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <div class="nome">${name.toUpperCase()}</div>
      </div>`
    );
  });

//AGGIUNGO I VARI TIPI ALLA SELECT
  types.forEach((element) => {
    $('select').append(
      `<option value="${element}">${element}</option>`
    )
  });

//INTERCETTO I TIPO DI SELEZIONE




  // const iconeFiltrate = icons.filter((element) => {
  //   return element.type == selected
  //   console.log(inconeFiltrate);
  // });

  $('select').change(function() {
    var selezionato = $(this).val();
  });
  console.log(selezionato);













});
