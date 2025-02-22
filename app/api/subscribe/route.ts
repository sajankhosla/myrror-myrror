import { NextResponse } from 'next/server';

// In a real application, you would want to store this in a database
const subscribers: string[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { message: 'You are already subscribed!' },
        { status: 400 }
      );
    }

    // Add email to subscribers list
    subscribers.push(email);

    // In a real application, you would:
    // 1. Store the email in a database
    // 2. Send a welcome email
    // 3. Maybe integrate with a newsletter service like Mailchimp

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 