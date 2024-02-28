'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

const supabase = createClientComponentClient()

const ViewCounter = ({ params, noCount = false, showCount = true }: any) => {
  const [views, setViews] = useState(0)
  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text: params.blog,
        })
        if (error) {
          console.error(
            'error incrementing view count inside try block:',
            error
          )
        }
      } catch (error) {
        console.error(
          'An error occured while incrementing the view count:',
          error
        )
      }
    }
    if (!noCount) {
      incrementView()
    }
  }, [params.blog, noCount])

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: params.blog })
          .single()
        if (error) {
          console.error(
            'error incrementing view count inside try block:',
            error
          )
        }

        setViews(data ? data.count : 0)
      } catch (error) {
        console.error(
          'An error occured while incrementing the view count:',
          error
        )
      }
    }

    getViews()
  }, [params.blog])
  if (showCount) {
    return <div>{views} views</div>
  } else {
    return null
  }
}
export default ViewCounter
