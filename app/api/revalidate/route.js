import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  
  // সিকিউরিটি চেক (আপনার নিজের সিক্রেট কী)
  const VALID_SECRET = 'rajon_dev_store_secret_2026'
  
  if (secret !== VALID_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    // সব পেজ রিভ্যালিডেট করুন
    revalidateTag('apps')
    revalidateTag('settings')
    
    return NextResponse.json({ 
      revalidated: true, 
      message: 'All pages revalidated successfully' 
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}