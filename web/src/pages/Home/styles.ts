import styled, { css } from "styled-components";

const Container = styled.div`
  main {
    display: flex;
    justify-content: center;
  }
`;

const SearchSection = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
`;

const ListSection = styled.section`
  ul{
    display: flex;
    flex-direction: column;
  }

  li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: 10px 0;
  }
`;

const Title = styled.h2`
  font-family: sans-serif;
  text-align: center
`;

export { Container, SearchSection, ListSection, Title };
