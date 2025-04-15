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
      
      {/* Capsules flottantes avec fil */}
      {/* Première capsule */}
      <div className="hidden md:block fixed left-8 top-[40%] z-10">
        <div className="relative">
          {/* Fil reliant le haut de l'écran à la capsule (hauteur égale à 40vh car top-[40%] signifie environ 40vh) */}
          <div
            className="thread absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300"
            style={{ width: "1px", height: "40vh" }}
          />
          <img
            src="/capsule-floating.png"
            alt="Capsule flottante"
            className="h-28 animate-floating"
          />
        </div>
      </div>

      {/* Deuxième capsule */}
      <div className="hidden md:block fixed right-10 top-[30%] z-10">
        <div className="relative">
          <div
            className="thread absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300"
            style={{ width: "1px", height: "30vh" }}
          />
          <img
            src="/capsule-floating.png"
            alt="Capsule flottante"
            className="h-24 animate-floating"
          />
        </div>
      </div>

      {/* Troisième capsule */}
      <div className="hidden md:block fixed right-4 top-[55%] z-10">
        <div className="relative">
          <div
            className="thread absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300"
            style={{ width: "1px", height: "55vh" }}
          />
          <img
            src="/capsule-floating.png"
            alt="Capsule flottante"
            className="h-20 animate-floating"
          />
        </div>
      </div>

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

        {/* (Ici, si vous souhaitez garder les étoiles filantes, elles s'afficheraient entre les animations, sinon vous pouvez les retirer) */}

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
