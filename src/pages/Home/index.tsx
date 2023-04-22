import React, { useEffect } from 'react';

import { Card, Grid, Pagination, Skeleton, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  charactersActions,
  charactersAsyncThunk,
  charactersSelectors,
} from '../../store/modules/characters';

const MAX_PER_PAGE = 10;

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const characters = useAppSelector(charactersSelectors.selectAll);
  const charactersInfo = useAppSelector((states) => states.characters);

  useEffect(() => {
    dispatch(charactersAsyncThunk.getCharactersByPage(charactersInfo.page));
  }, [charactersInfo.page]);

  const handleChangePage = (_: React.ChangeEvent<unknown>, page: number) => {
    console.log(page);

    dispatch(charactersActions.changePage(page));
  };

  const totalPages = () => {
    // total inteiro mais 1 para o resto
    const int = Math.floor(charactersInfo.totalCharacters / MAX_PER_PAGE);
    const rest = charactersInfo.totalCharacters % MAX_PER_PAGE;
    return int + (rest > 0 ? 1 : 0);
  };

  return (
    <Grid container spacing={2} paddingX={2}>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          Swapi
        </Typography>
        {charactersInfo.loading ? null : (
          <Pagination
            count={totalPages()}
            page={charactersInfo.page}
            onChange={handleChangePage}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        )}
      </Grid>
      {charactersInfo.loading ? (
        <Grid item container spacing={2} justifyContent="center">
          {Array.from(new Array(4)).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  padding: '1rem',
                }}
              >
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="20%" />
                <Skeleton variant="text" width="50%" />
                <Skeleton variant="text" width="20%" />
                <Skeleton variant="text" width="50%" />
                <Skeleton variant="text" width="60%" />
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid item container spacing={2} justifyContent="center">
          {characters.map((character) => (
            <Grid item xs={12} sm={6} md={4} key={character.name}>
              <Card
                onClick={() => navigate(`/character/${character.id}`)}
                elevation={2}
                sx={{
                  padding: '1rem',
                  textDecoration: 'none',
                  cursor: 'pointer',

                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                <Typography variant="h5">Nome: {character.name}</Typography>
                <Typography variant="body1">
                  Altura: {character.height}
                </Typography>
                <Typography variant="body1">
                  Cor do cabelo: {character.hair_color}
                </Typography>
                <Typography variant="body1">Peso: {character.mass}</Typography>
                <Typography variant="body1">
                  Cor dos olhos: {character.eye_color}
                </Typography>
                <Typography variant="body1">
                  Ano de nascimento: {character.birth_year}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};
