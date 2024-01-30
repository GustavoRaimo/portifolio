import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gustavo Raimo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        GustavoRaimo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Full Stack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
