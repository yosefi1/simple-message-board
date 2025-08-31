import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { messages } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'

export async function GET() {
  try {
    const allMessages = await db
      .select()
      .from(messages)
      .orderBy(desc(messages.createdAt))
    
    return NextResponse.json(allMessages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { author, content } = await request.json()
    
    if (!author || !content) {
      return NextResponse.json(
        { error: 'Author and content are required' },
        { status: 400 }
      )
    }
    
    if (author.length > 50) {
      return NextResponse.json(
        { error: 'Author name must be 50 characters or less' },
        { status: 400 }
      )
    }
    
    if (content.length > 500) {
      return NextResponse.json(
        { error: 'Message content must be 500 characters or less' },
        { status: 400 }
      )
    }
    
    const [newMessage] = await db
      .insert(messages)
      .values({
        author: author.trim(),
        content: content.trim(),
      })
      .returning()
    
    return NextResponse.json(newMessage, { status: 201 })
  } catch (error) {
    console.error('Error creating message:', error)
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    )
  }
}
