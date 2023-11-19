'use client'
import Topbar from '@/components/Topbar'
import { UserContext } from '@/contexts/UserContext'
import { useState } from 'react'

function App({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string>('')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Topbar />
      {children}
    </UserContext.Provider>
  )
}

export default App
