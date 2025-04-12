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
    <>
      <h1 className="text-5xl font-poetic text-sky-700 z-30 animate-fade-up text-center pt-12 leading-[1.2]">
        Capsy
      </h1>

      <div className="relative overflow-hidden bg-gradient-to-b from-sky-200 to-white min-h-screen flex flex-col items-center justify-start text-center pt-40 pb-10 px-4">

      {/* Capsules flottantes suspendues */}
      <div className="fixed top-0 left-0 h-full w-full pointer-events-none z-10">
        {/* Capsule gauche */}
        <div className="absolute top-40 left-[-40px] flex flex-col items-center animate-float-slow">
          <div className="h-40 w-px bg-gray-300 opacity-50"></div>
          <img
            src="/capsule.png"
            alt="Capsule flottante"
            className="w-16 h-16 object-contain drop-shadow-md"
          />
        </div>

        {/* Capsule droite */}
        <div className="absolute top-64 right-[-40px] flex flex-col items-center animate-float-slow">
          <div className="h-40 w-px bg-gray-300 opacity-50"></div>
          <img
            src="/capsule.png"
            alt="Capsule flottante"
            className="w-16 h-16 object-contain drop-shadow-md"
          />
        </div>
      </div>

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

        {/* Formulaire en bas */}
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
    </>
  )
}
