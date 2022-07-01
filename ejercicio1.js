let btnClick = document.querySelector('#btn-click');

btnClick.addEventListener('click', () => paracadena());

function  paracadena() {  
  let error = document.querySelector('#error-nombre');
  error.textContent = '';
  
  let cadena = document.querySelector("#cadena").value;
  
  if (cadena.length == 0) {    
    error.textContent = 'Ingrese por favor un texto';
  }
  else{
	error.textContent = '';  
	let seleccion = document.querySelector('#consignas').value;
    switch(seleccion) {    
      case 'consigna1':
        // Mostrar las dos primeras letras.
	 alert('Las dos primeras letras son: ' + cadena.substr(0,2));
        break;
      case 'consigna2':
        // Mostrar las tres primeras letras.
    alert('Las tres primeras letras son: ' + cadena.substr(0,3));
        break;
      case 'consigna3':
        // Mostrar las dos últimas letras.
    alert('Las dos últimas letras son: ' + cadena.substr(cadena.length -2 ,2));
        break;
      case 'consigna4':
        // Mostrar su última letra.
    alert('La última letra es: ' + cadena.substr(cadena.length -1 ,1));
        break;
    }
  }  
}