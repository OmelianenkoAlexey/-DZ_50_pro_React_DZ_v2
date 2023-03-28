import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { dataCardsServPage } from '../../api';
// можно так переименовать принятый (импортируемый) компонент
// import { dataCardsServPage as dataCardsServPageApi } from '../../api';

// import LoadingPage from './LoadingPage';

const NextPageWrapper = styled(Box)(() => ({
  // backgroundColor: 'grey',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
}));

export default function NameNextPage() {
  const { name } = useParams();

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [dataSerPage, setDataSerPage] = useState([]);

  useEffect(() => {
    // самовызывающая функция
    (async () => {
      try {
        const { data } = await dataCardsServPage.fetch(name);
        setDataSerPage(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // можно в mui найти прокрутку во время ожидания
  if (loading) return <>Loading...</>;
  // if (loading) return <LoadingPage />

  if (error) return <>Page in progress...</>;

  return (
    <NextPageWrapper>
      {dataSerPage.map((item) => (
        <div key={item.id} style={{
          border: '3px solid black',
          maxWidth: '300px',
          padding: '10px',
          backgroundColor: 'grey',
        }}>
          <h2>{item.name}</h2>
          <img src={item.avatar} alt='' />
          <div>{item.description}</div>
        </div>
      ))}
    </NextPageWrapper>
  );
}
