const emailListEl = document.querySelector('.email_list')

//add API with axios
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
  const randomEmail = response.data.response

  console.log(randomEmail);
  
  
  const newList = document.createElement('li')
  newList.textContent = randomEmail
  
  emailListEl.appendChild(newList)
})



