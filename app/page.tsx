import MessageBoard from '@/components/MessageBoard'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Simple Message Board
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Share your thoughts with the world! Anyone can post a message.
        </p>
      </div>
      
      <MessageBoard />
    </main>
  )
}
