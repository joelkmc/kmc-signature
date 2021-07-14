import styled from '@emotion/styled'

export const StyledContractSection = styled.section`
  & h2 {
    text-align: center;
    font-size: 1.5rem /* 30px */;
    font-family: 'ProximanovaExtraBold';
  }

  & p:nth-child(1) {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  & p:nth-child(4) {
    margin-top: 0.4rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  & ul {
    margin: 0.4rem 0 1.2rem 0;
  }

  & ol {
    margin: 0.4rem 0 1.2rem 0;
  }

  & li {
    list-style: disc;
    margin-left: 1.8rem;
  }

  & strong {
    letter-spacing: 0.2px;
  }

  & img {
    margin: 1rem 0 0.4rem 0;

    &:hover {
      border-color: rgba(137, 196, 244, 0.2);
    }
  }

  & .signature__container {
    margin: 1rem 0 0.4rem 0;
    width: 200px;
    height: 100px;
    background-color: rgba(137, 196, 244, 0.3);
    border: 2px solid rgba(137, 196, 244, 0.8);
    transition: all 0.1s ease;

    &:hover {
      background-color: rgba(137, 196, 244, 0.2);
      border-color: rgba(137, 196, 244, 0.7);
    }
  }
`
