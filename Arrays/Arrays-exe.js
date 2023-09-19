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

// Subsequencia (Com for...of)

function isSubsequence(s, t) {
    let buscadorS = 0;
    for (const charT of t) {
      if (s[buscadorS] === charT) {
        buscadorS++;
      }
      if (buscadorS === s.length) {
        break; // Se encontrarmos todos os caracteres de s, podemos sair do loop.
      }
    }
    return buscadorS === s.length;
  }
  
  console.log(isSubsequence("qet", "qwert")); // Deve retornar true
  



//Anagrama

function isAnagram(s, t){

    if(s.length != t.length){
        return false; // Se as cadeias tiverem comprimentos diferentes, elas não podem ser anagramas.
    }

    // Converte as duas cadeias para minúsculas    
    s = s.toLowerCase();
    t = t.toLowerCase();
    
    // Preenche o objeto de contagem para a cadeia s.
    const charCount = {};

    for (let char of s){
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Verifica a contagem de caracteres na cadeia t.
    for (let char of t){
        if (!charCount[char]){
            return false; // Se um caractere em t não estiver em s, não é um anagrama.
        }
        charCount[char]--;
    }

    // Se a contagem se tornar negativa, significa que há caracteres extras em t
    if (charCount < 0 ){
        return false;
    }

    return true;
}

console.log(isAnagram("accc", "ccac"));
console.log(isAnagram("banana", "Maça"));


// Concatenação


// Definimos uma função chamada "getConcatenation" que recebe como argumento o array "nums".
function getConcatenation(nums) {
    // Determinamos o comprimento do array "nums" e armazenamos em "n".
    const n = nums.length;
    // Criamos um novo array "ans" com o dobro do tamanho de "nums".
    const ans = new Array(2 * n); //Minha cama
    // Usamos um loop "for" para iterar sobre os elementos de "nums".
    for (let i = 0; i < n; i++) {
        // Copiamos o elemento atual de "nums" para a primeira metade de "ans".
        ans[i] = nums[i];
        // Copiamos o mesmo elemento de "nums" para a segunda metade de "ans".
        // Para isso, usamos "i + n" como índice para garantir que os elementos sejam copiados na segunda metade da Array criada.
        ans[i + n] = nums[i]; 
    }
    // Retornamos o array "ans" que foi criado conforme as especificações do exercício.
    return ans;
  }
  
  // Exemplo de uso:
  const nums1 = [1, 2, 3];
  const ans = getConcatenation(nums1);
  console.log(ans); 
  
