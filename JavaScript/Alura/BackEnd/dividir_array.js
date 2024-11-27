//Divida os alunos da sala abaixo em duas listas com a mesma quantidade de estudantes:

const estudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const classeA = estudantes.slice(0, estudantes.length/2);

const classeB = estudantes.slice(estudantes.length/2)

console.log(classeA)


console.log(classeB)