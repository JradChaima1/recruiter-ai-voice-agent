'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/services/supabaseClient'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const getUserData = async () => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      
      if (sessionError) {
        console.error('Session error:', sessionError.message)
        setLoading(false)
        return
      }

      if (!session) {
        setUser(null)
        setLoading(false)
        return
      }

      const { data: { user: authUser }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error('User error:', userError.message)
        setLoading(false)
        return
      }

      if (authUser) {
        // Check if user exists in our database using email
        const { data: existingUser, error: dbError } = await supabase
          .from('users')
          .select('*')
          .eq('email', authUser.email)
          .single()

        if (dbError && dbError.code !== 'PGRST116') {
          console.error('Database error:', dbError.message)
          setLoading(false)
          return
        }

        if (!existingUser) {
          // Create new user if doesn't exist
          const { data: newUser, error: insertError } = await supabase
            .from('users')
            .insert([
              {
                name: authUser.user_metadata?.full_name || authUser.email.split('@')[0],
                email: authUser.email,
                picture: authUser.user_metadata?.avatar_url || '',
                credits: 0,
                created_at: new Date().toISOString()
              }
            ])
            .select()
            .single()

          if (insertError) {
            console.error('Insert error:', insertError.message)
            setLoading(false)
            return
          }
          setUser(newUser)
        } else {
          setUser(existingUser)
        }
      }
    } catch (error) {
      console.error('Error getting user data:', error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserData()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        getUserData()
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider