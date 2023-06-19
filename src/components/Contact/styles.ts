import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
`;

export const ContactWrapper = styled.div`
  flex: 1 0 100%;
  border-radius: 10px;
  @media (min-width: 768px) {
    flex: 1 0 50%;
    max-width: 50%;
  }
`;

export const Context = styled.div`
  flex: 1 0 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 50%;
  }
  & > h3 {
    width: 100%;
    text-align: center;
    font-size: 32px;
    color: var(--secondary-color);
    font-weight: 800;
    align-self: self-end;
  }
  & > p {
    color: var(--primary-color);
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    align-self: self-start;
    margin-top: 4px;
    @media (min-width: 768px) {
      margin-top: 8px;
    }
  }
`;

export const ContactForm = styled.form`
  margin-top: 40px;
  display: flex;
  max-width: 400px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 768px) {
    margin-top: 0;
  }

  & > p {
    font-size: 14px;
    color: #d91010;
    font-weight: 600;
    margin: 16px 0;
    width: 100%;
    text-align: right;
    font-spacing: 2px;
  }

  & > label + label {
    margin-top: 16px;
  }
  & > label {
    width: 100%;
    font-size: 14px;
    color: var(--secondary-color);
    & > input,
    textarea {
      font-family: monospace;
      background-color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 4px;
      margin-top: 6px;
      width: calc(100% - 12px);
      max-width: calc(100% - 12px);
      padding: 4px 4px;
      color: var(--secondary-color);
      font-weight: 700;
      transition: border 0.3s;
      &:focus-visible {
        outline: 0;
        transition: border 0.3s;
        border: 2px solid var(--secondary-color);
      }
    }
    & > textarea {
      min-height: 50px;
      max-height: 200px;
    }
  }
  & > button {
    border: 2px solid var(--secondary-color);
    background-color: transparent;
    color: var(--secondary-color);
    padding: 8px 32px;
    border-radius: 25px;
    margin-top: 16px;
    transition: background-color 0.25s ease;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    &:hover {
      transition: background-color 0.25s ease;
      background-color: var(--primary-color);
    }
  }
`;
