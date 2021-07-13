import { useLayoutEffect, useState } from 'react'

export const useWindowSize = (): {
  width?: number | undefined
  height?: number | undefined
} => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined,
  })

  // use this on nextjs app only
  // comment out on cra use useLayoutEffect instead
  // const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  useLayoutEffect(() => {
    // Handler to call on window resize
    const handleResize = (): void => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    typeof window !== 'undefined' && window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size

    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}
