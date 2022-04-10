import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { Action, createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @return {JSX.Element}
 */
export default function NextBridgeRouter({ children }) {
  const router = useRouter()
  const [history] = useState(() => createMemoryHistory())

  useIsomorphicLayoutEffect(() => {
    return history.listen(({ action, location }) => {
      switch (action) {
        case Action.Push:
          router.push(location.pathname)
          break
        case Action.Replace:
          router.replace(location.pathname)
          break
        case Action.Pop:
          router.back()
          break
        default:
          console.error('Unhandled transition', action, location)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <HistoryRouter history={history}>{children}</HistoryRouter>
}

/**
 * @param {object} props
 * @param {string} [props.basename]
 * @param {import('react').ReactNode} [props.children]
 * @param {import('history').History} props.history
 * @return {JSX.Element}
 */
const HistoryRouter = ({ basename, children, history }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useIsomorphicLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={basename}
      /* @ts-ignore react-router-dom and its type mismatch */
      history={history}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  )
}


const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
