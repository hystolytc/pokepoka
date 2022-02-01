import pokeball from 'assets/loader.png'
import { Button } from 'components'
import { Container, Pokeball, Span, Row, FormInput } from '../style'

interface Props {
  value?: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSave?: () => void
  onRelease?: () => void
}

export const CatchSuccess: React.FC<Props> = ({
    value,
    error,
    onChange,
    onSave,
    onRelease
  }) => {  
  return (
    <Container>
      <Pokeball src={pokeball} alt='pokemon ball' width='50' height='50' />
      <Span>Congrats, you got the pokemon!!!</Span>
      <FormInput>
        <input
          placeholder='Give this pokemon a name'
          type='text'
          value={value}
          onChange={onChange}
          max={50} />
        {error !== '' && <label>{error}</label>}
      </FormInput>
      <Row>
        <Button
          variant='secondary'
          size='sm'
          onClick={onRelease}
        >
          Release
        </Button>
        <Button
          variant='primary'
          size='sm'
          onClick={onSave}
          disabled={value === ''}
        >
          Save
        </Button>
      </Row>
    </Container>
  )
}