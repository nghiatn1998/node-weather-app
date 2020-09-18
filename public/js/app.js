const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const location = search.value

  messageOne.textContent = "Loading ..."
  messageTwo.textContent = ""

  if (!location) {
    console.log("Location must be provided!")
    messageOne.textContent = "Location must be provided!"
    messageTwo.textContent = ""
  } else {
    fetch(`/weather?address=${location}`).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error
          messageTwo.textContent = ""
          return console.log(data.error)
        } else {
          console.log(data.location, data.forecast)
          messageOne.textContent = `Location: ${data.location}`
          messageTwo.textContent = `Forecast: ${data.forecast}`
        }
      })
    })
  }
})