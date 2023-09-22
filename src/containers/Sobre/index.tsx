import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo={'principal'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat
      explicabo quam? Est deleniti et nemo labore inventore at, perspiciatis
      illum? Eius rerum cum iste error inventore, doloremque voluptatum
      mollitia.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=MSixelS&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MSixelS&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
