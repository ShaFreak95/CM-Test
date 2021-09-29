// async function loadData () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();

//     console.log(data);
// } 

// const requestData = new Request('https://jsonplaceholder.typicode.com/todos');
const targetedContainer = document.querySelector(".content-items"); //get element in which to insert the article as its child
const clickBtn = document.querySelector(".click-btn"); //user clicks the btn to load data
const articleHeader = document.querySelector("#header");
const contentItemsContainer = document.querySelector(".content-items-container");
const contentItems = document.querySelector(".title");

clickBtn.addEventListener('click', function() { 
    const loader = document.querySelector(".loader-container");
    loader.style.display = "flex";
    setTimeout(function() {
        loader.style.display = "none";
    }, 2100);

    setTimeout(function() {
        articleHeader.style.display = "none"; //remove the header once the button clicks
    contentItemsContainer.style.display = "block";

    $('.content-container').before('<hr/>');
    $('.content-container').after('<hr/>');

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function getData(data) {
        // for (let i=0; i<data.length; i++) {
        //     console.log(data[i].title);
        // }
        for (let i=0; i<10; i++) {
            // console.log(data[i].title);
            //create new element to append the content
            const para = document.createElement("h3");
            const getTitle = document.createTextNode(data[i].title); //fetch the value
            para.appendChild(getTitle) //append value into the targetted element container
            //create a new element for each title
            const targetedElement = document.querySelector(".content-items-container");
            const newElement = document.createElement("div");
            newElement.setAttribute("class", "content-items");
            targetedElement.appendChild(newElement);
            newElement.appendChild(para);
        }
    })

    //adjust the height when content is updated
    const contentcontainer = document.querySelector('.content-container');
    contentcontainer.style.height = "inherit";
    contentcontainer.style.backgroundColor = "#fefefe";
    const articleSection = document.querySelector(".article-container");
    articleSection.style.height = "auto";
    }, 2200)
})