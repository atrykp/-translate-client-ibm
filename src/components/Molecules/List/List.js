import styled from "styled-components";
import Link from "../../Atoms/Link/Link";
import Input from "../../Atoms/Input/Input";
import { useEffect, useState } from "react";

const StyledListWrapper = styled.div`
  position: absolute;
  display: ${({ visible }) => (visible ? "grid" : "none")};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  height: 250px;
  overflow: auto;
`;

const List = () => {
  const [languagesArr, setLanguagesArr] = useState([]);

  useEffect(() => {
    getLanguages();
  }, []);

  const setLanguagesToList = (array) => {
    setLanguagesArr(
      array.map((element) => (
        <Link onClick={() => console.log(element)}>{element}</Link>
      ))
    );
  };
  const getLanguages = async () => {
    let arrayLanguage = [];
    let response = await fetch(`http://localhost:5000/`);
    let languagesObj = await response.json();
    console.log(languagesObj);
    languagesObj.result.languages.forEach((element) =>
      arrayLanguage.push(`${element.language} - ${element.language_name} `)
    );
    setLanguagesToList(arrayLanguage);
  };

  return (
    <StyledListWrapper visible>
      <Input secondary placeholder="search" />
      {languagesArr}
    </StyledListWrapper>
  );
};

export default List;
