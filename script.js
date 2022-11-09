const productOptions = [
  {
    id: 1,
    src: "/assets/watch-1.png",
    price: "5.299",
  },
  {
    id: 2,
    src: "/assets/watch-2.png",
    price: "5.500",
  },
  {
    id: 3,
    src: "/assets/watch-3.png",
    price: "5.400",
  },
  {
    id: 4,
    color: "#000000",
    src: "/assets/watch-4.png",
    price: "5.500",
  },
];

function selectOption(option) {
  const element_appleWatch = document.getElementById("apple-watch");

  if (!element_appleWatch) return;

  element_appleWatch.style = "animation: none;";
  element_appleWatch.src = option.src;

  setTimeout(() => {
    element_appleWatch.style = "animation: transform-apple-watch 3s forwards";
  }, 10);

  const element_price = document.getElementById("price");

  if (!element_price) return;

  element_price.innerHTML = `${option.price}$`;
}

function renderProductOptions() {
  const element = document.getElementById("color-picker");

  if (!element) return;

  productOptions.map(function (option) {
    const newDiv = document.createElement("div");

    const id = `color_picker_${option.id}`;

    newDiv.id = id;
    newDiv.onclick = () => this.selectOption(option);
    newDiv.className = "color-picker-options";

    element.appendChild(newDiv);
  });
}

renderProductOptions();
