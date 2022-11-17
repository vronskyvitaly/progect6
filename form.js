
// информацию взял с этого сайта https://doka.guide/js/deal-with-forms/

function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
  }

  function serializeForm(formNode) {
    console.log(formNode.elements)
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
  }
  
  const applicantForm = document.getElementById('mars-once')
  applicantForm.addEventListener('submit', handleFormSubmit)
  
  console.log(applicantForm)

  function serializeForm(formNode) {
    const { elements } = formNode
  
    Array.from(elements)
      .forEach((element) => {
        const { name, value } = element
        console.log({ name, value })
      })
  }

  function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
  
    console.log(data)
  }



  