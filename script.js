//ELEMENTS//

const inputname = document.querySelector(".name-input");
const NameInputBtn = document.querySelector(".name-input-btn");

//
const InputCountry = document.querySelector(".input-region");
const InputCountryBtn = document.querySelector(".region-btn");

//

const InputItem = document.querySelector(".input-item");
const InputItembtn = document.querySelector(".input-item-btn");

//label//

const labelname = document.querySelector(".label-name");
const Countryname = document.querySelector(".label-country");

//

const ItemContainer = document.querySelector(".items-checkout-page");
const RemoveBtn = document.querySelector(".icon-remove");
const values = document.querySelector(".declare--3");

//

const error = document.querySelector(".error-message");

//
const clearBtn = document.querySelector(".clear-btn");

//modal

const modal = document.querySelector(".modal-main");
const closeModal = document.querySelector(".close-modal");
const submitbtn = document.querySelector(".submit-btn");
const success = document.querySelector(".succeded");
const failed = document.querySelector(".rejected");

// SCRIPT////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//forbidden items

const forbiddenItems = [
  "bullet",
  "coin",
  "baseball bat",
  "hockey stick",
  "iron",
  "metal",
  "diamond",
  "gold",
  "bucket",
  " dog",
  "knife",
  "razor",
  "toothpick",
  "kidney",
  "cocaine",
  "meth",
  "weed",
  "codeine",
  "cannabis",
  "crystal",
  "plate",
  "cage",
  "barrow",
];

const forbiddencheck = function () {};

//helper function

const digicheck = function (str) {
  return /\d/.test(str);
};

//add name
//////////////////////////////////////////////////////////////////

NameInputBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = inputname.value;
  const nameFormat = name.toUpperCase("");

  if (
    (typeof nameFormat === "string") &
    (nameFormat.length !== 0) &
    (nameFormat.length < 18) &
    (digicheck(nameFormat) === false)
  ) {
    labelname.textContent = `${nameFormat} `;
    error.classList.remove("sum");
  } else if (digicheck(nameFormat) === true) {
    error.classList.add("sum");
  }

  inputname.value = inputname.value = "";
});

//Add country
////////////////////////////////////////////////////////////////

InputCountryBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const country = InputCountry.value;

  InputCountry.value = InputCountry.value = "";

  Countryname.textContent = `${country}`;
});

//add item
//////////////////////////////////////////////////////////////////

InputItembtn.addEventListener("click", function (e, i) {
  e.preventDefault();

  ItemContainer.innerHTML - "";

  const Input = InputItem.value;

  InputItem.value = InputItem.value = "";

  if (
    (typeof Input === "string") &
    (Input.length < 15) &
    (Input.length !== 0) &
    (digicheck(Input) === false)
  ) {
    const html = `


            <div class="declare--3">
              <div class="items-checkout-${Input} ">  ${Input} </div>
              <div class="Number-of-item">
                <label></label>
                <select>
                  <option value="">please choose amount</option>
                  <option value="1">1</option>
                  <option value="africa">2</option>
                  <option value="america">3</option>
                  <option value="europe">4</option>
                  <option value="europe">5+</option>
                </select>
                <div class= "icon-remove"><i class="fi fi-sr-cross-circle"></i> </div>
              </div> 
  
  `;
    ItemContainer.insertAdjacentHTML("afterbegin", html);
  }
  if ((Input.length > 15) & (digicheck(Input) === true)) {
    error.classList.add("sum");
  }
  if (Input.length < 15) {
    error.classList.remove("sum");
  }
});

//remove item

//RemoveBtn.addEventListener("click", function (e) {});

//remove items

clearBtn.addEventListener("click", function (event) {
  const data = (InputItem.value = InputItem.value = "");
  const nameData = (inputname.value = inputname.value = "-");
  const countryclear = (InputCountry.value = InputCountry.value = "country");

  Countryname.textContent = `${countryclear}`;

  labelname.textContent = `${nameData}`;

  ItemContainer.textContent = `${data}`;
});

//submit item

let constant;

submitbtn.addEventListener("click", function (e) {
  const item = InputItem.value;
  const name = inputname.value;
  const valid = values.value;

  if (item.length === 0) {
    modal.classList.add("sum2");
    success.classList.add("none");
    failed.classList.add("sum");
    error.classList.add("sum");
  } else item.length !== 0;
  modal.classList.add("sum2");
  success.classList.add("sum");
  failed.classList.remove("sum");
  error.classList.remove("sum");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("sum2");
});
