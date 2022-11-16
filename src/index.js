document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //Make taskList be the li id called create-task-form
  let taskList = document.getElementById('create-task-form')
  //make taskList have an event listerner that when submitted the function event 
  //is prevented from reloading 
  taskList.addEventListener('submit', function(event){
    event.preventDefault()

//make a text variable to represent the text that will be typed as a paragraph
    const text = document.createElement('p');

    //create a button for deleting later on
    const deleteButton = document.createElement('button')

    //grab the button that was just created and make it text = X
    deleteButton.textContent = 'X'

    //add an event listerner to the button so when we click the X it is removed
    deleteButton.addEventListener('click', function(){
     text.remove()
      deleteButton.remove()
    })

    text.textContent = `${event.target['new-task-description'].value} `
  
    taskList.appendChild(text)
    text.appendChild(deleteButton)
  })
});
