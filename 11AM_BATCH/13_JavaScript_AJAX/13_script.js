let imageDiv = document.querySelector('#image-gallery-div');

// JavaScript AJAX
let getAJAX = () => {

    // Create a AJAX Request
    let http = new XMLHttpRequest();

    // Prepare  the request
    http.open('GET','https://api.myjson.com/bins/19jg3y',true);

    // send the request
    http.send();

    // Handle the request
    http.onreadystatechange = function() {
       if(http.readyState === 4 && http.status === 200){
           processData(http.responseText);
       }
    };
};

// Process the data
let processData = (text) => {
    let contactArray = JSON.parse(text).contacts;
    displayImages(contactArray);
};

// display Images
let displayImages = (contactArray) => {
    let imageTag = '';
    contactArray.forEach((contact) => {
        let picture = contact.picture.large;
        imageTag += `<img src="${picture}"> \n`;
    });
    imageDiv.innerHTML = imageTag;
};