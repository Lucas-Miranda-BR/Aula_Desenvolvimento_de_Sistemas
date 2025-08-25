let pokemonTeam1 = []
let pokemonTeam2 = []
let slot1 = 0;
let slot2 = 0;

let poke1 = null;
let poke2 = null;
let pokemonHp1;
let pokemonHp2;

function addPokemonT1() {
    let pokemonName = document.querySelector("#pokemonTeam1").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(resp => {
        if (!resp.ok) {
            throw new Error ("Pokemon não encontrado")
        }
        return resp.json();
    }).then(data => {
        const p1 = new Pokemon();
        let pokeName = p1._pName = data.name;
        let pokeType = p1._pType = data.types.map(types => types.type.name);
        let pokeId = p1._pId = data.id;
        let pokeSprite = p1._pSprite = data.sprites.front_default;
        let pokeHealth = p1._pHealth = data.stats[0].base_stat;
        let pokeAttack = p1._pAttack = data.stats[1].base_stat;
        let pokeDefense = p1._pDefense = data.stats[2].base_stat;
        let pokeSlot = p1._pSlot = slot1++;
        pokemonTeam1.push({
        name:pokeName,
        types:pokeType,
        id:pokeId,
        sprite:pokeSprite,
        health:pokeHealth,
        defense:pokeDefense,
        attack:pokeAttack,
        slot:pokeSlot
    });

    // document.getElementById("pokemonHpTeam1").max = p1.health; 
    // document.getElementById("pokemonHpTeam1").value = p1.health;   

    pokemonHp1 = p1.pHealth;
    poke1 = p1;

    console.log(p1.pokemonTeam1Display());
    }).catch(error => {
        alert(error.message);
    })
}

function addPokemonT2() {
    let pokemonName = document.querySelector("#pokemonTeam2").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(resp => {
        if (!resp.ok) {
            throw new Error ("Pokemon não encontrado")
        }
        return resp.json();
    }).then(data => {
        const p2 = new Pokemon();
        let pokeName = p2._pName = data.name;
        let pokeType = p2._pType = data.types.map(types => types.type.name);
        let pokeId = p2._pId = data.id;
        let pokeSprite = p2._pSprite = data.sprites.front_default;
        let pokeHealth = p2._pHealth = data.stats[0].base_stat;
        let pokeAttack = p2._pAttack = data.stats[1].base_stat;
        let pokeDefense = p2._pDefense = data.stats[2].base_stat;
        let pokeSlot = p2._pSlot = slot2++;
        pokemonTeam2.push({
        name:pokeName,
        types:pokeType,
        id:pokeId,
        sprite:pokeSprite,
        health:pokeHealth,
        defense:pokeDefense,
        attack:pokeAttack,
        slot:pokeSlot
    });

       // document.getElementById("pokemonHpTeam2").max = p2.health    
        // document.getElementById("pokemonHpTeam2").value = p2.health    
    
        pokemonHp2 = p2.pHealth;
        poke2 = p2;

        console.log(p2.pokemonTeam2Display());
    }).catch(error => {
        alert(error.message);
    })
}

function pokemonBattle(){
    findPokeSlot1 = prompt("Selecione um pokemon do time 1 (Utilize via Slot): ");
    findPokeSlot2 = prompt("Selecione um pokemon do time 2 (Utilize via Slot): ");
    poke1 = pokemonTeam1[findPokeSlot1];
    poke2 = pokemonTeam1[findPokeSlot2];



    if (!poke1 || !poke2){
        alert("Selecione um pokemon de cada time!");
        return;
    }
    let pokemonHp1 = poke1.health;
    let pokemonHp2 = poke2.health;

    let turn = 1;

    let log = "";

    document.getElementById("battleResult").innerHTML="";
    document.getElementById("battleLog").innerHTML="";

    let interval = setInterval(() => {
        if(pokemonHp1 > 0 && pokemonHp2 > 0){
            if (turn%2==0) {
                let dmg = Math.max(1, poke1.attack-poke1.defense);
                pokemonHp2-=dmg;
                document.getElementById("hp2").value-=dmg
                log += `<p class="indie-flower-regular"> ${poke1.name} atacou ${poke2.name} causando ${dmg}`;
            }
            else {
                let dmg = Math.max(1, poke2.attack-poke2.defense);
                pokemonHp1-=dmg;
                document.getElementById("hp1").value-=dmg
                log += `<p class="indie-flower-regular"> ${poke2.name} atacou ${poke1.name} causando ${dmg}`;   
            }
            document.getElementById("battleLog").innerHTML = log;
            turn++;
        }
        else{
            clearInterval(interval)
        }
    }, 1000);
}