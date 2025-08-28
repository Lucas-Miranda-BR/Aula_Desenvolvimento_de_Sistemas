class Pokemon {
    set pName(pName) {
        this._pName = pName;
    }
    get pName() {
        return this._pName;
    }

    set pType(pType) {
        this._pType = pType;
    }
    get pType() {
        return this._pType;
    }

    set pId(pId) {
        this._pId = pId;
    }
    get pId() {
        return this._pId;
    }

    set pSprite(pSprite) {
        this._pSprite = pSprite;
    }
    get pSprite() {
        return this._pSprite;
    }
    set pAttack(pAttack) {
        this._pAttack = pAttack;
    }
    get pAttack() {
        return this._pAttack;
    }
    set pDefense(pDefense) {
        this._pDefense = pDefense;
    }
    get pDefense() {
        return this._pDefense;
    }
    set pHealth(pHealth) {
        this._pHealth = pHealth;
    }
    get pHealth() {
        return this._pHealth;
    }
    set pSlot(pSlot) {
        this._pSlot = pSlot;
    }
    get pSlot() {
        return this.pSlot;
    }

    pokemonTeam1Display() {
        let output = document.querySelector("#pokemonTeam1Zone")
        output.innerHTML += `
        <div class="col-md-3 mb-4">
        <div class="card h-100 indie-flower-regular">
        <img src="${this._pSprite}" class="card-img-top p-3">
        <div class="card-body">
        <h5 class="card-title card-text-main"><strong>${this._pName}</strong></h5>
        <p class="card-text card-text-desc"> ID: <strong>${this._pId}</strong>
        <br>
        Tipos: <strong>${this._pType}</strong>
        <br>
        Vida: <strong>${this._pHealth}</strong>
        <br>
        Defesa: <strong>${this._pDefense}</strong>
        <br>
        Ataque: <strong>${this._pAttack}</strong>
        <br>
        Slot: <strong>${this._pSlot}</strong>
        </p>
        </div>
        </div>
        </div>`;

        let pokemonName = document.querySelector("#pokemonTeam1");
        pokemonName.value = "";
    }

    pokemonTeam2Display() {
        let output = document.querySelector("#pokemonTeam2Zone")
        output.innerHTML += `
        <div class="col-md-3 mb-4">
        <div class="card h-100 indie-flower-regular">
        <img src="${this._pSprite}" class="card-img-top p-3">
        <div class="card-body">
        <h5 class="card-title card-text-main"><strong>${this._pName}</strong></h5>
        <p class="card-text card-text-desc"> ID: <strong>${this._pId}</strong>
        <br>
        Tipos: <strong>${this._pType}</strong>
        <br>
        Vida: <strong>${this._pHealth}</strong>
        <br>
        Defesa: <strong>${this._pDefense}</strong>
        <br>
        Ataque: <strong>${this._pAttack}</strong>
        <br>
        Slot: <strong>${this._pSlot}</strong>
        </p>
        </div>
        </div>
        </div>`;

        let pokemonName = document.querySelector("#pokemonTeam2");
        pokemonName.value = "";
    }
}
