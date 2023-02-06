const tabelaPrincipal = document.querySelector("#tabela-principal")
const datas  = [
  {
    funcionario: "Vitoria da Cruz",
    matricula: "010203",
    setor: "Eletronico",
    comissao: 5,
    vendas: [
      {
        data: "03/02/2023",
        valor: 1250.0,
      },
      {
        data: "03/02/2023",
        valor: 899.0,
      },
      {
        data: "04/02/2023",
        valor: 5999.9,
      },
    ],
  },
  {
    funcionario: "Cecilia Martins",
    matricula: "124576",
    setor: "Eletronico",
    comissao: 5,
    vendas: [
      {
        data: "15/01/2023",
        valor: 3290.9,
      },
      {
        data: "16/01/2023",
        valor: 1320.99,
      },
      {
        data: "16/02/2023",
        valor: 990.9,
      },
    ],
  },
  {
    funcionario: "Joaquim Souza",
    matricula: "124578",
    setor: "Moveis",
    comissao: 12,
    vendas: [
      {
        data: "08/01/2023",
        valor: 4500.0,
      },
      {
        data: "08/01/2023",
        valor: 599.99,
      },
      {
        data: "09/01/2023",
        valor: 259.9,
      },
    ],
  },
];

let valorTotal = 0;
var comissao = 0; 

datas.forEach((datas) => {
  let tr = document.createElement("tr");

  let tdMatricula = document.createElement("td");
  tdMatricula.innerHTML = datas.matricula;

  let tdFuncionario = document.createElement("td");
  tdFuncionario.innerHTML = datas.funcionario;

  let tdSetor =  document.createElement("td");
  tdSetor.innerHTML = datas.setor; 
  
  let tdTotalVenda = document.createElement("td");
  tdTotalVenda.innerHTML = "R$ " + comissao.toFixed(2);

  let tdComissao =  document.createElement("td");
  tdComissao.innerHTML = "R$ " + comissao.toFixed(2);

//Aqui está fazendo o valor total da comissão... 

for(let i = 0; i < datas.vendas.length;i++){
  valorTotal = valorTotal + datas.vendas[i].valor;
  comissao = valorTotal * (datas.comissao / 100);
} 

//Mostrando o total da venda...
let tdTotalVendas = document.createElement("td");
tdTotalVenda.innerHTML =  "R$" + valorTotal.toFixed(2);

tabelaPrincipal.appendChild(tr);
tr.appendChild(tdMatricula);
tr.appendChild(tdFuncionario);
tr.appendChild(tdSetor);
tr.appendChild(tdComissao);
tr.appendChild(tdTotalVendas);
valorTotal = 0;
}) 

//Criando um formulário ...
const formulario = document.createElement("form");

const inputFuncionario = document.createElement("input");
inputFuncionario.setAttribute("type", "text");
inputFuncionario.setAttribute("placeholder", "Nome do funcionário");
inputFuncionario.setAttribute("id", "input-funcionario");
formulario.appendChild(inputFuncionario);

const inputMatricula = document.createElement("input");
inputMatricula.setAttribute("type", "text");
inputMatricula.setAttribute("placeholder", "Matricula");
inputMatricula.setAttribute("id", "input-matricula");
formulario.appendChild(inputMatricula);

const inputSetor = document.createElement("input");
inputSetor.setAttribute("type", "text");
inputSetor.setAttribute("placeholder", "Setor");
inputSetor.setAttribute("id", "input-setor");
formulario.appendChild(inputSetor);

const inputComissao = document.createElement("input");
inputComissao.setAttribute("type", "text");
inputComissao.setAttribute("placeholder", "Comissão");
inputComissao.setAttribute("id", "input-comissao");
formulario.appendChild(inputComissao);

const botao = document.createElement("button");
botao.innerHTML = "Adicionar";
botao.setAttribute("id", "botao-adicionar");
formulario.appendChild(botao);

document.body.appendChild(formulario);

botao.addEventListener("click", function(evento) {
  evento.preventDefault();
  const novoFuncionario = {
    funcionario: inputFuncionario.value,
    matricula: inputMatricula.value,
    setor: inputSetor.value,
    comissao: parseFloat(inputComissao.value),
    vendas: [],
  };
  datas.push(novoFuncionario);
  const tr = document.createElement("tr");

  const tdMatricula = document.createElement("td");
  tdMatricula.innerHTML = novoFuncionario.matricula;
});


