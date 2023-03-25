import React, { useEffect, useState } from "react";
import MyCards from "../components/Templates/Main/ComponentsMain/MyCards";
import { Box, styled } from '@mui/material';
import { dataCardsServ } from "../api";

const FirstPageWrapper = styled(Box)(() => ({
    // backgroundColor: "grey",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
}));

export default function FirstPage() {

    const [cardsData, setCardsServ] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await dataCardsServ.fetch();
                setCardsServ(data);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        })();

    }, [])

    return (
            <FirstPageWrapper>
                {cardsData.map(item => (
                    <MyCards
                        key={item.id}
                        cardName={item.firstName}
                        cardImage={item.avatar}
                        cardDescription={item.description}
                    />
                ))}
            </FirstPageWrapper>
    )
}
