import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import Badge from '@material-ui/core/Badge'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Logo = styled.h1`
    font-weight:bold
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    flex:1;
    border:none;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor:pointer;
    margin-left:25px;
`
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                         <Search style={{color:"grey", fontSize:18}}/>
                    </SearchContainer>
                </Left>
                <Center><Link className='link' to="/"><Logo>OurShop.</Logo></Link></Center>
                <Right>
                    <MenuItem><Link className='link' to="/register">REGISTER</Link></MenuItem>
                    <MenuItem><Link className='link' to="/login">SIGN IN</Link></MenuItem>
                    <Link className='link' to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                    
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
