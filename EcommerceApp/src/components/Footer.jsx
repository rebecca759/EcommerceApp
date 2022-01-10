import styled from "styled-components"
import {Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutline} from "@material-ui/icons"

const Container = styled.div`
    display:flex;
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``;

const Desc = styled.p`
    margin:20px 0px;
    line-height:1.5;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:rgba(0, 128, 128, 0.7);
    display:flex;
    color:white;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;

const Center = styled.div`
    flex:1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    line-height:1.7;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>OurShop.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque accusamus beatae impedit placeat dolores, est consequatur at ratione soluta doloribus iure magni dolore sequi! Officiis dolores quibusdam eligendi in.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    622 Dixie Path, South Tobinschester 98332
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +251 342211
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    contact@ourshop.dev
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
