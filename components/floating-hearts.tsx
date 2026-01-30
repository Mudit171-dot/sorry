'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
  opacity: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const createHearts = () => {
      const newHearts: Heart[] = []
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 6 + Math.random() * 4,
          opacity: 0.3 + Math.random() * 0.5,
        })
      }
      setHearts(newHearts)
    }

    createHearts()
  }, [])

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none text-2xl md:text-4xl animate-float"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            opacity: heart.opacity,
            animation: `float-up ${heart.duration}s ease-in infinite`,
            animationDelay: `${heart.delay}s`,
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          ❤️
        </div>
      ))}

      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${(Math.random() - 0.5) * 100}px);
            opacity: 0;
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(${(Math.random() - 0.5) * 30}px);
          }
        }

        .animate-float {
          animation: float-up 8s ease-in infinite, sway 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
