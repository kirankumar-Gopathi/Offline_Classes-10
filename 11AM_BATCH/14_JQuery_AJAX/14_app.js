let imageRow = $('#image-row');

// JQuery AJAX
$('#load-images-btn').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/19jg3y',
        success : function(data) {
            let contactArray = data.contacts;
            displayImages(contactArray);
        }
    });
});

// display Images
let displayImages = (contactArray) => {
    let imageTags = '';
    contactArray.forEach((contact) => {
        let picture = contact.picture.large;
        let fullName = `${contact.name.first} ${contact.name.last}`;
        imageTags += `<div class="col-md-2">
                        <img src="${picture}" class="img-fluid rounded-circle img-thumbnail">
                        <h3>${fullName}</h3>
                      </div> \n`;
        console.log(imageTags);
    });
    imageRow.empty().append(imageTags);
};