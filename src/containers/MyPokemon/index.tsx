import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller';
import { Layout } from 'components'
import { HeaderBackButton } from 'components/Header/HeaderBackButton'
import { PokemonContext } from 'App'
import { CardPokemon, BSReleasePokemon } from './components'
import { IPokemon } from 'types/myPokemon'
import { Empty } from 'components/Container'

const IMAGE_BASE_URL = process.env.REACT_APP_POKEMON_IMAGE_BASE_URL

const MyPokemon = () => {
  const myPokemon = useContext(PokemonContext)
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>({} as IPokemon)

  const _onModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const _onSelectedPokemon = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon)
    _onModalOpen()
  }

  const _onReleasePokemon = () => {
    myPokemon.removePokemon(selectedPokemon.givenName)
    _onModalOpen()
  }

  const _goBack = () => {
    navigate(-1)
  }

  if (!myPokemon.myPokemon.pokemons.length) return (
    <>
      <HeaderBackButton
        title='My Pokemon List'
        goBack={_goBack} />
      <Layout>
        <Empty
          text='Your pokemon list is still empty.'
        />
      </Layout>
    </>
  )

  return (
    <>
      <HeaderBackButton
        title='My Pokemon List'
        goBack={_goBack} />
      <Layout>
        <InfiniteScroll
          pageStart={1}
          loadMore={() => {}}
          hasMore={false}
          initialLoad={false}
        >
          {myPokemon.myPokemon.pokemons.map((pokemon: any, i: number) => 
            <React.Fragment key={i}>
              <CardPokemon
                img={`${IMAGE_BASE_URL}/${pokemon.pokemonId}.png`}
                name={pokemon.name}
                givenName={pokemon.givenName}
                href={`/${pokemon.name}`}
                onRelease={() => _onSelectedPokemon(pokemon)} />
              { i < myPokemon.myPokemon.pokemons.length && i !== myPokemon.myPokemon.pokemons.length - 1 && <hr /> }
            </React.Fragment>
          )}
        </InfiniteScroll>
      </Layout>
      <BSReleasePokemon
        isOpen={isModalOpen}
        img={`${IMAGE_BASE_URL}/${selectedPokemon.pokemonId}.png`}
        name={selectedPokemon.givenName}
        onClose={_onModalOpen}
        onRelease={_onReleasePokemon} />
    </>
  )
}

export default MyPokemon