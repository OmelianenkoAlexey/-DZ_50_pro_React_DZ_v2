import React, { useEffect, useState } from "react";
// import MyCards from "../components/Templates/Main/ComponentsMain/MyCards";
import { Box, styled } from '@mui/material';
import { dataCardsServPage } from "../../api";
import { Route, Routes } from "react-router-dom";
import NameNextPage from "./NameNextPage";

// const NextPageWrapper = styled(Box)(() => ({
//     // backgroundColor: "grey",
//     // display: "flex",
//     // flexWrap: "wrap",
//     // gap: "20px",
// }));

export default function NextPage() {

    // const [cardsPageData, setCardsServPage] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const { data } = await dataCardsServPage.fetch();
    //             setCardsServPage(data);
    //             console.log(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     })();

    // }, [])

    return (
<Routes>
<Route path="/:name" element={<NameNextPage />} />

</Routes>

            // <NextPageWrapper>
            //     <h1>TestPage</h1>
            //     {cardsPageData.map(item => (
            //         <h2>{item.firstName}</h2>
            //         // <MyCards
            //         //     key={item.id}
            //         //     cardName={item.firstName}
            //         //     cardImage={item.avatar}
            //         //     cardDescription={item.description}
            //         // />
            //     )
                
            //     )}
            // </NextPageWrapper>


    )
}
