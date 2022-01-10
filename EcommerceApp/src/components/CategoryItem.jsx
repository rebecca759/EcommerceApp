import  styled  from "styled-components"
import {Link} from "react-router-dom"
const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    font-color:gray;
    cursor:pointer;
`

const CategoryItem = ({item}) => {
    return (
        <div>
            <Container>
                <Link to={`/products/${item.cat}`}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button> SHOP NOW</Button>
                </Info>
                </Link>  
            </Container>
        </div>
    )
}

export default CategoryItem
