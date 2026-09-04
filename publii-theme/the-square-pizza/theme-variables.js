/*
 * Emits the :root CSS custom properties from Theme settings. Publii prepends the
 * output to style.css on every build, so these always win over the defaults and
 * the dark-mode block in style.css still overrides them inside the media query.
 * https://getpublii.com/dev/theme-variables/
 */
var generateThemeVariables = function (params) {
   return `
      :root {
         --paper:      ${params.paperColor};
         --panel:      ${params.panelColor};
         --ink:        ${params.inkColor};
         --ink-soft:   ${params.inkSoftColor};
         --line:       ${params.lineColor};
         --tomato:     ${params.accentColor};
         --tomato-ink: ${params.accentInkColor};
         --basil:      ${params.secondaryColor};
         --maxw:       ${params.maxWidth};
      }`;
};

module.exports = generateThemeVariables;
