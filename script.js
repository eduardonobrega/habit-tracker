const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)

  if (nlwSetup.dayExists(today)) {
    alert("Dia já cadastrado")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   reading: ["01-03"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()
