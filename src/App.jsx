import React, { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <h1 className="fixed top-6 left-1/2 transform -translate-x-1/2 text-5xl font-poetic text-sky-700 z-30 animate-fade-up">
        Capsy
      </h1>

      <div className="relative overflow-hidden bg-gradient-to-b from-sky-200 to-white min-h-screen flex flex-col items-center justify-start text-center pt-40 pb-10 px-4">
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
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="star absolute w-[2px] h-[20px] bg-white opacity-50 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Slogan */}
        <h2 className="text-4xl font-bold text-sky-700 mb-12 z-20">
          Voyagez dans le temps avec vos souvenirs
        </h2>

        {/* SECTION ÉTAPES */}
        <section className="w-full bg-white py-16 px-4 mt-6 z-20">
          <h2 className="text-3xl font-poetic text-sky-700 text-center mb-10 animate-fade-up">
            Comment fonctionne Capsy ?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12">
            {[
              { icon: '👤', label: 'Créer un compte' },
              { icon: '✍️', label: 'Créer une capsule' },
              { icon: '📅', label: 'Choisir une date' },
              { icon: '🔒', label: 'Fermer la capsule' },
              { icon: '⏳', label: 'Ouvrir plus tard' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl">{step.icon}</div>
                <p className="mt-2 font-semibold text-sky-800">{step.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formulaire en bas */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 mt-16 z-20">
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
    </>
  )
}
