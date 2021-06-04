var myIceCream;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
var myStr = myIceCream[2];
function looploop(myIceCream) {
    for (var index = 0; index < myIceCream.length; index++) {
        console.log(myStr);
        if (index = 3) {
            index = 0;
        }
    }
}
looploop(myStr);
