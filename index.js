const select = document.querySelector("select");
const options = document.querySelectorAll("option");

const loadCountry = () => {
  const loadValue = localStorage.getItem("country");
  for (let i = 0; i < options.length; i++) {
    console.log(i);
    if (loadValue === options[i].value) {
      options[i].selected = true;
      break;
    }
  }
};


const handleOptions = (e) => {
  const selected = e.target.value;
  localStorage.setItem('country', selected);
};


loadCountry();
select.addEventListener('change', handleOptions);