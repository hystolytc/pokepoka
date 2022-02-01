import { Button, BottomSheet } from 'components'
import { Container, Image, Span, Row } from './style'

interface Props {
  img?: string
  name?: string
  isOpen?: boolean
  onClose?: () => void
  onRelease?: () => void
}

export const BSReleasePokemon: React.FC<Props> = ({
  img,
  name,
  isOpen,
  onClose,
  onRelease
}) => {  
  return (
    <BottomSheet isOpen={isOpen}>
      <Container>
        <Image src={img} alt='pokemon ball' width='100' height='100' />
        <Span>Are sure want to release <strong>{name}</strong>?</Span>
        <Row>
          <Button
            variant='secondary'
            size='sm'
            onClick={onClose}
          >
            No
          </Button>
          <Button
            variant='danger'
            size='sm'
            onClick={onRelease}
          >
            Yes
          </Button>
        </Row>
      </Container>
    </BottomSheet>
  )
}