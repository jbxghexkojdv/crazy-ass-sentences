const sentences = {
  "english": 
  {
    "beginnings": ["I am less pregnant if I drink", "I threw a chair at", "I am listening to"],
    "endings": ["alcohol", "Donald Trump", "Lena Raine's Labyrithine"],
    "punc": [[".", "!", "?"], ["", "", ""]]
  },
  "spanish":
  {
    "beginnings": ["Estoy menos embarazada si bebo", "Le lancé una silla a", "Estoy escuchando"],
    "endings": ["alcohol", "Donald Trump", "Labyrinthine de Lena Raine"],
    "punc": [[".", "!", "?"], ["", "¡", "¿"]]
  }
};

document.getElementById("sentence").innerHTML = JSON.stringify(sentences);
