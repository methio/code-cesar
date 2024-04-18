/* Version for Each 
bug : pas de possibilité d'encoder une seconde fois 
function chiffrage(mot) {
    const alphabet ="abcdefghijklmnopqrstuvwxyz" 
    let motChiffre = "" //variable vide qui permettra de stocker le mot une fois chifré 
    let arraymot=mot.trim()         // enlève les espaces avant et après
                    .split('')      // range chaque lettre dans un tableau
                    .filter((lettre) => lettre != " "); // enlève les espaces du tableau
    
    arraymot.forEach(lettre => { //je boucle sur mon tableau de lettre
      
      let indexnouvelleLettre =alphabet.indexOf(lettre)+1 // je récupére l'index de la lettre actuelle dans l'alphabet et j'ajoute un . Je stocke ca dans une variable
      console.log(`ancienne lettre : ${lettre}, nouvelle lettre: ${alphabet[indexnouvelleLettre]}`) // je créer un commentaire avec l'ancienne lettre et l'ancienne lettre +1
    
      motChiffre += alphabet[indexnouvelleLettre].toLocaleUpperCase(); // j'enregistre la nouvelle lettre dans ma variable mot chiffré
      return motChiffre;
    });
    
    console.log(motChiffre) // je console mon mot chiffré 
    document.querySelector("#box").innerHTML += 
    `<p class="blue"><span>${motChiffre}</span> </p> `
    
  }
  
  const button = document.querySelector('#myButton');
  
  button.addEventListener('click', function(event) {
    console.log(event);
    // Récupérer le contenu de l'input
    let inputValue = document.querySelector('#myInput').value;
    //setTimeout(function() { inputValue = ''; }, 5000);
    chiffrage(inputValue);
  });
  
  */


/*
function chiffrageMot(mot) {
  //role : Encoder un mot
  //parametre : le mot à encoder 

      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      let motChiffre = ""; //variable vide qui permettra de stocker le mot une fois chiffré

    for (i=0; i<mot.length; i++) {

        if (mot[i]== " ") {
              motChiffre+=" ";
        } 
         else {
              let pos = alphabet.indexOf(mot[i]);
              let posLettreSuivante = pos + 1;

              if (posLettreSuivante === alphabet.length) {
                // on revient a A
                posLettreSuivante = 0;
              }
              
              motChiffre += alphabet[posLettreSuivante].toLocaleUpperCase();
              //console.log(motChiffre)
        }
        
    }
    document.querySelector("#box").innerHTML += 
`<p class="blue"><span>${motChiffre}</span> </p> `
    return motChiffre;  
    
}



  const button = document.querySelector('#myButton');
  
  button.addEventListener('click', function(event) {
    console.log(event);
    // Récupérer le contenu de l'input
    let inputValue = document.querySelector('#myInput').value;
    
    chiffrageMot(inputValue);

  });
  
  */

  const chiffrage = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let mcode = "";

    let message = document.querySelector('#myInput').value;   // get value
    message = message.toLowerCase();                          // value to lowercase
    message = [...message].filter( (char) => char != " ");    // remove spaces + create array from string

    message.forEach((char, index) => {                         
        const pos = alphabet.indexOf(char);
        const nextPos = pos+1 < alphabet.length ? pos+1 : 0;  // ternaire
        mcode += alphabet[nextPos].toUpperCase();
    });
    return mcode
  }

  const button = document.querySelector('#myButton');
  
  document.addEventListener("keypress", function(event) {    
    if (event.key === "Enter") {

      console.log(chiffrage())
      const destination = document.querySelector('#motcode');
      destination.innerHTML = chiffrage();
    }
  });




  