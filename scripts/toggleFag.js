/* https://europeanprojectsemester.eu/providers
 * 
 * Henter inn alle elementer med klassen fra "className"
 * endrer "display" for elementene til verdi fra "display"
 * */

const toggleDisplay = (className, display) => {
  [...document.getElementsByClassName(className)].forEach(element=> { 
    element.style.display=display; 
  });
};


// fjerner først alle fag fra andre emnegrupper
// Legger så til fag fra valgt emnegruppe
const showCommon = () => {
  toggleDisplay('if-matematikk-og-fysikk-shown', 'none');
  toggleDisplay('if-statistiske-metoder-shown', 'none');
  toggleDisplay('if-vitenskaplige-beregninger-shown', 'none');
  toggleDisplay('if-all-shown', 'block');
}

const showMatematikkOgFysikk = () => {
  toggleDisplay('if-all-shown', 'none');
  toggleDisplay('if-statistiske-metoder-shown', 'none');
  toggleDisplay('if-vitenskaplige-beregninger-shown', 'none');
  toggleDisplay('if-matematikk-og-fysikk-shown', 'block');
}

const showStatistiskeMetoder = () => {
  toggleDisplay('if-matematikk-og-fysikk-shown', 'none');
  toggleDisplay('if-all-shown', 'none');
  toggleDisplay('if-vitenskaplige-beregninger-shown', 'none');
  toggleDisplay('if-statistiske-metoder-shown', 'block');
}

const showVitenskapligeBeregninger = () => {
  toggleDisplay('if-matematikk-og-fysikk-shown', 'none');
  toggleDisplay('if-all-shown', 'none');
  toggleDisplay('if-statistiske-metoder-shown', 'none');
  toggleDisplay('if-vitenskaplige-beregninger-shown', 'block');
}

