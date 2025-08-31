'use client'

import { Message } from '@/lib/db/schema'
import { formatDistanceToNow } from 'date-fns'

interface MessageCardProps {
  message: Message
}

export function MessageCard({ message }: MessageCardProps) {
  const timeAgo = formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {message.author.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {message.author}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {timeAgo}
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {message.content}
      </div>
    </div>
  )
}
