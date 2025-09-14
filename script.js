const compliments = [
  "Du ser nydlig ut idag♡",
  "Har noen sagt hvor bra person du er? Eller må jeg gjøre det igjen?",
  "Du ser litt søt ut når du prøver skjule at du scanner denne QR koden.",
  "Din positivitet er inspirerende.",
  "Du er flink til å få andre til å føle seg bra.",
  "Du er unik ♡",
  "Psykisk helse er viktig, så lite kan endre en hel dag for en person.",
  "Du stråler idag ♡."
];

function getRandomCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

document.getElementById('compliment-text').innerText = getRandomCompliment();