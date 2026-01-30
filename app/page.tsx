'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'

const FloatingHearts = dynamic(() => import('@/components/floating-hearts'), {
  ssr: false,
})

const GlowingParticles = dynamic(() => import('@/components/glowing-particles'), {
  ssr: false,
})

const TypewriterText = dynamic(() => import('@/components/typewriter-text'), {
  ssr: false,
})

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [showForgivenessMessage, setShowForgivenessMessage] = useState(false)
  const [showChoice, setShowChoice] = useState(false)
  const [showPleaseMessage, setShowPleaseMessage] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && currentSection < 5) {
        setTimeout(() => setCurrentSection(currentSection + 1), 500)
      } else if (e.deltaY < 0 && currentSection > 0) {
        setTimeout(() => setCurrentSection(currentSection - 1), 500)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentSection])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5e6f0] via-[#f0e6ff] to-[#fff5e6] overflow-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      <GlowingParticles />

      {/* Music Toggle */}
      <button
        onClick={() => setIsMusicPlaying(!isMusicPlaying)}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-pink-200 hover:scale-110"
        aria-label="Toggle music"
      >
        <span className="text-xl">{isMusicPlaying ? '🔊' : '🔇'}</span>
      </button>

      {/* Section 1: Opening Screen */}
      <div
        className={`min-h-screen w-full flex flex-col items-center justify-center transition-all duration-1000 ${currentSection >= 0 ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-pink-300 animate-pulse-slow"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            I'm Sorry Roktima
          </h1>
          <p className="text-5xl mb-8 animate-bounce-gentle">❤️🥺</p>
          <p className="text-gray-600 text-lg md:text-xl animate-fade-in-delay">
            Please let me explain...↓
          </p>
        </div>
      </div>

      {/* Section 2: Apology Message */}
      <div
        className={`min-h-screen w-full flex flex-col items-center justify-center px-4 transition-all duration-1000 ${currentSection >= 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-pink-500">
            Please forgive me 🥺
          </h2>
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-pink-100">
            <TypewriterText
              text="I was just looking for a good movie to send you babe. And If I knew that it would take this much time I would have not cut the call and searched for it while talking to you. I was being forced to bath and eat something so I didn't wanted you to listen all that stuff so I went and done what I told you right after that I would have called you but you switched your phone off. Please don't do that again"
              speed={30}
            />
          </div>
        </div>
      </div>

      {/* Section 3: Why You Mean So Much To Me */}
      <div
        className={`min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 transition-all duration-1000 ${currentSection >= 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-purple-500">
          Please Try to understand babiee..!!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
          {[
            { title: '💫', text: 'Your smile lights up my entire world' },
            { title: '🌸', text: 'So Please don\'t be angry on me' },
            { title: '✨', text: 'Your laugh is my favorite sound' },
            { title: '💗', text: 'So Please don\'t be angry on me' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in border border-pink-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl mb-3">{item.title}</p>
              <p className="text-gray-700 font-medium text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: A Promise */}
      <div
        className={`min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 transition-all duration-1000 ${currentSection >= 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-peach-500" style={{ color: '#FFB88C' }}>
          A Promise
        </h2>
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-orange-100">
            {[
              { icon: '🤝', promise: 'I will try to never hurt you again' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 mb-6 last:mb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <p className="text-lg text-gray-700 pt-1 font-medium">{item.promise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Section 5: Final Button & Forgiveness Message */}
      <div
        className={`min-h-screen w-full flex flex-col items-center justify-center px-4 transition-all duration-1000 ${currentSection >= 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        {!showChoice && !showForgivenessMessage ? (
          <div className="text-center">
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-medium">
              Will you please understand me?
            </p>
            <button
              onClick={() => setShowChoice(true)}
              className="group relative px-10 py-4 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #ff6b9d 0%, #c77dff 100%)',
                boxShadow: '0 0 30px rgba(255, 107, 157, 0.6)',
              }}
            >
              <span className="absolute inset-0 bg-white/20 animate-pulse-slow"></span>
              <span className="relative flex items-center justify-center gap-2">
                Can You Forgive Me? ❤️
              </span>
            </button>
          </div>
        ) : showChoice && !showForgivenessMessage ? (
          <div className="text-center animate-fade-in">
            {!showPleaseMessage ? (
              <>
                <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-medium">
                  Do you forgive me? 🥺
                </p>
                <div className="flex gap-6 justify-center">
                  <button
                    onClick={() => setShowForgivenessMessage(true)}
                    className="group relative px-12 py-4 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                      boxShadow: '0 0 30px rgba(74, 222, 128, 0.6)',
                    }}
                  >
                    <span className="absolute inset-0 bg-white/20 animate-pulse-slow"></span>
                    <span className="relative">Yes ✅</span>
                  </button>
                  <button
                    onClick={() => setShowPleaseMessage(true)}
                    className="group relative px-12 py-4 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
                      boxShadow: '0 0 30px rgba(248, 113, 113, 0.6)',
                    }}
                  >
                    <span className="absolute inset-0 bg-white/20 animate-pulse-slow"></span>
                    <span className="relative">No ❌</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="animate-fade-in">
                <div className="mb-8 text-6xl animate-bounce-gentle">🥺</div>
                <p className="text-3xl md:text-4xl text-pink-500 mb-8 font-bold">
                  Please... 🙏
                </p>
                <p className="text-xl text-gray-700 mb-12 max-w-xl mx-auto">
                  I know I made a mistake. Please give me one more chance. I promise I'll never hurt you again. 💔
                </p>
                <button
                  onClick={() => setShowPleaseMessage(false)}
                  className="group relative px-10 py-4 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b9d 0%, #c77dff 100%)',
                    boxShadow: '0 0 30px rgba(255, 107, 157, 0.6)',
                  }}
                >
                  <span className="absolute inset-0 bg-white/20 animate-pulse-slow"></span>
                  <span className="relative">Try Again 💝</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="mb-12 text-6xl md:text-8xl animate-bounce-gentle">
              🤗
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-pink-300 mb-6"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              Thank You
            </h3>
            <p className="text-2xl text-gray-700 font-medium animate-fade-in-delay">
              I'll keep trying every day ❤️
            </p>
            <p className="text-lg text-gray-600 mt-8 max-w-xl mx-auto leading-relaxed">
              Your forgiveness means everything to me. I promise to be the person you deserve, to grow with you, and to cherish every moment we share. Thank you for understanding me.
            </p>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
        <div className="text-center text-gray-500 text-sm">
          {currentSection < 5 ? 'Scroll for more' : ''}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
