//Calcula la diferencia de años
export const obtenerDiferenciaYear = (year) => {
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar segun la marca
export const calcularMarca = (marca) => {
    let incremento;
    switch(marca){
        case "europeo": 
        incremento = 1.30; //El 30% de lo que llevemos por eso este valor 
        break;
        
        case "americano": 
        incremento = 1.15;
        break;

        case "asiatico": 
        incremento = 1.05;
        break;

        default:
        break;
    }
    return incremento;
}

//Calcula el tipo de seguro
export const obtenerPlan = (plan) => {
    return (plan === 'basico') ? 1.20 : 1.50;
}

//Muestra la primer letra mayuscula
export const primerMayuscula = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}