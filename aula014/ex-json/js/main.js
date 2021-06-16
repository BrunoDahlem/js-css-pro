var texto = '[{"nome" : "TV"}]'

console.log(texto);

var obj = JSON.parse(texto);

console.log(obj);

var carros = [
    {
        "nome":"Prisma",
        "ano": 2015
    },
    {
        "nome":"Celta",
        "ano": 2012
    }
]

console.log(carros);

var carrosString = JSON.stringify(carros);
console.log(carrosString);