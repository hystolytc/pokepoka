import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroller';
import { PokemonContext } from 'App'
import { Layout, LoadingIndicator } from 'components'
import { CardPokemon, Header } from './components'
import { GET_POKEMON } from 'services/graphql/query'
import { Loading, Error } from 'components/Container'

const IMAGE_BASE_URL = process.env.REACT_APP_POKEMON_IMAGE_BASE_URL

const PokemonList = () => {
  const myPokemon = useContext(PokemonContext)

  const {loading, error, data, fetchMore} = useQuery(GET_POKEMON, {
    variables: { limit: 50, offset: 0 }
  })

  const loadMore = () => {
    fetchMore({
      variables: {
        offset: data.pokemons.length
      }
    })
  }

  if (loading) return (
    <>
      <Header href='/my-pokemon' />
      <Layout>
        <Loading />
      </Layout>
    </>
  )
  
  if (error) return (
    <>
      <Header href='/my-pokemon' />
      <Layout>
        <Error />
      </Layout>
    </>
  )

  return (
    <>
      <Header href='/my-pokemon' />
      <Layout>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMore}
          hasMore={data.pokemons.length < data.aggregate.aggregate.count}
          loader={<LoadingIndicator key={0} />}
          initialLoad={false}
        >
          {data.pokemons.map((v: any, i: number) => 
            <React.Fragment key={v.id}>
              <CardPokemon
                img={`${IMAGE_BASE_URL}/${v.id}.png`}
                name={v.name}
                ownedTotal={myPokemon.myPokemon.pokemonTotal[v.id]}
                href={`/${v.name}`}/>
              { i < data.pokemons.length && i !== data.pokemons.length - 1 && <hr /> }
            </React.Fragment>
          )}
        </InfiniteScroll>
      </Layout>
    </>
  )
};

export default PokemonList;