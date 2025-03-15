/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

const container = document.createElement("div");
document.body.appendChild(container); // You can append this container to any other element in the DOM

// Number of buttons you want to create
const numberOfButtons = 1000;

// Loop to create buttons
for (let i = 1; i <= numberOfButtons; i++) {
  // Create a button element
  const button = document.createElement("button");

  // Set the button text

  if (i == 69) {
    button.textContent = `hole?`;
  }
  else if (i==420) {
    button.textContent = `hole?`;
  }
  else if (i==100) {
    button.textContent = `hole?`;
  }
  else if (i==999) {
    button.textContent = `hole?`;
  }
  else if (i==86) {
    button.textContent = `hole?`;
  }
  else if (i==777) {
    button.textContent = `hole?`;
  }
  else if (i==1000) {
    button.textContent = `hole?`;
  }
  else {
    button.textContent = `hole`;
  }


  // Optionally add an ID or class to each button
  button.id = `button-${i}`;

  // Add a click event listener (optional)
  button.addEventListener("click", function () {
    if (i == 420) {
      window.alert("you found the keys!!! your code is 'IDONTEVENHAVEKEYS'");
    } 
    else if (i == 69) {
      window.alert("haha you thought");
    } 
    else if (i == 100) {
      window.alert("you uhh...found a rock? here, if you store the code 'ROCKSARECOOL' somewhere, maybe you'll get to use it.");
    } 
    else if (i == 999) {
      window.alert("this one just isn't a hole...");
    }
    else if (i == 86) {
      window.alert("you found some keys!! they're not my keys though. keep looking");
    }
    else if (i == 777) {      window.alert("An error has occurred. You may be able to continue, but some parts may not work properly.Error: unexpected token: identifier.Stack Trace:evalJavaScript/Scripting<@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:509:143463evalJavaScript@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:509:143475Wikifier<.shadowHandler.value</<@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:509:157045value/<@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:509:150402ariaClick/<@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:509:32850onClickFnWrapper/<@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:509:3101dispatch@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:60:40035add/v.handle@https://twinery.org/2/#/stories/e4edec32-29fa-43b6-8360-f0e4126641dd/play line 57 > injectedScript:60:38006");
    }
    else if (i == 1000) {
      window.alert("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    else {
      window.alert(`no key :(`);
    }
  });

  // Append the button to the container
  container.appendChild(button);
}
