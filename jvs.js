
let vendas = [120, 200, 120, 350, 200, 500];


let vendasSemDuplicatas = [...new Set(vendas)];

let vendasFiltradas = vendasSemDuplicatas.filter(venda => venda > 150);


let totalVendas = vendasFiltradas.reduce((acumulador, venda) => acumulador + venda, 0);


let cloneVendas = [...vendas];


console.log("Array original:", vendas);
console.log("Array sem duplicatas:", vendasSemDuplicatas);
console.log("Array filtrado (acima de 150):", vendasFiltradas);
console.log("Total das vendas filtradas:", totalVendas);
console.log("Clone do array original:", cloneVendas);