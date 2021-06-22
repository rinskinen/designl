import React, { useState } from "react";
import styled from 'styled-components';

interface Props {
    image: string;
    name: string;
    open: boolean;
}

const StyledImage = styled.div`
    margin: 15px;
    cursor: pointer;
    overflow: hidden;
    width: 18vw;
    height: 18vw;
    img {
        width: 100%;
        transition: transform 500ms ease;
        &:hover {
        transform: scale(1.1);
        }
    }`

export const Image = ({image, name, open}: Props) => {
    const [isOpen, setOpen] = useState(open);

    let tileStyle = {};
    
    if(isOpen) {
         tileStyle = {
          width: '62vw',
          height: '62vw',
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '0',
          marginTop: '-31vw',
          marginLeft: '-31vw',
          boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
          transform: 'none'
        };
       } else {
        tileStyle = {
        width: '18vw',
        height: '18vw'
        };
       }
    return (
        <StyledImage onClick={() => setOpen(!isOpen)}>
            <img
                src={image}
                alt={name}
                height="100%"
                style={tileStyle}
            />
        </StyledImage>
    )
}