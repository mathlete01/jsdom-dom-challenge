document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    
    const counter = document.getElementById("counter")
    seconds = 0;
    startTimer();

    // function plus(){
    //         const btn = document.getElementById('plus')
    //         btn addEventListener('click', increaseTimer)
    //     }

    // function minus(){
    //     const btn = document.getElementById('minus')
    //     btn addEventListener('click', decreaseTimer)
    // }

    function startTimer() {
        timerOn = true;
        timer = setInterval(function() 
            {
            seconds ++;
            counter.innerText = seconds % 60;
            }, 
        1000);
        
        document.getElementById("pause").addEventListener("click", function() {
            document.querySelector('#pause').innerHTML = 'resume';
        });
        document.getElementById("heart").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("submit").disabled = false;
    }

    function stopTimer() {
        timerOn = false;
        clearInterval(timer);
        document.getElementById("pause").addEventListener("click", function() {
            // why is there a hash below?
            document.querySelector('#pause').innerHTML = 'pause';
        });
        document.getElementById("heart").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("submit").disabled = true;
    }

    function increaseTimer() {
        seconds += 1;
    }

    function decreaseTimer() {
        seconds -= 1;
    }

    function like(){
        // Create list item
        const newItem = document.createElement("li");
        // Save input from text field to variable
        let timestamp = seconds;
        // Assign input to list item 
        console.log(`timestamp = ${timestamp}`)
        newItem.textContent = timestamp
        // get Unordered List id 
        let list = document.querySelector("likes");
        // append List Item to Unordered List
        list.appendChild(newItem);
    }

    function addComment(){
        // Stop submit button from doing what it usually does--saving to a database
        event.preventDefault();
        // Create list item
        //const comments = document.comments.createElement("ul");
        const newItem = document.createElement("li");
        // Save input from text field to variable
        let comment = document.getElementById("comment-input").value;
        // Assign input to list item 
        newItem.textContent = comment
        // get Unordered List id 
        let list = document.querySelector("ul");
        //let list = document.querySelector("comments");
        // append List Item to Unordered List
        list.appendChild(newItem);
    }

    // Michael's Code:
    // form.addEventListener("submit", function(e) {
    //     e.preventDefault()
    //     const input = document.querySelector('#comment-input')
    //     const ul = document.createElement("ul")
    //     const li = document.createElement("li")
    //     li.textContent = input.value
    //     // const p = document.createElement('p')
    //     // p.textContent = input.value
    //     comments.appendChild(ul)
    //     ul.appendChild(li)
    //     input.value = ""
    // });

const form = document.getElementById("comment-form");
    const comments = document.querySelector("#list")

    // Stop/Start Timer Button
    const pauseBtn = document.getElementById("pause").addEventListener("click", function() {
        if(timerOn == true){
            stopTimer()
        } else if (timerOn == false){
            startTimer();
        }
    });

    // Increase Timer Button
    document.getElementById("plus").addEventListener("click", function() {
        increaseTimer();
    });

    // Decrease Timer Button
    document.getElementById("minus").addEventListener("click", function() {
        decreaseTimer();
    });

    // Add event listener to Like button
    document.getElementById("heart").addEventListener("click", like);

    // Add event listener to Comment button
    document.getElementById("comment-form").addEventListener("submit", addComment);

}); 



