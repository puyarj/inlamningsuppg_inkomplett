function render_header (parent) {
  // Funktionen tar emot referensen till container-noden för headern.
  // Funktionsanropet finns redan på plats i index.js. Studera argumentet som skickas där.
  // Funktionen skapar de nödvändiga HTML-elementen så att headern ser ut
  // som den på videon: Tre random bilder och texten centrerad.
  
  parent.innerHTML = `
  <div id="first"></div>
  <div id="second"></div>
  <div id="third"></div>
  <div id="text">
    <h1>Utbytesstudier
    <br>
    Missa inte chansen!</h1>
  </div>
  `;

  let headerArray = [first, second, third];

  function headerRandomImg (array) {
    for (let element of array) {
      img = array_random_element(COUNTRIES[get_random_number(COUNTRIES.length, 0)].imagesNormal);
      element.style.backgroundImage = `url(media/geo_images/${img})`;
    }
  }
  
  headerRandomImg (headerArray);

}

//Skapar HTML för headern
//Skapar en array för de tre div:arna och för varje en fylls den med en random bild från media
 
  // Krav:
  // Nyckeln *style* får i denna kod endast användas för att ange bakgrundsbild-filen.
  // Det går dock såklart även att lösa det hela med <img> istället för att ha bilderna
  // som bakgrundsbilder. I så fall får inte nyckeln *style* användas alls i koden här.

  // Glöm inte: Du måste även fylla i header.css så att headern ser ut som den på videon. Se header.css




