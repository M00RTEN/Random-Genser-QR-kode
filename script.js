const compliments = [
  "Du ser nydlig ut idag♡",
  "Har noen sagt hvor bra person du er? For det er du♡",
  "Du ser litt søt ut når du prøver skjule at du scanner denne QR koden ♡",
  "Din positivitet er inspirerende♡",
  "Du er flink til å få andre til å føle seg bra♡",
  "Du er unik ♡",
  "Et hei fra deg kan være nok for og gi en person mer håp♡",
  "Du er godtnok ♡",
  "Du stråler idag ♡"
  "M00RTEN på sosiale medier, refresh nettsiden for positivitet♡"
];

function getRandomCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

document.getElementById('compliment-text').innerText = getRandomCompliment();