// ==> Exemplo 06 - Exemplo de Array com laço de iteração

let linguagensArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagens:string[]) {
          
          for (let i = 0; i < linguagensArray.length; i++) {

            console.log(linguagensArray[i]);
            if (i = 4) {
               i = 0
               }
          }
}
          funcaoLinguagens(linguagensArray);
