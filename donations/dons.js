async function loadDons() {
   
    // Va chercher le fichier db.json (requete HTTP) et ensuite ( .then() ) transforme en json 
    const { goal, recent } = await fetch("db.json").then((r) => r.json());

    // Calcule le total automatiquement en additionnant tous les montants, reduce() parcour le tableau
    const current = [...recent].reduce((total, donor) => total + donor.amount, 0);

    // Jauge de progression
    // Bloque à 100 max + calcule le % 
    document.getElementById("gauge-bar").style.width = Math.min((current / goal) * 100, 100) + "%";
    document.getElementById("gauge-current").textContent = current + "€";
    document.getElementById("gauge-goal").textContent = "Sur un objectif de " + goal + "€";

    // Donneurs récents
    recent.forEach(newDonor => {
    const li = document.createElement('li');
    li.textContent =  newDonor.name + ' — +' + newDonor.amount + '€';
    document.getElementById('recent-list').appendChild(li);
    }); 
};


loadDons();