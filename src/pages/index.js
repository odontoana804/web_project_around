import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import { initialCards, cardsListSection } from "../scripts/utils.js";

//Función para cargar las tarjetas creadas desde el arreglo inicial
const cardsList = new Section({
  data: initialCards,
  renderer: (initialCard) => {
    const card = new Card(initialCard, "#card-template", initialCards);
    initialCard.id = card._id;

    const cardElement = card.generateCard();

    cardsList.setItem(cardElement);
    },
  },
  cardsListSection
);

//renderizar las 6 tarjetas iniciales
cardsList.renderItems();
