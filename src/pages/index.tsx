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
        <Title>GitHub Search User</Title>
        <DivHeadAlign>          
          <Input placeholder="User: ex.: jhondoe "/>
          <ButtonSearch>Pesquisar</ButtonSearch>
        </DivHeadAlign>  
      </Head>
      <Body>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Body>
    </Container>
  )
}
