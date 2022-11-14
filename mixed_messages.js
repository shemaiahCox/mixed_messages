//Create an array of messages
const messages = [
'Any job worth doing is worth doing well', 
'When the going gets tough, the tough get going', 
'Leave no stone unturned',
'Hope for the best, prepare for the worst',
'Actions speak louder than words',
'Two wrongs don\'t make a right',
'Beauty is in the eye of the beholder',
'There\'s no such thing as a free lunch'
];

//Create funnction to perform functionality 
const randomMessage = () => {
    //Create a random number generator to help select a random message in the array
    let randomNum = Math.floor(Math.random() * messages.length);
    //Set the innerHTML of the content to display random messages each time user clicks button
    document.getElementById("message").innerHTML = messages[randomNum];
}
