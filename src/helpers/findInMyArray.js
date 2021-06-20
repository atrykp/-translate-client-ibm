const findInMyArray = (translatedObj, translationArr) => {
  const newArray = translationArr.filter((element) => {
    return (
      element.fromLang === translatedObj.fromLang &&
      element.toWord === translatedObj.toWord
    );
  });
  return newArray.length > 0 ? newArray[0] : false;
};

export default findInMyArray;
