// let student = prompt("Qual o nome do(a) aluno(a)?")
// let note1 = prompt("Qual a nota da primeira prova?")
// let note2 = prompt("Qual a nota da segunda prova?")

// let average = (Number(note1) + Number(note2)) / 2

// let result = average >=7
// average = average.toFixed(2)

// if (result){
// alert(`A média do aluno(a) ${student} foi de ${average} pontos.
// Parabéns, ${student}! Você foi aprovado(a) no concurso!`)
// } else {
//   alert(`A média do aluno(a) ${student} foi de ${average} pontos.
// Não foi dessa vez, ${student}! Estude mais e tente novamente!`)
// }

// OU 

const students = [
  {
  name: "João",
  note1: 3,
  note2: 5,
},
  {
  name: "Maria",
  note1: 5,
  note2: 8,
},
  {
  name: "Sérgio",
  note1: 9,
  note2: 8,
},
  {
  name: "Carlos",
  note1: 4,
  note2: 10,
},
]

let studentsAprovveds = []

for (let student of students) {
  let average = (student.note1 + student.note2) / 2
  
  if (average >= 7 ) {
alert(`A média do aluno(a) ${student.name} foi de ${average} pontos.
Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
} else {
  alert(`A média do aluno(a) ${student.name} foi de ${average} pontos.
Não foi dessa vez, ${student.name}! Estude mais e tente novamente!`)
}
}

