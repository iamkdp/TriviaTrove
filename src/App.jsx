import Quiz from './components/Quiz'
import ToggleTheme from './components/ToggleTheme'
function App() {
  return (
    <div className="min-h-screen bg-blue-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors flex flex-col items-center justify-start">
      <header className="w-full bg-gray-224 py-8 my-4 shadow-md">
        <h1 className="text-3xl text-center font-extrabold text-blue-600 dark:text-pink-400 tracking-widest">TriviaTrove</h1>
        <h2 className='text-xl text-center font-semibold text-gray-800 dark:text-gray-100'>Play,Have Fun and Learn😉! </h2>
        <ToggleTheme />
      </header>
      <main className='flex-1 w-full flex bg-blue-100 dark:bg-gray-700 flex-col items-center'>
        <Quiz />
      </main>
    </div>
  )
}

export default App
