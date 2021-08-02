import './styles.css';

const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {
  // Deler opp teksten for hvert mellomrom slik at vi får en liste
  const textAsArray = text.split(' ');
  // Setter første ord til å være det lengste så vi har noe å sammenlikne med
  let longestWord = textAsArray[0];
  // Looper over alle ordene. Sjekker om ordet er lengre enn nåværende lengste ord. Hvis lengre oppdaterer vi lengste ord, hvis ikke brukes det ordet vi har
  textAsArray.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};

console.log(longestWord());
