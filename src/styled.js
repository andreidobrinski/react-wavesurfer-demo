import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 16px;
`;

export const WaveSurferWrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
  }
`;
