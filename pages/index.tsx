import { GetStaticProps, NextPage } from 'next';
import { Inter } from 'next/font/google'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { Layout } from '../components/layouts/Layout';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}


const inter = Inter({ subsets: ['latin'] })

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => {
            return (<PokemonCard key={pokemon.id} pokemon={pokemon} />)
          })
        }

      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, idx) => ({
    ...pokemon,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default Home;