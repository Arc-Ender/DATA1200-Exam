const toggleDisplay = (className, display) => {
    [...document.getElementsByClassName(className)].forEach(element=> { 
      element.style.display=display; 
    });
  };
  
  const showCommon = () => {
    toggleDisplay('ifMatematikkOgFysikkShown', 'none');
    toggleDisplay('ifStatistiskeMetoderShown', 'none');
    toggleDisplay('ifVitenskapligeBeregningerShown', 'none');
    toggleDisplay('ifAllShown', 'block');
  }
  
  const showMatematikkOgFysikk = () => {
    toggleDisplay('ifAllShown', 'none');
    toggleDisplay('ifStatistiskeMetoderShown', 'none');
    toggleDisplay('ifVitenskapligeBeregningerShown', 'none');
    toggleDisplay('ifMatematikkOgFysikkShown', 'block');
  }
  
  const showStatistiskeMetoder = () => {
    toggleDisplay('ifMatematikkOgFysikkShown', 'none');
    toggleDisplay('ifAllShown', 'none');
    toggleDisplay('ifVitenskapligeBeregningerShown', 'none');
    toggleDisplay('ifStatistiskeMetoderShown', 'block');
  }
  
  const showVitenskapligeBeregninger = () => {
    toggleDisplay('ifMatematikkOgFysikkShown', 'none');
    toggleDisplay('ifAllShown', 'none');
    toggleDisplay('ifStatistiskeMetoderShown', 'none');
    toggleDisplay('ifVitenskapligeBeregningerShown', 'block');
  }