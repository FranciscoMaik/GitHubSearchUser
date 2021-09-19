import { 
    Container, 
    NameRepo, 
    DivInformations, 
    DivItemInfo, 
    TextItem 
} from './styles';

export default function Card(){
    return(
        <Container>
            <NameRepo>JavaScript</NameRepo>
            <DivInformations>
                <DivItemInfo>
                    <TextItem>Stars</TextItem>
                </DivItemInfo>

                <DivItemInfo>
                    <TextItem>Forks</TextItem>
                </DivItemInfo>
            </DivInformations>
        </Container>
    )
}