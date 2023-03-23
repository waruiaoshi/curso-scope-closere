function greeting() {
    let userName = 'elkin';

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g); //retorna la definición de la función
console.log(g()); //retorna el valor de la ejecución en los contextos