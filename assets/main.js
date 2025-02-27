const emailListEl = document.querySelector('.email_list')

//add API with axios
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
  const randomEmail = response.data.response

  console.log(randomEmail);
  
  
  const emailOne = document.createElement('li')
  emailOne.textContent = randomEmail
  
  emailListEl.appendChild(emailOne)

  const emailTwo = document.createElement('li')
  emailTwo.textContent = randomEmail
  
  emailListEl.appendChild(emailTwo)
})



