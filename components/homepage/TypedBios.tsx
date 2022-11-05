import React from 'react'
import Typed from 'typed.js'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden font-mono">
        <li>Hello!👋</li>
        <li>I'm a builder, learner and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Maharashtra, India 🇮🇳</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">Python</b>.
        </li>
        <li>I work with various data analysis tool 📊.</li>
        <li>I'm a traveller 🏕️.</li>
        <li>I'm a dog person 🐶.</li>
        <li>I'm a sport-guy. I love 🏀 🏊‍♂️ 🏕️ .</li>
        <li>I love sketching 👨‍🎨.</li>
        <li>I love calm and lofi music 🎵.</li>
        <li>I frequently enjoy playing video game 🎮.</li>
        <li>I love coffee ☕.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
