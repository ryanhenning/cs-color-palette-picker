// initialise Field Extension
window.extensionField = {};

const form = document.getElementById("palette");
const colorOptions = document.getElementsByName("color-option");

let pickedColor = "";
let colors = [
  { name: "Blue", value: "#00f" },
  { name: "Green", value: "#0f0" },
];

export function initialize(extension) {
  // make extension object globally available

  extensionField = extension ?? {};

  colors =
    extension?.config?.colors?.length > 0
      ? extension?.config?.colors
      : colors;

  // Get current color field value from Contentstack and update the color picker input element
  pickedColor =
    extension && extension.field?.getData() !== ""
      ? extension?.field?.getData()
      : colors[0].value;
  buildColorList(pickedColor);
}

export function buildColorList(pickedColor) {
  colors.forEach((color) => {
    const radioLabel = document.createElement("label");
    radioLabel.className = "radio-option-label";
    radioLabel.style.display = "flex";
    radioLabel.style.paddingBottom = '5px';

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.className = "cs";
    radioInput.name = "color-option";
    radioInput.value = color.value;
    radioInput.checked = color.value === pickedColor;

    const radioSpan = document.createElement("span");
    radioSpan.className = "lbl";
    radioSpan.textContent = color.name;
    radioSpan.style.paddingRight = "5px";

    const colorSwatch = document.createElement("div");
    colorSwatch.className = "swatch";
    colorSwatch.style.cssText = `background-color:${color.value};width:20px;height:20px;padding:0 4px 0 0;`;

    radioLabel.appendChild(radioInput);
    radioLabel.appendChild(radioSpan);
    radioLabel.appendChild(colorSwatch);
    form.appendChild(radioLabel);
  });
}
initialize();
ContentstackUIExtension.init().then(initialize(extension));

// On color change event, pass new value to Contentstack
export function updateColor() {
  let selectedColor = "";

  for (let i = 0; i < colorOptions.length; i++) {
    if (colorOptions[i].checked) {
      selectedColor = colorOptions[i].value;
      extensionField.field.setData(selectedColor);
    }
  }
}