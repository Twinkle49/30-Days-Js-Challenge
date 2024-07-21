// Day 9: DOM Manipulation

//Activity 1: Selecting and Manipulating elements
// Task 1: Select an HTML element by its id and change its text content.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Content</title>
</head>
<body>
    <h1 id="header">Original Text</h1>
    <script>
        const headerElement = document.getElementById('header');
        headerElement.textContent = 'Updated Text';
    </script>
</body>
</html>

//Task 2: Create an Html element by its class and change its background color.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
</head>
<body>
    <div class="box">This is a box.</div>
    <script>
        const boxElement = document.querySelector('.box');
        boxElement.style.backgroundColor = 'lightblue';
    </script>
</body>
</html>


// Activity 2: Creating and Appending Element
//Task 3: Create a new div element with some text content and append it to the body.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Append New Div</title>
</head>
<body>
    <script>
        const newDiv = document.createElement('div');
        newDiv.textContent = 'This is a new div element.';
        document.body.appendChild(newDiv);
    </script>
</body>
</html>

//Task 4: Create a new Li element and add it to existing ul list.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New List Item</title>
</head>
<body>
    <ul id="myList">
        <li>List item 1</li>
        <li>List item 2</li>
    </ul>

    <script>
        const newLi = document.createElement('li');
        newLi.textContent = 'New list item';
        const ulElement = document.getElementById('myList');
        ulElement.appendChild(newLi);
    </script>
</body>
</html>

//Activity 3: Removing Element
// Task 5: Select an Html element and remove it from the DOM
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Element</title>
</head>
<body>
    <div id="removeThis">This element will be removed.</div>

    <script>
        const elementToRemove = document.getElementById('removeThis');
        elementToRemove.remove();
    </script>
</body>
</html>


//Task 6: Remove the last child of specific HTML element
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Last Child</title>
</head>
<body>
    <ul id="myList">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>

    <script>
        const ulElement = document.getElementById('myList');
        if (ulElement.lastElementChild) {
            ulElement.removeChild(ulElement.lastElementChild);
        }
    </script>
</body>
</html>


//Activity 4: Modifying Attributes and Classes (eg src of an img tag).
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modify Attributes and Classes</title>
    <style>
        .new-class {
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <img id="myImage" src="old-image.jpg" alt="Old Image" width="200">
    <div id="myDiv">This is a div element.</div>

    <script>
        const imgElement = document.getElementById('myImage');
        imgElement.src = 'new-image.jpg';
        const divElement = document.getElementById('myDiv');
        divElement.classList.add('new-class');
    </script>
</body>
</html>


//Task 8: Add and remove an CSS class to/from an HTML element.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modify Classes</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <p id="myParagraph">This is a paragraph.</p>
    <button onclick="addClass()">Add Class</button>
    <button onclick="removeClass()">Remove Class</button>

    <script>
        function addClass() {
            const paragraphElement = document.getElementById('myParagraph');
            paragraphElement.classList.add('highlight');
        }

        function removeClass() {
            const paragraphElement = document.getElementById('myParagraph');
            paragraphElement.classList.remove('highlight');
        }
    </script>
</body>
</html>


//Activity 5: Event Handling
//Task 9: Add a click event Listner to a button that changesthe text content of a paragraph.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Paragraph Text</title>
</head>
<body>
    <p id="myParagraph">This is the original text.</p>
    <button id="myButton">Change Text</button>
    <script>
        const buttonElement = document.getElementById('myButton');
        buttonElement.addEventListener('click', function() {
            const paragraphElement = document.getElementById('myParagraph');
            paragraphElement.textContent = 'This is the new text.';
        });
    </script>
</body>
</html>

//Task 10: Add a mouseover event listner to an element that changes its border color.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouseover Border Change</title>
    <style>
        #myElement {
            width: 200px;
            height: 100px;
            border: 2px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    <div id="myElement">Hover over me!</div>
    <script>
        const element = document.getElementById('myElement');
        element.addEventListener('mouseover', function() {
            element.style.borderColor = 'red';
        });
        element.addEventListener('mouseout', function() {
            element.style.borderColor = 'black';
        });
    </script>
</body>
</html>

// 🎉 Day 9: Modifying DOM Elements Completed 🚀
// Day 9 focused on modifying DOM elements, including selecting and manipulating elements, removing elements, and modifying attributes and classes. Tasks included changing text content, adding/removing CSS classes, and handling event listeners.
