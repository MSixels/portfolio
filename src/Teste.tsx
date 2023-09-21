import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  FontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.FontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao FontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui!</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
