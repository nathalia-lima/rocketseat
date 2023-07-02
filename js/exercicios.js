//EXERCICIOS

// 1. Declare uma variável de nome weight
   // let weight

// 2. Que tipo de dao é a variável acima?
    //console.log(typeof weight) //resultado undefined

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    *age: Number (integer)
    *stars: Number (float)
    *isSubscribed: Boolean
*/
    /*
    let name = "Nathalia"
    let age = 18
    let stars = 18.11
    let isSubscribed = true
    */

// 4. A variável student abaixo é de que tipo de dado

    //let student = {} 
    //object

    //4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    /*
    let student = {
        name: "Nathalia",
        age: 18,
        stars: 18.11,
        isSubscribed: true
    }
    */

    /*4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight>kg 
        pelos valores de cada propriedade do objeto
    */
        /*
        let student = {
            name: "Nathalia",
            age: 18,
            weight: 68.6
        }

        console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`)
        */

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

    // let students = []

// 6. Retribua valor para a variável acima colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
     
    /*
    let student = {
        name: "Nathalia",
        age: 18,
        weight: 68.6
    }

    let students = []

    students = [
        student
    ]

    console.log(students)
    */

// 7. Coloque no console o valor da posição zero do Array acima

    //console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students
    /*
    let student = {
        name: "Nathalia",
        age: 18,
        weight: 68.6
    }

    let students = []
    students[1] = student

    console.log(students[1])
    */

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a) //undefined
    var a = 1 
    
    //aq acontece o efeito hoisting, onde o navegador leria o código assim:
        var a    
        console.log(a) //undefined
        var a = 1
    ou seja utilizando var, ele maio que sobe e já lê que existe uma variável no código, diferente de usar o let como abaixo, onde aparecia erro no lugar de undefined:
        console.log(a)
        let a = 1 

*/