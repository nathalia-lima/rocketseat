/*

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/


let family = {
    incomes: [2500, 3200, 25.32, 569.96],
    expenses: [320.34, 128.89, 780],
}

function sum(array){
    let total = 0

    for (let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    let balanceText = "Negativo"

    if (itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)

    
}

calculateBalance()