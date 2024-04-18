
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
    console.log("c'est bon")
  });
  