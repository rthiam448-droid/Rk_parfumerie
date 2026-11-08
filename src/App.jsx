import { useState } from "react";
import "./App.css";
import accueil from "./images/accueil.jpg.jpeg"

const produits = [
  {
    id: 1,
    nom: "Brume parfumee",
    categorie: "Parfum",
    prix: 2500,
    contenance: "120 ml",
    image:
      "src/images/brume parfmée.jpg.jpeg  ",
  },
  {
    id: 2,
    nom: "Extrait de parfum",
    categorie: "Parfum",
    prix: 2000,
    contenance: "20 ml",
    image:
      "src/images/extrait.jpg.jpeg  ",
  },
  {
    id: 3,
    nom: "Huile parfumée",
    categorie: "Huiles",
    prix: 1000,
    contenance: "5 ml",
    image:
      "src/images/huile.jpg.jpeg  ",
  },
  {
    id: 4,
    nom: "Brume de corps",
    categorie: "Brumes",
    prix: 2500,
    contenance: "100 ml",
    image:
      "src/images/brume.jpg.jpeg  ",
  },
  {
    id: 5,
    nom: "Huile 15 ml",
    categorie: "Brumes",
    prix: 2500,
    contenance: "100 ml",
    image:
      "  ",
  },
  {
    id: 6,
    nom: "eau de toilette",
    categorie: "Brumes",
    prix: 2500,
    contenance: "100 ml",
    image:
      "  ",
  },
  {
    id: 7,
    nom: "Parfum de cheveux",
    categorie: "Brumes",
    prix: 2500,
    contenance: "100 ml",
    image:
      "  ",
  },
  {
    id: 8,
    nom: "musk tahara",
    categorie: "Brumes",
    prix: 1000,
    contenance: "5 ml",
    image:
      " ",
  },
  {
    id: 9,
    nom: "musk intime",
    categorie: "Brumes",
    prix: 4500,
    contenance: "15 ml",
    image:
      " ",
  },
  {
    id: 10,
    nom: "Deodorant",
    categorie: "Brumes",
    prix: 4500,
    contenance: "30 ml",
    image:
      " ",
  },
  {
    id: 11,
    nom: "Deodorant",
    categorie: "Brumes",
    prix: 2500,
    contenance: "100 ml",
    image:
      " ",
  },
  {
    id: 12,
    nom: "Deodorant",
    categorie: "Brumes",
    prix: 2500,
    contenance: "30 ml",
    image:
      " ",
  },
];

const categories = ["Tout", "Extraits", "Huiles", "Brumes", "Musk"];

function App() {
  const [categorie, setCategorie] = useState("Tout");
  const [panier, setPanier] = useState([]);

  const produitsFiltres =
    categorie === "Tout"
      ? produits
      : produits.filter((p) => p.categorie === categorie);

  function ajouterAuPanier(produit) {
    setPanier((ancien) => [...ancien, produit]);
  }

  function commander() {
  if (panier.length === 0) {
    alert("Ajoute d'abord un produit à ton panier !");
    return;
  }

  const lignes = panier.map((p) => {
    return "- " + p.nom + " (" + p.contenance + ") : " +
      p.prix.toLocaleString("fr-FR") + " FCFA";
  });

  const total = panier.reduce((somme, p) => somme + p.prix, 0);

  const message =
    "Bonjour Rk_parfumerie ! Je souhaite commander :\n" +
    lignes.join("\n") +
    "\n\nTotal : " + total.toLocaleString("fr-FR") + " FCFA";

  window.open(
    "https://wa.me/221783697081?text=" + encodeURIComponent(message),
    "_blank"
  );
}

  return (
    <div className="site">
      <header className="navbar">
        <a className="logo" href="#accueil">Rk_parfumerie</a>

        <nav className="navigation">
          <a href="#accueil">Accueil</a>
          <a href="#catalogue">Nos parfums</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="panier-btn" onClick={commander}>
          ♡ Panier ({panier.length})
        </button>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-texte">
            <span className="surtitre">VOTRE BOUTIQUE DE PARFUMS</span>
            <h1>L’essence du luxe au creux de votre peau.</h1>
            <p>
              Trouve la senteur qui te ressemble et laisse un
              souvenir inoubliable partout où tu passes.
            </p>
            <a className="bouton-principal" href="#catalogue">
              Découvrir nos parfums →
            </a>
            <div className="hero-note">Ne passe pas inapercue, laisse ton parfum parler</div>
          </div>

          <div className="hero-image">
           <img src={accueil} alt="Rk_parfumerie" />
            <div className="image-legende">
              <span>LE PARFUM QUI TE RESSEMBLE</span>
              <strong>Ta signature, ton parfum.</strong>
            </div>
          </div>
        </section>

        <section className="avantages">
          <div>♡ <span>Des senteurs soigneusement choisies</span></div>
          <div>✧ <span>Commande facile sur WhatsApp</span></div>
          <div>◇ <span>Paiement Wave ou Orange Money</span></div>
        </section>

        <section className="catalogue" id="catalogue">
          <div className="section-entete">
            <span className="surtitre">NOTRE SÉLECTION</span>
            <h2>Nos parfums</h2>
            <p>Découvre tes prochaines senteurs préférées.</p>
          </div>

          <div className="categories">
            {categories.map((nom) => (
              <button
                key={nom}
                className={categorie === nom ? "categorie active" : "categorie"}
                onClick={() => setCategorie(nom)}
              >
                {nom}
              </button>
            ))}
          </div>

          <div className="grille-produits">
            {produitsFiltres.map((produit) => (
              <article className="carte-produit" key={produit.id}>
                <div className="produit-image">
                  <img src={produit.image} alt={produit.nom} />
                  <span className="etiquette">Notre sélection</span>
                </div>

                <div className="produit-infos">
                  <span className="produit-categorie">{produit.categorie}</span>
                  <h3>{produit.nom}</h3>
                  <p className="contenance">{produit.contenance}</p>
                  <div className="produit-bas">
                    <strong>{produit.prix.toLocaleString("fr-FR")} FCFA</strong>
                    <button
                      className="ajouter"
                      onClick={() => ajouterAuPanier(produit)}
                    >
                      + Ajouter
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <span className="surtitre">UNE QUESTION ?</span>
          <h2>On t'aide à trouver ta senteur.</h2>
          <p>Contacte-nous pour tes commandes et tes renseignements.</p>
          <button className="bouton-principal" onClick={() => window.open("https://wa.me/221783697081", "_blank")}>
            Commander sur WhatsApp
          </button>
        </section>
      </main>

     <footer className="footer">
  <a className="logo" href="#accueil">
    Rk_parfumerie ♡
  </a>

  <p className="footer-slogan">
    Ton parfum. Ta signature. Ton pouvoir.
  </p>

  <div className="footer-columns">
    <div className="footer-column">
      <h3>Boutique</h3>
      <a href="#produits">Tous nos parfums</a>
      <a href="#produits">Huiles parfumées</a>
      <a href="#produits">Brumes de corps</a>
      <a href="#produits">Nos nouveautés</a>
    </div>

    <div className="footer-column">
      <h3>Informations</h3>
      <a href="#accueil">Notre univers</a>
      <a href="#commande">Comment commander</a>
      <a href="#livraison">Livraison</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-column">
      <h3>Suivez notre univers</h3>
      <a href="https://wa.me/221783697081">
        WhatsApp
      </a>
    </div>
  </div>

  <div className="newsletter">
    <h2>Rejoins l’univers Rk_parfumerie</h2>
    <p>
      Découvre nos senteurs et nos nouveautés.
      Trouve le parfum qui te ressemble.
    </p>
    <a
      className="newsletter-button"
      href="https://wa.me/221783697081"
    >
      NOUS CONTACTER
    </a>
  </div>

  <small>
    © {new Date().getFullYear()} Rk_parfumerie.
    Tous droits réservés.
  </small>
</footer>
    </div>
  );
}

export default App;