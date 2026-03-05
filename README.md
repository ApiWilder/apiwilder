# Api Wilder

Site vitrine de l’ASBL Api Wilder : rucher collectif et local à Berchem qui agit depuis 2011 pour la biodiversité et la protection des abeilles. Le site présente l’association, le projet, la transparence financière, les dons et le contact.

## Stack

- HTML5 / CSS3 / JavaScript (Vanilla)
- Hébergement : GitHub Pages
- Repo : GitHub (organisation ApiWilder)

## Accès au repo

Le repo est hébergé sous l’organisation GitHub **ApiWilder**.
Pour contribuer, il faut être membre de l’organisation ou avoir été invité.

URL du site : https://ApiWilder.github.io/apiwilder/

## Structure des fichiers

```
├── index.html
├── apropos.html
├── projet.html
├── transparence.html
├── dons.html
├── contact.html
├── success.html
├── styles.css
├── apropos.css
├── dons.js
├── db.json
├── components/
│   ├── variables.css
│   ├── main.css
│   ├── hero.css
│   ├── navbar.css
│   ├── header.css
│   ├── footer.css
│   ├── buttons.css
│   ├── projects.css
│   └── all_component.css
├── Apiwilder/
│   └── (images et assets)
├── image/
├── logoapiwilder/
└── .github/
    └── workflows/
        └── static.yml
```

## Lancer le projet en local

Pas de build nécessaire, ouvrir directement :

```bash
git clone https://github.com/ApiWilder/apiwilder.git
cd apiwilder
# Ouvrir index.html dans le navigateur
# Ou avec l'extension Live Server sur VS Code
```

## Workflow

- Branche principale : `main` (déployée automatiquement sur GitHub Pages)
- Créer une branche pour chaque feature : `feature/nom-feature`
- Faire une Pull Request vers `main` pour merger

## Déploiement

Le déploiement est automatique via **GitHub Pages** (workflow `.github/workflows/static.yml`).
Chaque merge sur `main` déclenche le déploiement et met à jour le site en production.

Pour configurer GitHub Pages :
Settings → Pages → Source : GitHub Actions (workflow fourni)

## Conventions

- Commits en français ou en anglais au choix
- Messages de commit clairs : `fix: correction du menu mobile`
- Une PR = une feature ou un fix
