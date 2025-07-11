let email = prompt("¡NO TE PIERDAS NUESTRAS PROMOS EXCLUSIVAS!\nDejanos tu mail y te enviamos las mejores ofertas.\nCero spam, sólo cosas lindas :)");


while (
  email === null || 
  !email.includes("@") || 
  !email.includes(".")
) {
 
  if (email === null) {
    alert("Operación cancelada.");
    break;
  }

  
  email = prompt(" Por favor, ingresá un mail válido para continuar.\nEjemplo: persona@mail.com");
}


if (email !== null) {
  alert(" ¡Gracias! Te vamos a mandar nuestras promos a " + email);
}

let estacion = prompt("¿En qué estación del año estás? (primavera, verano, otoño, invierno)");

switch (estacion.toLowerCase()) {
  case "primavera":
    alert("Primavera: Es la mejor época para sembrar. Las plantas crecen con fuerza.");
    break;
  case "verano":
    alert("Verano: Regá con más frecuencia y protegé las plantas del sol directo.");
    break;
  case "otoño":
    alert("Otoño: Buen momento para trasplantar y preparar el suelo para el invierno.");
    break;
  case "invierno":
    alert("Invierno: Reducí el riego y protegé las plantas del frío.");
    break;
  default:
    alert("Esa estación no la reconozco. Probá escribiendo primavera, verano, otoño o invierno.");
}