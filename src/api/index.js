import axios from './service';

const dataCardsServ = {
  fetch: () => axios.get('/react').then((data) => data),
};

// const dataCardsServPage = {
//     fetch: () => axios.get('/reactPage').then(data => data),
// };

const dataCardsServPage = {
  fetch: (nameQuiz) => axios.get(`${nameQuiz}`).then((data) => data),
};

export { dataCardsServ, dataCardsServPage };
