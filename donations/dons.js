async function loadDons() {
    const { goal, recent } = await fetch("db.json").then(r => r.json());

    const current = [...recent].reduce((total, donor) => total + donor.amount, 0);

    document.getElementById("gauge-bar").style.width = Math.min((current / goal) * 100, 100) + "%";
    document.getElementById("gauge-current").textContent = current + "€";
    document.getElementById("gauge-goal").textContent = "Sur un objectif de " + goal + "€";

    // Tri par montant décroissant, garde les 4 plus gros
    const top4 = [...recent].sort((a, b) => b.amount - a.amount).slice(0, 4);

    const list = document.getElementById("recent-list");

    top4.forEach(donor => {
        const li = document.createElement("li");
        li.className = "don-item";

        const initiale = donor.name.charAt(0).toUpperCase();
        const timeAgo = "Il y a 2 h"; // Remplace par ta logique si tu as un timestamp

        li.innerHTML = `
            <div class="don-avatar">${initiale}</div>
            <div class="don-info">
                <span class="don-name">${donor.name}</span>
                <span class="don-time">${timeAgo}</span>
            </div>
            <span class="don-amount">${donor.amount}€</span>
        `;

        list.appendChild(li);
    });
}

loadDons();