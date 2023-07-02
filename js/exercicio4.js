/*

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/


function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //fluxo F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo C -> F
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 +32
        degreeSign = 'F'
    }

    return formula (updateDegree) + degreeSign
}

try{
    console.log(transformDegree('50F'))

}catch(error){
    console.log(error)
    //console.log(error.message) se estiver assim ele só mostra a mensagem q vc descreveu, só com o 'error' ele mostra o local onde está o erro, em qual linha
}

