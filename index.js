var clientes = [
  {
    id: 1,
    nome: "Rogério Lucas",
    sobrenome: "Silva",
    idade: 30,
    contato: "4002-8922",
  },
  {
    id: 2,
    nome: "Roberto Carlos",
    sobrenome: "Braga",
    idade: 70,
    contato: "(11) 9 1111-1111",
  },
  {
    id: 3,
    nome: "Sylvester",
    sobrenome: "Stallone",
    idade: 80,
    contato: "(22) 9 2222-2222",
  },
];

function adicionarCliente(id, nome, sobrenome, idade, contato) {
  clientes.push({
    id: 4,
    nome: "Victor",
    sobrenome: "Ribeiro",
    idade: 20,
    contato: "(33) 9 3333-3333",
  });
}

adicionarCliente(4, "Victor", "Ribeiro", 20, "(33) 9 3333-3333");
console.log(clientes);
