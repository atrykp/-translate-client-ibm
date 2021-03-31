const findInMyArray = (translatedObj, translationArr) => {
  const newArray = translationArr.filter((element) => {
    return (
      element.fromLanguage === translatedObj.fromLanguage &&
      element.translation === translatedObj.translation
    );
  });
  return newArray.length > 0 ? newArray[0] : false;
};

export default findInMyArray;
