function calculateEngravingPrice(message, pricePerWord) {
  const title = message.split(" ");
  const priceTotal = title.length * pricePerWord;
  return title;
}


console.log(calculateEngravingPrice("Web-development is creative work", 20));