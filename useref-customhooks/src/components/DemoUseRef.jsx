import { useState, useRef } from 'react'

// Demuestra los DOS usos de useRef:
//   1. Referenciar el DOM (enfocar un input).
//   2. Guardar un valor que persiste pero NO re-renderiza.
function DemoUseRef() {
  const [conteoState, setConteoState] = useState(0)
  const conteoRef = useRef(0)        // valor que NO re-renderiza
  const inputRef = useRef(null)      // referencia al input del DOM

  console.log("DemoUseRef se renderizo")

  function sumarRef() {
    conteoRef.current = conteoRef.current + 1
    console.log("Ref ahora vale:", conteoRef.current, "(pero la UI no se actualizo)")
  }

  return (
    <section className="panel">
      <h2>useRef</h2>

      {/* Uso 1: referenciar el DOM */}
      <div className="bloque">
        <input ref={inputRef} type="text" placeholder="Hace click en el boton ▶" />
        <button onClick={() => inputRef.current.focus()}>Enfocar input</button>
      </div>

      {/* Uso 2: state vs ref */}
      <div className="bloque comparacion">
        <div>
          <p className="etiqueta">useState (se ve)</p>
          <p className="numero">{conteoState}</p>
          <button onClick={() => setConteoState(conteoState + 1)}>+1 State</button>
        </div>
        <div>
          <p className="etiqueta">useRef (no re-dibuja)</p>
          <p className="numero">{conteoRef.current}</p>
          <button onClick={sumarRef}>+1 Ref</button>
        </div>
      </div>

      <p className="nota">
        Suma varias veces "+1 Ref": la consola muestra que el valor SUBE, pero la pantalla
        sigue igual. Recien al tocar "+1 State" (que re-dibuja) ves el valor real del ref.
      </p>
    </section>
  )
}

export default DemoUseRef