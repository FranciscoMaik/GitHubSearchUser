import React from 'react';
import { AiOutlineFork, AiOutlineStar, AiOutlineCode } from 'react-icons/ai';

import { 
    Container, 
    NameRepo, 
    DivInformations, 
    DivItemInfo, 
    TextItem,
    Description,
    ValueItem,
    Link 
} from './styles';

interface ICardProps {
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    forks: number;
    clone_url: string;
  }

export const Card:React.FC<ICardProps> = ({
    name, 
    description, 
    stargazers_count,
    language,
    forks,
    clone_url
}) => {
    return(
        <Container>
            <NameRepo>{name}</NameRepo>
            <Description>{description}</Description>
            <Link href={clone_url}>{clone_url}</Link>
            <DivInformations>
                <DivItemInfo>
                    <AiOutlineStar />
                    <TextItem>Stars:</TextItem>
                    <ValueItem>{stargazers_count}</ValueItem>
                </DivItemInfo>

                <DivItemInfo>
                    <AiOutlineFork />
                    <TextItem>Forks:</TextItem>
                    <ValueItem>{forks}</ValueItem>
                </DivItemInfo>

                <DivItemInfo>
                    <AiOutlineCode />
                    <TextItem>Language:</TextItem>
                    <ValueItem>{language}</ValueItem>
                </DivItemInfo>
            </DivInformations>
        </Container>
    )
}