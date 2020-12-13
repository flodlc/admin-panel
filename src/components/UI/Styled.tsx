import styled, {DefaultTheme} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        border_color: string;
        space: string[];
    }
}

export const theme: DefaultTheme = {
    border_color: '#e2e2e2',
    space: [
        "0",
        "0.25rem",
        "0.5rem",
        "0.75rem",
        "1rem",
        "1.5rem",
        "2rem",
        "3rem",
        "4rem",
        "6rem",
        "8rem",
        "12rem",
        "16rem",
        "24rem",
    ]
};

type SIZE = 'normal' | 'small' | 'fluid';

export const Container = styled('div')
    .attrs<{ size: SIZE, paddingVertical: number }, { size: SIZE, paddingVertical: number }>(props => {
        return {
            size: props.size || 'normal',
            paddingVertical: props.paddingVertical !== undefined ? props.paddingVertical : 8
        };
    })`
  max-width: ${props => ({fluid: '', normal: 1300, small: 900}[props.size])}px;
  margin: auto;
  padding: ${props => props.theme.space[props.paddingVertical]} 20px;
`;

export const Spinner = styled.div`
    // height: 100px;
    padding: 20px 0;
    width: 100%;
    align-items:center;
    justify-content: center;
    display: inline-flex;
    
    @keyframes spinner {
      to {transform: rotate(360deg);}
    }
    
    &:before {
      content: '';
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid grey;
      border-top-color: white;
      animation: spinner .6s linear infinite;
    }
`;

export const CardsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
`;

export const CardWrapper = styled.div.attrs<{ perRow: number, padding: number, perRowMobile: number }, { perRow: number, padding: number, perRowMobile: number }>(props => {
    return {
        perRow: props.perRow || 3,
        padding: props.padding || 20,
        perRowMobile: props.perRowMobile || 1
    };
})`
    padding: ${props => props.padding}px;
    width: ${props => 100 / props.perRow}%;
    position: relative;
    box-sizing: border-box;
    
    @media (max-width: 700px) {
      width: ${props => 100 / props.perRowMobile}%;
    }
`;

export const Card = styled.div`
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.border_color};
  background-color: white;
  display: block;
  color: inherit;
    text-decoration: unset;
`;

export const CardHeader = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #eaeaea;
`;

export const CardBody = styled.div`
  padding: 30px;
`;

export const PageHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  
    > * {
     margin-top: 0;
     margin-bottom: 0;
}
`;

export const Title1 = styled.h1`
  font-weight: 300;
  font-size: 36px;
  
  @media (max-width: 700px) {
      font-size: 28px;
    }
`;

export const NoDataText = styled.div`
  padding: 40px 0;
  text-align: center;
  font-weight: 400;
  color: grey;
  font-style: italic;
`;

export const Button = styled.button`
  background-color: #464646;
  color: white;
  padding: 10px 20px;
  transition: background-color 300ms, box-shadow 300ms;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 10px 0 #00000030;
  
  &:hover {
    background-color: #575757;
    box-shadow: 0 1px 12px 0 rgba(0,0,0,0.24);
  }
`;

export const PropTitle = styled.div`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 4px;
    color: #565656;
`;

export const PropValue = styled.div`
  margin-bottom: 13px;
`;
