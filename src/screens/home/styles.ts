import theme from "src/theme";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme })=> theme.COLORS.GRAY_600};
justify-content: center;
align-items: center;
`;

export const Title = styled.Text`
font-size: 32px;
font-weight: 600;
color: #EEE;
`;

