async function loadDons() {

    // On récupère les données du fichier JSON
    const data = await fetch("db.json").then(reponse => reponse.json());
    const goal = data.goal;
    const recent = data.recent;

    const gaugeBar = document.getElementById("gauge-bar");
    const gaugeCurrent = document.getElementById("gauge-current");
    const gaugeGoal = document.getElementById("gauge-goal");
  
    //On calcule le total des dons
    let current = 0;
    for (const donor of recent) {
      current = current + donor.amount;
    }
  
    //met à jour la jauge
    const percent = Math.min((current / goal) * 100, 100);
    if (gaugeBar) gaugeBar.style.width = percent + "%";
    if (gaugeCurrent) gaugeCurrent.textContent = current + "€";
    if (gaugeGoal) gaugeGoal.textContent = "Sur un objectif de " + goal + "€";
  
    // On trie les dons du plus grand au plus petit, et on garde les 4 premiers
    const sorted = recent.slice(); // copie du tableau pour ne pas modifier l'original
    sorted.sort(function(a, b) {
      return b.amount - a.amount;
    });
    const top4 = sorted.slice(0, 4);
  
    // Affiche chaque donateur dans la liste
    const list = document.getElementById("recent-list");
    if (!list) return;
  
    for (const donor of top4) {
      const li = document.createElement("li");
      li.className = "don-item";
  
      const avatarSrc = donor.avatar || "";
  
      li.innerHTML =
        '<img class="don-avatar" src="' + avatarSrc + '" alt="">' +
        '<div class="don-info">' +
          '<span class="don-name">' + donor.name + '</span>' +
          '<span class="don-time">Il y a 2 h</span>' +
        '</div>' +
        '<span class="don-amount">' + donor.amount + '€</span>';
  
      list.appendChild(li);
    }
  }
  
  loadDons();