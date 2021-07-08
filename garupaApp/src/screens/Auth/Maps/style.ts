import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 20px;
`;
export const Container = styled.View`
  flex:1;
  background-color: ${({theme}) => theme.colors.transparent};
`;
