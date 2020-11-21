// Objetos vs JSON

/* 
JSON => JavaScript Object Notation
*/

// 22: 30

const curso = {
    nome: 'Programaçao em JavaScript',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

// console.log(curso);
// console.log(curso.preco());
// console.log(typeof(curso)); // object

// Convertando o objeto JavaScript para JSON

const json = JSON.stringify(curso);

console.log(json);
console.log(typeof(json)); // string

// Convertendo de JSON para object JavaScript

const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));

//const json_errado = "{'nome': 'Programaçao em javascript', 'preco': 20.22}"; 

const json_corrigido = '{"nome": "Programaçao em javascript", "preco": 20.22}'; 
 console.log(json_corrigido);
 console.log(typeof(json_corrigido));

const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj); 
console.log(typeof(novo_obj));