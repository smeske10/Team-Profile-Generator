function generateCard() {
        getElementByID("cards").innerHTML(
            `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.title}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${this.id}</li>
                <li class="list-group-item"><a href="To:">${this.email}</a></li>
                <li class="list-group-item"><a href="">${this.office}</a></li>
            </ul>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
            </div>`
        )
    }

// generateCard();

module.exports = generateCard;