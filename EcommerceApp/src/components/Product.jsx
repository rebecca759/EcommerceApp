import styled from "styled-components"
import {ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined} from "@material-ui/icons"
import {Link} from "react-router-dom"

const Info = styled.div`
opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:4;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;
`
 
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#76acac1a;
    position:relative;
    &:hover ${Info} {
        opacity:1;
    }
`

const Image = styled.img`
    height:75%;
    z-index:2
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:all 0.5s ease;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
`

const Product = ({item}) => {
    const src = '../'+item.img
    return (
        <Link to={`/product/${item.id}`}>
        <Container>
            <Image src={src}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined className="link"/>
                </Icon>
                <Icon>
                    <SearchOutlined className="link"/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined className="link"/>
                </Icon>
            </Info>
        </Container>
        </Link>
        
    )
}

export default Product
