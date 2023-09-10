// First project of Mouhcine's Fallahi Js Portfolio
// Color Changer
//------------------------------------------------------------------//
// Let's first assign data to the array 'colors'
// The elements of this array are dictionaries with a group of colors

//------//
// Data //
//------//
const colors = [
  {
    background: "#f6ebf4",
    color: "#482673",
    button: "#4cbfa6",
    hover: "#bf4c65",
  },
  {
    background: "#B34C70",
    color: "#A3B34C",
    button: "#5C4CB3",
    hover: "#4CB38F",
  },
  {
    background: "#4B23DC",
    color: "#B4DC23",
    button: "#DC2358",
    hover: "#23DCA7",
  },
  {
    background: "#E01FA1",
    color: "#E0BF1F",
    button: "#1FE05E",
    hover: "#1F40E0",
  },
  {
    background: "#C73847",
    color: "#8FC738",
    button: "#38C7B8",
    hover: "#7038C7",
  },
  {
    background: "#AE5183",
    color: "#AEAA51",
    button: "#5155AE",
    hover: "#51AE7C",
  },
  {
    background: "#62EF10",
    color: "#9D10EF",
    button: "#EF2D10",
    hover: "#10D2EF",
  },
];

//--------------//
// Dom Elements //
//--------------//
const bodyOfPage = document.body;
const text = document.querySelector(".color-text");
const button = document.querySelector(".btn");

// Adding some transitions to make it fluid
const transition = "0.6";
bodyOfPage.style.transition = `background-color ${transition}s, color ${transition}s`;
text.style.transition = `color ${transition}s`;
button.style.transition = `background-color ${transition}s`;
//-------------------------------------//
// Assigning colors to the dom elements//
//-------------------------------------//
const assignColor = (element, color, background, text) => {
  color
    ? (element.style.color = color)
    : background
    ? (element.style.backgroundColor = background)
    : (element.innerHTML = text);
};
// Declaring a variable currentIndex to navigate through the colors array
let currentIndex = 0;
const updateColors = () => {
  assignColor(bodyOfPage, null, colors[currentIndex].background, null);
  assignColor(text, colors[currentIndex].color, null, null);
  assignColor(button, null, colors[currentIndex].button, null);
  assignColor(text, null, null, colors[currentIndex].background);
  button.style.setProperty("--hover", colors[currentIndex].hover);
};
// Initial call
updateColors();

// The main functionality of this project : changing the color
// For this we will set an eventlistener on the button
button.addEventListener("click", () => {
  // We will increase the variable currentIndex by one, if it equal or exceeds the length of the colors array we will assign to it the value of 0
  currentIndex++;
  if (currentIndex >= colors.length) {
    currentIndex = 0;
  }
  updateColors();
});
