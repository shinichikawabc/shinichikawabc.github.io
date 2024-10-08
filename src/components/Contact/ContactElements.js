import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

export const Info = styled.div`
  display: flex; 
  align-items: center; 
  columnGap: 20px; 
  rowGap: 10px; 
  flexWrap: wrap; 
  justifyContent: center; 
`;
