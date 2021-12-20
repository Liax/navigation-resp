import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {padding: 18px 10px;}

    @media (max-width: 768px) {
            flex-flow: column nowrap;
            background-color: lightcoral;
            position:fixed;
            transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
            transition: transform 0.3s ease-in-out;
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            padding-top: 3.5rem;

        li {
            color: white;
        }

}`

const RightNav = ({open}) => {
    return (
        <div className='navbar'>
            <Ul open={open}>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/character"><li>My fav</li></NavLink>
            </Ul>
        </div>
    )
}
export default RightNav