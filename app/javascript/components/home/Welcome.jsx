import React, { useState, useEffect } from 'react';
import { Grid, Typography, colors } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const zoomInAnimation = keyframes`${zoomIn}`;

const Title = styled.div`
  animation: 2s ${zoomInAnimation};
`;

const SubTitle = styled.div`
  animation: 1s ${zoomInAnimation};
`;

export const Welcome = () => {
  const [subTitleIn, setSubTitleIn] = useState(false);

  useEffect(() => {
    const enter = setTimeout(() => {
      setSubTitleIn(true);
    }, 2000);

    return () => {
      clearTimeout(enter);
    };
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={10} md={6}>
        <Grid container direction="column">
          <Grid item>
            <Title>
              <Typography
                variant="h3"
                align="center"
                style={{
                  fontWeight: 'bold',
                  color: colors.red.A100,
                  marginTop: 64
                }}
              >
                MAC0218
              </Typography>
            </Title>

            {subTitleIn && (
              <SubTitle>
                <Typography
                  variant="h6"
                  align="center"
                  style={{
                    fontWeight: 'bold',
                    color: colors.grey[900],
                    marginTop: 8
                  }}
                >
                  Crie e pratique para os vestibulares
                </Typography>
              </SubTitle>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
