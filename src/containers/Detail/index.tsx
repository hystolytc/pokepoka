import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, ButtonStickyBottom, BottomSheet } from 'components'
import { GET_POKEMON_DETAIL } from 'services/graphql/query'
import { CatchProgress, CatchFail, CatchSuccess } from './components'
import { PokemonContext } from 'App'
import { IPokemon, ITypeMoves } from 'types/pokemonDetail'
import { HeaderBackButton } from 'components/Header/HeaderBackButton'
import { Loading, Error, NotFound } from 'components/Container'
import { 
  Container,
  Image,
  Name,
  Row,
  Type,
  Label,
  List,
  SubtitleWrapper,
  Subtitle,
  Box
} from './style'

const IMAGE_BASE_URL = process.env.REACT_APP_POKEMON_IMAGE_BASE_URL

const Detail = () => {
  const myPokemon = useContext(PokemonContext)
  const location = useLocation()
  const navigate = useNavigate()
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: location.pathname.replace('/', '')
    }
  })
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currStep, setCurrStep] = useState(1)
  const [customPokemonName, setCustomPokemonName] = useState('')
  const [nameError, setNameError] = useState('')

  useEffect(() => {
    if (data && data.pokemon.length) {
      const pokemonData = data.pokemon[0]
      let types: string[] = []
      let typeMoves: ITypeMoves[] = []

      pokemonData.types.forEach((v: any) => {
        types.push(v.type.name)
        typeMoves.push({type: v.type.name, moves: v.type.moves})
      })
      setPokemon({
        id: pokemonData.id,
        name: pokemonData.name,
        types,
        typeMoves,
        stats: pokemonData.stats,
        abilities: pokemonData.abilities
      })
    }
  }, [data])

  const _onChangePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (nameError !== '') setNameError('')
    setCustomPokemonName(e.target.value)
  }

  const _onModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const _onCatchProgress = () => {
    const resultCatchPokemon = Math.floor(Math.random() * 2)
    setCurrStep(resultCatchPokemon ? 2 : 3)
  }

  const _onClosePokemonProgress = () => {
    _onModalOpen()
    _resetCurrStep()
    _onClearInput()
  }

  const _resetCurrStep = () => {
    setCurrStep(1)
  }

  const _onClearInput = () => {
    setCustomPokemonName('')
  }

  const _onSavePokemon = () => {
    const result = myPokemon.myPokemon.pokemons.find(v => v.givenName.toLowerCase() === customPokemonName.toLowerCase())
    if (result) return setNameError('This name already exists!')
    myPokemon.addPokemon({
      pokemonId: pokemon.id,
      name: pokemon.name,
      givenName: customPokemonName
    })
    _onClosePokemonProgress()
    _onClearInput()
  }

  const _goBack = () => {
    navigate(-1)
  }

  const _onNavMyPokemon = () => {
    navigate('/my-pokemon')
  }

  if (!loading && data.pokemon.length === 0) return (
    <>
      <HeaderBackButton
        title={pokemon.name}
        showMyPokemonLink={true}
        goBack={_goBack}
        goMyPokemon={_onNavMyPokemon}
      />
      <Layout>
        <NotFound />
      </Layout>
    </>
  )


  if (loading || !Object.keys(pokemon).length) return (
    <>
      <HeaderBackButton
        title={pokemon.name}
        showMyPokemonLink={true}
        goBack={_goBack}
        goMyPokemon={_onNavMyPokemon}
      />
      <Layout>
        <Loading />
      </Layout>
    </>
  )
  
  if (error) return (
    <>
      <HeaderBackButton
        title={pokemon.name}
        showMyPokemonLink={true}
        goBack={_goBack}
        goMyPokemon={_onNavMyPokemon}
      />
      <Layout>
        <Error />
      </Layout>
    </>
  )

  return (
    <>
      <HeaderBackButton
        title={pokemon.name}
        showMyPokemonLink={true}
        goBack={_goBack}
        goMyPokemon={_onNavMyPokemon}
      />
      <Layout>
        <Image
          src={`${IMAGE_BASE_URL}/${pokemon.id}.png`}
          alt={`pokemon ${pokemon.name}`}
          width='200'
          height='200' />
        
        <Container>
          <Name>{pokemon.name}</Name>
          <Row>
            {pokemon.types.map(name => <Type key={name}>{name}</Type>)}
          </Row>

          <Label>Stats</Label>
          <List>
            {pokemon.stats.map((v, i) => <li key={i}>{v.stat.name} - {v.base_stat}</li>)}
          </List>
          
          <Label>Ability</Label>
          <List>
            {pokemon.abilities.map((v, i) => <li key={i}>{v.ability.name}</li>)}
          </List>

          <Label>Moves</Label>
          <List>
            {pokemon.typeMoves.map((v, i) => (
              <React.Fragment key={i}>
                <SubtitleWrapper>
                  <Subtitle>{v.type}</Subtitle>
                  <Subtitle>Accuracy</Subtitle>
                </SubtitleWrapper>
                {v.moves.map((move, j) => 
                  <li key={j}>
                    {move.name}
                    {move.accuracy && <Box>{move.accuracy}</Box>}
                  </li>
                  )}
                <br/>
              </React.Fragment>
            ))}
          </List>
        </Container>
        <ButtonStickyBottom onClick={_onModalOpen}>
          Catch the pokemon
        </ButtonStickyBottom>
      </Layout>

      <BottomSheet isOpen={isModalOpen}>
        {currStep === 1 && <CatchProgress onAfter={_onCatchProgress} />}
        {currStep === 2 && 
          <CatchSuccess
            value={customPokemonName}
            error={nameError}
            onChange={_onChangePokemonName}
            onRelease={_onClosePokemonProgress}
            onSave={_onSavePokemon}
          /> }
        {currStep === 3 && <CatchFail onClick={_onClosePokemonProgress} />}
      </BottomSheet>
    </>
  )
}

export default Detail
