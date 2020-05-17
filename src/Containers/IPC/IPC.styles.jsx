import styled from 'styled-components'
import { grey } from 'color-name';

export const dropbtn = styled.button`
    background-color: grey;
    color: white;
    padding:16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`

// The container <div> - needed to position the dropdown content
export const dropdown = styled.button`
    position: relative;
    display: inline-block;
`

export const dropdownContent = styled.button`
    display:none;
    position:absolute;
    background-color:#f9f9f9;
    min-width:160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)
    z-index: 1;
`

// Links inside the dropdown

export const A = styled.a.attrs` 
    color: black;
    
    &:hover {
        background-color: #f1f1f1 }
    }
    
    &:
    
    padding: 12px 16px;
    text-direction: none;
    display: block;
`

