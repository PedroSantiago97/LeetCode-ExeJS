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


      

// Subsequencia


function isSubsequence(s, t){
    let buscadorS = 0;
    let buscadorT = 0;

    while (buscadorS < s.length && buscadorT < t.length){
        if (s[buscadorS] === t[buscadorT]){
            buscadorS++;
        }
        buscadorT++;

    }
    return buscadorS === s.length 

}


console.log(isSubsequence("qet", "qwert"))


/* Resumo do código : Foi criado uma função para verificar
os valores de "t" e "s" e descobrir se são subsequentes. São
criadas duas variáveis, ambas de valor 0 para percorrer os 
valores dos Arrays. No comando While, temos a condição de loop
referente a quantidade de caracteres das strings, com o parametro
".length". Após isso uma condicional "If" para verificar se os 
elementos de "s" são iguais aos elementos de "t" na posição da array 
em que o loop está, por exemplo, no inicio é o 0, entao o primeiro
loop vai mostrar a letra "q" que aparece em ambos, cuja proposição
vai vir como verdadeira. Ademais, é posto um comando de adição
aos valores das variaveis para avançar na pesquisa do array.*/