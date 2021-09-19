import Card from '../components/Card';

import { 
  Container,
  Title, 
  Head, 
  DivHeadAlign, 
  Input, 
  ButtonSearch, 
  Body 
} from '../styles/pages/Home'


export default function Home() {
  return (
    <Container>
      <Head>
        <Title>GitHub Search Usuário</Title>
        <DivHeadAlign>          
          <Input placeholder="Repositório: ex.: jhondoe/java "/>
          <ButtonSearch>Pesquisar</ButtonSearch>
        </DivHeadAlign>  
      </Head>
      <Body>
        <Card />
      </Body>
    </Container>
  )
}
