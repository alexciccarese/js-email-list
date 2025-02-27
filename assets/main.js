const emailListEl = document.querySelector('.email_list')
const reloadEl = document.querySelector('.reload')




// sostituiamo le email con nuove mail by fetch
reloadEl.addEventListener('click', function() {

  emailListEl.innerHTML = ''
  //add API with axios
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
  const randomEmail = response.data.response

  console.log(randomEmail);
  
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)

})

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
  const randomEmail = response.data.response

  console.log(randomEmail);
  
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)

})

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
  const randomEmail = response.data.response

  console.log(randomEmail);
  
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)

})

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
  const randomEmail = response.data.response

  console.log(randomEmail);
  
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)

})

fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => response.json())
.then(data => {
  console.log(data.response);

  const randomEmail = data.response
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)


})


fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => response.json())
.then(data => {
  console.log(data.response);

  const randomEmail = data.response
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)


})

fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => response.json())
.then(data => {
  console.log(data.response);

  const randomEmail = data.response
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)


})


fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => response.json())
.then(data => {
  console.log(data.response);

  const randomEmail = data.response
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)


})


fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => response.json())
.then(data => {
  console.log(data.response);

  const randomEmail = data.response
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)


})


fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => response.json())
.then(data => {
  console.log(data.response);

  const randomEmail = data.response
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)


})

})