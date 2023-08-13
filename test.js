const firstNameInput = document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")
const emailInput = document.getElementById("email")
const submitBtn = document.getElementById("submit-btn")

const getUserInfos = (e) => {
  e.preventDefault()
  const first = firstNameInput.value
  const last = lastNameInput.value
  const mail = emailInput.value
  const userInfos = {
    firstName: first,
    lastName: last,
    email: mail
  }
  console.log(userInfos);
}
submitBtn.addEventListener("click", getUserInfos)



