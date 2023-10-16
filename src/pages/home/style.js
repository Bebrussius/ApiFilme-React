import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;

  h1 {
    text-align: center;
    margin: 4rem 0;
    font-size: 2.5rem;
    color: #FF5733;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 32px;
  background-color: #333;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
  }

  a {
    color: #FF5733;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #FF8C66;
    transform: scale(1.05);
  }
`;

export const Btn = styled.button`
  margin-top: 5px;
  padding: 0.7rem 3rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #FF5733;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.50s;

  &:hover {
    background-color: #FA2500;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  outline: none;
  transition: border-color 0.3s;
  background-color:#333;
  color:#fff;

  &:focus {
    border-color: #FF5733;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%; /* Defina o width desejado em 'em' aqui */
  
  label {
    width: 20.5rem;
    margin-right: 1rem;
    font-size: 1rem;
    color: #fff;
  }

  select {
    width: 100%; /* Ocupa todo o espaço disponível */
    padding: 0.5rem;
    border: 1px solid #333;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
      border-color: #FF5733;
    }

    &:focus {
      border-color: #FF5733;
      box-shadow: 0 0 0 2px rgba(255, 87, 51, 0.2);
    }
  }
`;
