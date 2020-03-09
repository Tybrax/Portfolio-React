import styled from 'styled-components';

/*Button styled component*/
export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #17A2B8;
    color: ${props => props.color || "#17A2B8"};
    margin: 0 1em;
    padding: 0.25em 1em;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 2px 2px #00A651;
`;

/* Title component*/
export const Title = styled.h5 `
    text-align: center;
    color: ${props => props.color || "#00A651"};
    text-transform: ${props => props.textDowncase || "uppercase"};;
    font-weight: bold;
    padding-bottom: 10px;
    letter-spacing: 1px;
`;

/*Resume elements*/
export const ResumeTitle = styled.h5 `
    font-weight: bold;
    color: #00A651;
    text-transform: capitalize;
`;

export const ResumeSubTitle = styled.h6 `
    font-style: italic;
    color: #17A2b8;
`;

export const ResumeList = styled.ul `
    color: #343A40;
    list-style-type: square;
`;

export const LanguageList = styled.ol `
    color: #343A40;
`;

export const Rectangle = styled.div`
    background: linear-gradient(180deg, #17A2B8 0%, rgba(0, 166, 81, 0.928418) 100%);
    box-shadow: 5px 5px 10px gray;
    border-radius: 35px;
    color: white;
`
