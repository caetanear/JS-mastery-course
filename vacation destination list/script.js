var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit' handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();

    //1. extract the value from each form field
    //attribute the element (ex: name) to a variable (ex: destName)
    var destName = event.target.elements['name'].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;

    //2. clear out the form fields
    for (var i=0; i < detailsForm.length; i++){
        detailsForm.elements[i].value = "";

    }

    
    //4. if needed, change the header at the top of the destination list
    var wishListContainer = document.getElementById("#destinations_container");

    if(wishListContainer.children.length === 0){
        document.getElementById('title').innerHTML = "My wish list";
    }

    //5. add the card
}

    //3. run a function that creates the new card
    function createDestinationCard(name, location, photoURL, description){
        var card = document.createElement('div');
        card.className = "card";

        var img = document.createElement('img');
        img.setAttribute('alt', name);

        var constantPhotoURL = "images/signpost.jpg";

        if(photoURL.length === 0){
            img.setAttribute('src', constantPhotoURL);
        }
        else{
            img.setAttribute('src', photoURL);

        }

        var cardBody = document.createElement("div");
            cardBody.className = "card-body";

        var cardTitle = document.createElement("h3");
            cardTitle.innerText = name;
            cardBody.appendChild(cardTitle);
        
        var cardSubtitle = document.createElement("h4");
            cardSubtitle.innerText = location;
            cardBody.appendChild(cardSubtitle);

        if(description.length !== 0){
            var cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }
    }