const emailListEl = document.querySelector('.email_list')


//add API with axios
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
  console.log(response.data);
  
})