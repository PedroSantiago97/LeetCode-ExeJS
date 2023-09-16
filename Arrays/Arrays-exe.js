//Exercicio Arrays

//Removendo duplicatas
function containsDuplicate(nums) { 

    const conjuntoUnico = new Set()

    for (const num of nums){
        if (conjuntoUnico.has(num)){
        return true;
        } else {
            conjuntoUnico.add(num);
        }
       
        
    }
    return false;

}

const nums = [1, 2, 3, 1]
const temDuplicata = containsDuplicate(nums);
console.log(temDuplicata)

/* Resumo do código: Foi criada uma função para contar
os valores duplicados da Array. A constante de nome
"conjuntoUnico" foi criada com o parâmetro "new Set(),"
um "for..of" foi ultilizado para executar um "if"
com a condição de: Enquanto a variavel "num" nao tiver
um valor de "nums", verificado pelo parâmetro ".has",
a condicional adiciona o valor da sequência em "num",com
o parâmetro ".add", se o valor que foi adicionar estiver
em "num" e em "nums", retorna "True", do contrario retorna "False" */
    
// new Set(), .add e .has

// new Set() => cria um novo objeto, usado para armazenar valores enquanto executa um comando 
// .add => Adiciona valores em no objeto criado por Set()
// .has => Verifica o determinado valor no objeto criado por Set()


      