function fruits() {
    if (true) {
        var fruit1 = 'Apple'; //funtion scope 
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Bannana'; //block scope
        console.log(fruit3);
        console.log(fruit2);
   }

   console.log(fruit1);

   
}

fruits();