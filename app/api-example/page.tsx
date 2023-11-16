"use client"

import { useEffect, useState } from "react"

export default function Page() {
  const [data, setData] = useState()
  useEffect(() => {
    ;(async () => {
      const res = await fetch("/api/protected")
      const json = await res.json()
      setData(json)
    })()
  }, [])
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Route Handler Usage</h1>
     
      <h2 className="text-xl font-bold">Data from API Route:</h2>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  )
}