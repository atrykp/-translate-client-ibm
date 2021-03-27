import styled from "styled-components";
import Link from "../../Atoms/Link/Link";
import Input from "../../Atoms/Input/Input";
import { useEffect, useState } from "react";

const StyledListWrapper = styled.div`
  position: absolute;
  display: ${({ isActive }) => (isActive ? "grid" : "none")};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  height: 250px;
  overflow: auto;
`;

const List = ({ setLanguage, isActive, setIsActive }) => {
  const [languagesArr, setLanguagesArr] = useState([]);

  useEffect(() => {
    if (isActive) {
      getLanguages();
    }
  }, [isActive]);

  const setLanguagesToList = (array) => {
    setLanguagesArr(
      array.map((element) => (
        <Link
          key={Math.floor(Math.random() * 112345223)}
          onClick={() => {
            setLanguage(element.language);
            setIsActive(false);
          }}
        >
          {element.languageName}
        </Link>
      ))
    );
  };
  const getLanguages = async () => {
    let arrayLanguage = [];
    let response = await fetch(`http://localhost:5000/`);
    let languagesObj = await response.json();
    languagesObj.result.languages.forEach((element) =>
      arrayLanguage.push({
        language: element.language,
        languageName: element.language_name,
      })
    );
    setLanguagesToList(arrayLanguage);
  };

  return (
    <StyledListWrapper isActive={isActive}>
      <Input secondary placeholder="search" />
      {languagesArr ? languagesArr : "Ładuję.."}
    </StyledListWrapper>
  );
};

export default List;
