let cardRow = $('#card-row');

let callAJAX = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let contact = data.results[0];
            prepareCard(contact);
        }
    });
};

setInterval(callAJAX,1000);

// prepare a card
let prepareCard = (contact) => {
    let contactCard = `<div class="col-md-3">
                        <div class="card" id="trainer-card">
                            <div class="card-body text-center">
                                <img src="${contact.picture.large}" class="img-fluid img-thumbnail w-50 rounded-circle">
                                <h4 class="mt-2">${contact.name.first} ${contact.name.last}</h4>
                                <p class="lead text-muted">${contact.dob.age} Yrs</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur earum eligendi incidunt, labore sapiente.</p>
                                <div class="d-flex flex-row">
                                    <div class="p-4">
                                        <a href="#">
                                            <i class="fab fa-facebook-f fa-2x text-teal" ></i>
                                        </a>
                                    </div>
                                    <div class="p-4">
                                        <a href="#">
                                            <i class="fab fa-twitter fa-2x text-teal" ></i>
                                        </a>
                                    </div>
                                    <div class="p-4">
                                        <a href="https://github.com/thenaveensaggam" target="_blank">
                                            <i class="fab fa-github fa-2x text-teal" ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    cardRow.append(contactCard);
};