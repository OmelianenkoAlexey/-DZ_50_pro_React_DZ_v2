import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataCardsServPage } from "../../api";
import { Box, styled } from '@mui/material';
// можно так переименовать принятый (импортируемый) компонент
// import { dataCardsServPage as dataCardsServPageApi } from "../../api";

const NextPageWrapper = styled(Box)(() => ({
    // backgroundColor: "grey",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
}));


export default function NameNextPage() {
    const { name } = useParams();
    console.log(name);

    const [loading, setLoading] = useState(true);

    const [dataSerPage, setDataSerPage] = useState([]);

    useEffect(() => {
        // самовызывающая функция
        (async () => {
            try {
                const { data } = await dataCardsServPage.fetch(name);
                console.log(data);
                setDataSerPage(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        })();

    }, []);

    console.log(dataSerPage);
    // можно в mui найти прокрутку во время ожидания
    if (loading) return <>Loading...</>

    return (
            <NextPageWrapper>
                {dataSerPage.map(item => (
                    <div style={{ border: '3px solid black',
                    maxWidth: '300px',
                    padding: '10px',
                     }}>
                        <h2>{item.name}</h2>
                        <img src={item.avatar} alt="" />
                        <div>{item.description}</div>
                    </div>
                ))}
            </NextPageWrapper>
    );
}