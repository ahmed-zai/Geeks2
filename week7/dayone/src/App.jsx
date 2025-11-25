import { useState } from 'react'
import Exercise1 from './exerices1';
import Exercise2 from './exercise2';
import Exercise3 from './exercise3';

function App() {
  const [activeExercise, setActiveExercise] = useState(null);

  return (
    <>
      <div className="border shadow-2xl p-4 m-4 rounded-lg flex gap-4 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <button className="px-4 py-2 bg-white rounded shadow" onClick={() => setActiveExercise(1)}>
          Exercise1
        </button>
        <button className="px-4 py-2 bg-white rounded shadow" onClick={() => setActiveExercise(2)}>
          Exercise2
        </button>
        <button className="px-4 py-2 bg-white rounded shadow" onClick={() => setActiveExercise(3)}>
          Exercise3
        </button>
      </div>

      <div className="m-4 p-4 border shadow-2xl rounded-lg border-b-cyan-200 place-items-center justify-center  ">
        {activeExercise === 1 && <Exercise1 />}
        {activeExercise === 2 && <Exercise2 />}
        {activeExercise === 3 && <Exercise3 />}
      </div>
    </>
  );
}

export default App;
