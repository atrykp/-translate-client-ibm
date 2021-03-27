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

const List = ({ setLanguage, isActive }) => {
  const [languagesArr, setLanguagesArr] = useState([]);

  useEffect(() => {
    if (isActive) {
      getLanguages();
    }
  }, [isActive]);

  const setLanguagesToList = (array) => {
    setLanguagesArr(
      array.map((element) => (
        <Link onClick={() => setLanguage(element.language)}>
          {element.languageName}
        </Link>
      ))
    );
  };
  const getLanguages = async () => {
    let arrayLanguage = [];
    let response = await fetch(`http://localhost:5000/`);
    let languagesObj = await response.json();
    console.log(languagesObj);
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
      {languagesArr}
    </StyledListWrapper>
  );
};

export default List;
