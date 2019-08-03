import React from 'react';
import styled from 'styled-components';

const capitalizeFirstLetter = (string) =>
      string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';

const Card = styled.div`
  background: rgba(213, 120, 120, 0.6);  
  //background: rgba(253, 255, 255, 0.4);  
  color: rgba(0, 0, 0, 0.7);
  padding: 2% 2% 2%;
  margin: 15px;
  border-radius: 3px;
  text-align: left;
  width: 15%;
`;

const Name = styled.h2`
  font-family: 'Saira Stencil One', cursive;
  text-align: center;
  margin-bottom: 5px;
`;

export default function Character({info}) {
  return (
    <Card>
      <Name>{info.name}</Name>
      <p><strong>Height:</strong> {info.height} </p>
      <p><strong>Mass:</strong> {info.mass} </p>
      <p><strong>Hair Color:</strong> {capitalizeFirstLetter(info.hair_color)}</p>
      <p><strong>Skin Color:</strong> {capitalizeFirstLetter(info.skin_color)}</p>
      <p><strong>Eye Color:</strong> {capitalizeFirstLetter(info.eye_color)}</p>
      <p><strong>Birth Year:</strong> {info.birth_year}</p>
      <p><strong>Gender:</strong> {capitalizeFirstLetter(info.gender)}</p>
    </Card>
  )
}