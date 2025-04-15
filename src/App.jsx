import React, { useState } from 'react'

export default function App() {
  const stepColors = ['bg-sky-100', 'bg-pink-100', 'bg-violet-100', 'bg-green-100', 'bg-yellow-100']
  const steps = [
    { icon: '👤', label: 'Créer un compte' },
    { icon: '✍️', label: 'Créer une capsule' },
    { icon: '📅', label: 'Choisir une date' },
    { icon: '🔒', label: 'Fermer la capsule' },
    { icon: '⏳', label: 'Ouvrir plus tard' },
  ]

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    // Conteneur global avec le même fond sur toute la page
    <div className="bg-gradient-to-b from-sky-200 to-white min-h-screen relative overflow-hidden">
      
      {/* Capsules flottantes fixes (elles resteront en place lors du scroll) */}
      {/* Première capsule déjà existante */}
      <img
        src="/capsule-floating.png"
        alt="Capsule flottante"
        className="hidden md:block fixed left-8 top-[40%] h-28 animate-floating z-10"
      />
      {/* Ajout d'autres capsules à des positions différentes */}
      <img
        src="/capsule-floating.png"
        alt="Capsule flottante"
        className="hidden md:block fixed right-10 top-[30%] h-24 animate-floating z-10"
      />
      <img
        src="/capsule-floating.png"
        alt="Capsule flottante"
        className="hidden md:block fixed right-4 bottom-[20%] h-20 animate-floating z-10"
      />

      {/* Section Hero réduite en hauteur */}
      <section className="h-[30vh] md:h-[25vh] flex flex-col items-center justify-center relative">
        {/* Nuages flottants */}
        <div className="floating-clouds fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="cloud absolute bg-white opacity-30 rounded-full"
              style={{
                width: `${100 + i * 40}px`,
                height: `${60 + i * 20}px`,
                top: `${10 + i * 20}%`,
                left: `-${100 + i * 60}px`,
                animation: `floatCloud ${20 + i * 10}s linear infinite`,
                filter: 'blur(12px)',
              }}
            />
          ))}
        </div>

        {/* Étoiles filantes */}
  <div className="falling-stars fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
  {[...Array(30)].map((_, i) => {
    // Position initiale aléatoire sur l'axe horizontal (en %)
    const initialLeft = Math.random() * 100;
    // Déplacement horizontal en pixels : valeur négative pour aller à gauche, positive pour aller à droite.
    // On choisit une plage suffisamment large pour que l’étoile sorte de l’écran.
    const finalDx = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 150 + 100);
    // Déplacement vertical en vh (entre 20vh et 50vh par exemple)
    const finalDy = `${Math.random() * 30 + 20}vh`;
    // Définir la rotation initiale en fonction du sens horizontal:
    // Si finalDx > 0 (vers la droite), alors 45deg, sinon -45deg.
    const rotation = finalDx > 0 ? '45deg' : '-45deg';
    // Durée rapide pour traverser l'écran (par exemple entre 0.8s et 1.5s)
    const duration = 0.8 + Math.random() * 0.7;
    // Petit délai aléatoire
    const delay = Math.random() * 1;
    
    return (
      <span
        key={i}
        className="star absolute w-[2px] h-[20px] bg-white opacity-50"
        style={{
          top: `-5%`, // démarre légèrement au-dessus de l'écran
          left: `${initialLeft}%`,
          '--dx': `${finalDx}px`,
          '--dy': finalDy,
          '--rot': rotation,
          animation: `fallStar ${duration}s linear ${delay}s infinite`
        }}
      />
    );
  })}
</div>




        {/* Contenu du Hero */}
        <h1 className="text-center text-5xl md:text-8xl font-bold text-sky-700 animate-fade-up z-20">
          Capsy
        </h1>
        <p className="mt-2 md:mt-4 text-sm md:text-xl text-sky-600 z-20">
          Voyagez dans le temps avec vos souvenirs
        </p>
      </section>

      {/* Reste du contenu de la page */}
      <div className="flex flex-col items-center justify-start text-center pt-10 pb-10 px-4">
        {/* SECTION ÉTAPES (par exemple, la frise) */}
        <section className="w-full bg-transparent py-16 px-4 mt-6 z-20">
          <h2 className="text-3xl font-poetic text-sky-700 text-center mb-10 animate-fade-up">
            Comment fonctionne Capsy ?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`flex flex-col items-center text-center rounded-xl shadow-md p-6 w-44 ${stepColors[index]}`}>
                  <div className="text-2xl font-bold text-sky-800 mb-2">{index + 1}</div>
                  <div className="text-4xl">{step.icon}</div>
                  <p className="mt-2 font-semibold text-sky-800">{step.label}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-3xl text-sky-400">
                    <span className="mx-2">→</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Formulaire d'inscription */}
        <div className="w-full max-w-md bg-white/30 backdrop-blur-md shadow-lg rounded-xl p-6 mt-16 z-20">
          {submitted ? (
            <p className="text-green-600 font-semibold">
              Merci ! Vous serez prévenu au lancement 🎉
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border rounded-md"
              />
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded"
              >
                Être prévenu du lancement
              </button>
            </form>
          )}
        </div>
      </div>
      
    </div>
  )
}
