import { OverviewGroup } from '@go1d/partnerhub_report'
import { Container, Paper } from '@mui/material'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const App = () => {
  return (
    <Container maxWidth='md'>
      <Paper style={{ padding: 32, marginTop: 32 }}>
        <ErrorBoundary fallback={<>Something went wrong, try again!</>}>
          <Suspense fallback='Loading...'>
            <OverviewGroup />
          </Suspense>
        </ErrorBoundary>
      </Paper>
    </Container>
  )
}

export default App
