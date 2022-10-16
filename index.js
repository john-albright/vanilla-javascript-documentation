document.addEventListener('DOMContentLoaded', function() {
    //console.log('hello');

    // Exposing the CSSStyleDeclaration using HTMLElement.style
    const mainSection = document.querySelectorAll('.main-section')[0];
    const body = document.querySelector('body');
    const navbar = document.querySelector('#navbar');
    const navbarPosition = navbar.style.position;
    const mainSectionColor = mainSection.style.color;
    const mainSectionFontSize = mainSection.style.fontSize;
    const bodyFontFamily = body.style.fontFamily;
    //console.log(mainSectionColor);
    //console.log(mainSectionFontSize);
    //console.log(bodyFontFamily);
    //console.log(navbarPosition);

    // Attempting to expose the CSSStyleDeclaration using the CSSStyleSheet API
    const styles = document.styleSheets;
    //console.log(styles); // returns styleSheetList
    const styleSheet1 = styles[0];
    //console.log(styleSheet1); // returns styleSheet
    //const ruleList = styleSheet1.cssRules;
    //console.log(ruleList[0]);

    // Exposing the CSSStyleDeclaration using window.getComputedStyle()
    const mainSectionStyles = window.getComputedStyle(mainSection);
    //console.log('main section styles:', mainSectionStyles);
    //console.log('main section color:', mainSectionStyles.getPropertyValue('color'))
});