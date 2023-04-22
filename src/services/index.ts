/* eslint-disable import/no-extraneous-dependencies */
import _axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';
const axios = _axios.create({
  baseURL: BASE_URL,
});

export type TCharacter = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
  id: string;
};

type TApiResponseAll = {
  count: number;
  next: string;
  previous: string;
  results: TCharacter[];
};

export const getCharacter = async (code: string) => {
  const res = await axios.get<TCharacter>(`/people/${code}`);

  return res.data;
};
export const getCharactersByPage = async (page: number) => {
  const res = await axios.get<TApiResponseAll>(`/people/?page=${page}`);
  return res.data;
};
