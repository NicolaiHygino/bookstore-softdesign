import React, { useState, useEffect } from 'react';
import { 
  Header,
  Grid,
  GridItem,
  Image,
  InfoWrapper,
  Title,
  Price,
  ButtonWrapper,
  Button,
} from './style';

const Dashboard = () => {
  return (
    <>
      <Header>
        <h1>Bookstore</h1>
      </Header>
      <Grid>
        <GridItem>
          <Image />
          <InfoWrapper>
            <Title>This is a Book</Title>
            <Price>$8.99</Price>
            <ButtonWrapper>
              <Button>Rent</Button>
              <Button>Details</Button>
            </ButtonWrapper>
          </InfoWrapper>
        </GridItem>
        <GridItem>
          <Image />
          <InfoWrapper>
            <Title>This is a Book</Title>
            <Price>$8.99</Price>
            <ButtonWrapper>
              <Button>Rent</Button>
              <Button>Details</Button>
            </ButtonWrapper>
          </InfoWrapper>
        </GridItem>
        <GridItem>
          <Image />
          <InfoWrapper>
            <Title>This is a Book</Title>
            <Price>$8.99</Price>
            <ButtonWrapper>
              <Button>Rent</Button>
              <Button>Details</Button>
            </ButtonWrapper>
          </InfoWrapper>
        </GridItem>
        <GridItem>
          <Image />
          <InfoWrapper>
            <Title>This is a Book</Title>
            <Price>$8.99</Price>
            <ButtonWrapper>
              <Button>Rent</Button>
              <Button>Details</Button>
            </ButtonWrapper>
          </InfoWrapper>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
