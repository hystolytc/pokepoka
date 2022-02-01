import { Card, Content, Name, Total } from './style'
interface Props {
  img?: string
  name?: string
  ownedTotal?: number
  href?: string
}

export const CardPokemon: React.FC<Props> = ({
  img,
  name,
  ownedTotal,
  href
}) => (
  <Card href={href}>
    <img
      src={img}
      alt={`pokemon ${name}`}
      width='50'
      height='50' />
    
    <Content>
      <Name>{name}</Name>
      {ownedTotal &&
        <Total>
          <span>{ownedTotal}</span>
          <p>owned pokemon</p>
        </Total>
      }  
    </Content>
  </Card>
)