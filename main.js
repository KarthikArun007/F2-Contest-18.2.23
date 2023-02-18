const bookName = document.getElementById(`book`);

const issuedTo = document.getElementById(`issued`);

const tBody = document.querySelector(`tBody`);
const table = document.querySelector(`table`);

const btn = document.querySelector(`.btn`);
const formEl = document.querySelector(`form`);

// -----
let arr = [];

// ------
const date = new Date();

// ----
function add() {
  let count = 1;
  function inner(params) {
    let ans = count++;
    return ans;
  }
  return inner();
}
// -------
function onAddWeb(e) {
  e.preventDefault();
  let ans = add();
  const bookName = document.getElementById(`book`).value;

  const issuedTo = document.getElementById(`issued`).value;
  const tBody = document.querySelector(`tBody`);

  table.innerHTML += `
    <tr>
      <td>${ans}</td>
      <td>${bookName}</td>
      <td>${issuedTo}</td>
      <td>${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</td>
      <td>
        <button>
          <span class="material-icons">
            border_color
          </span>
        </button>
      </td>
    </tr>
  `;
  arr.push({
    id: ans,
    book_name: `${bookName}`,
    issued_to: `${issuedTo}`,
    issued_time: `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    status: "",
  });
}
formEl.addEventListener(`submit`, onAddWeb);
