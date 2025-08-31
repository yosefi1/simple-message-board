'use client'

import { useState, useEffect } from 'react'
import { MessageForm } from './MessageForm'
import { MessageList } from './MessageList'
import { Message } from '@/lib/db/schema'

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages')
      if (response.ok) {
        const data = await response.json()
        setMessages(data)
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const handleMessagePosted = (newMessage: Message) => {
    setMessages(prev => [newMessage, ...prev])
  }

  return (
    <div className="space-y-6">
      <MessageForm onMessagePosted={handleMessagePosted} />
      
      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Loading messages...</p>
        </div>
      ) : (
        <MessageList messages={messages} />
      )}
    </div>
  )
}
