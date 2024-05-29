import { Card } from "./Card.js";
import { cardsContainer, initialCards } from "./utils.js";


//Función para cargar las tarjetas creadas desde el arreglo inicial
(function loadCards() {
  cardsContainer.innerHTML = "";
  initialCards.forEach((initialCard) => {
    const card = new Card(initialCard, "#card-template", initialCards)
    initialCard.id = card._id
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
  });
})();