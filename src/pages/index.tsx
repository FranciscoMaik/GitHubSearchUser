import { useState, useCallback } from 'react'; 
import { AiOutlineSearch } from 'react-icons/ai';

import api from '../services/Api';

import { Card } from '../components/Card';

import { 
  Container,
  Title, 
  Head, 
  DivHeadAlign, 
  Input, 
  ButtonSearch, 
  Body
} from '../styles/pages/Home'

interface IRepos {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks: number;
  clone_url: string;
}

export default function Home() {
  const [repos, setRepos] = useState<IRepos[]>([])
  const [repo, setRepo] = useState('');
  const [inputValue, setInputValue] = useState<boolean>(false);

  const getRepos = useCallback(async()=> {
    const response = await api.get(`${repo}/repos`);
    if(response.data.id !== 77416){
      setRepos(response.data);
      setRepo('');
      setInputValue(false);
    }else{
      alert('User not found!');
      setInputValue(true);
    }
  },[repo])
  

  return (
    <Container>
      <Head>
        <Title>GitHub Search User</Title>
        <DivHeadAlign>          
          <Input
            inputValue={inputValue} 
            placeholder="User: ex.: jhondoe " 
            value={repo} 
            onChange={(e) => setRepo(e.target.value)}
          />
          <ButtonSearch onClick={getRepos}><AiOutlineSearch /></ButtonSearch>
        </DivHeadAlign>  
      </Head>

      <Body>
        {repos.map((item) => {
          return(
            <Card 
              key={item.id} 
              description={item.description} 
              forks={item.forks}
              language={item.language}
              name={item.name}
              stargazers_count={item.stargazers_count}
              clone_url={item.clone_url}
            />
          )
        })}
        
      </Body>
    </Container>
  )
}
