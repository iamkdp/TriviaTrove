import Quiz from './components/Quiz'
function App() {

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-start">
      <header className="w-full bg-gray-224 py-6 mb-4 shadow-md">
        <h1 className="text-3xl text-center font-extrabold text-blue-600 tracking-widest">TriviaTrove</h1>
      </header>
      <main className='flex-1 w-full flex flex-col items-center'>
        <Quiz />
      </main>
    </div>
  )
}

export default App
