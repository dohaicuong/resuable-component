import * as React from "react"
import { CircularProgress, Container, Paper } from "@mui/material"
import { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import { OverviewGroup } from "./OverviewGroup"
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ThemeProvider } from "../ThemeProvider"
import { OverviewPage } from "./OverviewPage"

export class XOverviewGroup extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)

    const emotionPoint = this.shadowRoot!.appendChild(document.createElement('div'))
    const emotionCache = createCache({
      key: 'report-component',
      container: emotionPoint
    })
    
    const root = createRoot(mountPoint)
    root.render(
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <OverviewPage />
        </ThemeProvider>
      </CacheProvider>
    )
  }
}
