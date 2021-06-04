interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];

function looploop(myIceCream:string) {
    for (let index = 0; index < myIceCream.length; index++){

        console.log(myStr);

            if (index = 3) {
                index = 0
               }
    }
}

     
looploop(myStr)


//Esse ainda não esta fazendo o que gostaria.... estamos aprendendo