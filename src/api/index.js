import axios from "./service";

const dataCardsServ = {
    fetch: () => axios.get("/react").then(data => data),
};

export { dataCardsServ };