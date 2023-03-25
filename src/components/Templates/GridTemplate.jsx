import React from 'react';
import { Grid, Box, styled } from '@mui/material';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: "blue",
  height: "15vh",
  display: "flex",
  justifyContent: "center",
  padding: "20px",
}));

const NavBarWrapper = styled(Box)(() => ({
  backgroundColor: "green",
  height: "70vh",
}));

const MainWrapper = styled(Box)(() => ({
  backgroundColor: "red",
  height: "70vh",
  padding: "20px",
  overflow: "auto",
}));

const FooterWrapper = styled(Box)(() => ({
  backgroundColor: "yellow",
  height: "15vh",
  display: "flex",
  alignItems: 'center',
  justifyContent: "center",
  paddingRight: '20px',
}));

export default function GridTemplate({ children }) {
  return (
    <div className="App">

      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        </Grid>
        <Grid item sm={3} md={3} lg={3} display={{ xs: "none", sm: "block" }}>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <MainWrapper>

            {children}

          </MainWrapper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Grid>
      </Grid>
    </div>
  );
}

