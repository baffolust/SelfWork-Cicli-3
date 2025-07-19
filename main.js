let chooseCompleted = false;

while (chooseCompleted == false){
    let scelta = prompt(`Scegli la tua bevanda`);
    switch (true) {
        case scelta == 1 || scelta == "acqua" || scelta == "water" :
        console.log(`E’ stata selezionata acqua`);
        chooseCompleted = true;
        break;

        case scelta == 2 || scelta == "coca cola" || scelta == "cola" || scelta == "coke" || scelta == "coca" :
        console.log(`E’ stata selezionata Coca Cola`);
        chooseCompleted = true;
        break;

        case scelta == 3 || scelta == "birra" || scelta == "beer" :
        console.log(`E’ stata selezionata Birra`);
        chooseCompleted = true;
        break;

        default:
        console.log(`Scelta non valida`);
                
    }
}