type Car = {
  name: string;
  image: string;
  description: string;
  highlights: string[];
};

const cars: Car[] = [
  {
    name: "Toyota C-HR",
    image: "./voiture1.JPG",
    description:
      "Un Toyota C-HR au style affirmé, confortable et idéal pour les trajets du quotidien comme pour les déplacements plus longs.",
    highlights: ["400 € / semaine", "Location simple", "Retrait rapide"]
  },
  {
    name: "Clio 5 Alpine",
    image: "./voiture2.JPG",
    description:
      "Une Clio 5 Alpine moderne et dynamique, parfaite pour une conduite agréable en ville comme sur route.",
    highlights: ["400 € / semaine", "Confort premium", "Prête à partir"]
  }
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <div className="brand-logo-frame">
              <img className="brand-logo" src="./logo.png" alt="Logo Radjah Cars" />
            </div>
            <div>
              <p className="brand-kicker">Location de voiture</p>
              <h1>Votre voiture, prête pour la semaine</h1>
            </div>
          </div>
          <a className="topbar-link" href="#vehicules">
            Voir les véhicules
          </a>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tarif unique</p>
            <h2>Deux voitures disponibles à 400 € par semaine.</h2>
            <p className="hero-text">
              Une offre claire, rapide à comprendre et facile à réserver. Choisissez le modèle
              qui vous convient et profitez d&apos;une location au prix fixe de 400 € la semaine.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#vehicules">
                Choisir une voiture
              </a>
              <a className="button button-secondary" href="#tarifs">
                Voir le tarif
              </a>
            </div>
          </div>

          <aside className="price-panel">
            <p className="price-label">Prix de location</p>
            <p className="price-value">400 €</p>
            <p className="price-period">par semaine</p>
            <ul className="price-points">
              <li>Tarif simple et transparent</li>
              <li>Deux véhicules disponibles</li>
              <li>Présentation optimisée pour mobile et desktop</li>
            </ul>
          </aside>
        </section>
      </header>

      <main>
        <section className="fleet-section" id="vehicules">
          <div className="section-heading">
            <p className="eyebrow">Notre flotte</p>
            <h3>Deux véhicules, un tarif unique, une présentation directe.</h3>
          </div>

          <div className="fleet-grid">
            {cars.map((car) => (
              <article className="car-card" key={car.name}>
                <div className="car-image-wrap">
                  <img className="car-image" src={car.image} alt={car.name} />
                </div>
                <div className="car-body">
                  <div className="car-header">
                    <h4>{car.name}</h4>
                    <span className="price-chip">400 € / semaine</span>
                  </div>
                  <p>{car.description}</p>
                  <ul className="feature-list">
                    {car.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="tarifs">
          <div className="pricing-copy">
            <p className="eyebrow">Tarif location</p>
            <h3>Un prix simple pour les deux voitures.</h3>
            <p>
              La Toyota C-HR et la Clio 5 Alpine sont proposées au même tarif pour garder une
              offre claire, directe et facile à réserver.
            </p>
          </div>

          <div className="pricing-card">
            <p className="price-label">Tarif hebdomadaire</p>
            <p className="price-value">400 €</p>
            <p className="price-period">par semaine, par véhicule</p>
          </div>
        </section>
      </main>
    </div>
  );
}
