import styled from "styled-components";
import Link from "../../Atoms/Link/Link";
import { useEffect, useState, useRef } from "react";

const StyledListWrapper = styled.div`
  position: absolute;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  height: 250px;
  overflow: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 1;
`;
const StyledInput = styled.input`
  min-height: 35px;
  max-height: 40px;
  border-radius: 10px;
  border-style: none;
  padding: 0 5%;
  width: 100%;
`;

const List = ({ setLanguage, isActive, setIsActive }) => {
  const [languagesArr, setLanguagesArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    if (isActive) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const getLanguages = async () => {
    let arrayLanguage = [];
    let response = await fetch(
      `https://translate-app-serv.herokuapp.com/translator`
    );
    let languagesObj = await response.json();
    languagesObj.result.languages.forEach((element) =>
      arrayLanguage.push({
        language: element.language,
        languageName: element.language_name,
      })
    );

    setLanguagesArr(arrayLanguage);
  };
  let list =
    languagesArr &&
    languagesArr
      .filter((language) => {
        if (!inputValue) {
          return language;
        }
        return language.languageName
          .toLowerCase()
          .includes(inputValue.toLocaleLowerCase());
      })
      .map((element) => (
        <Link
          key={Math.floor(Math.random() * 112345223)}
          onClick={() => {
            setLanguage(element.language);
            setIsActive(false);
          }}
        >
          {element.languageName}
        </Link>
      ));
  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <StyledListWrapper isActive={isActive}>
      <StyledInput
        secondary
        placeholder="search"
        value={inputValue}
        onChange={handleInputValue}
        ref={inputRef}
      />
      {list ? list : "Ładuję.."}
    </StyledListWrapper>
  );
};

export default List;
