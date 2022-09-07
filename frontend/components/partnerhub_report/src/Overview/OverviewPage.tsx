import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { CircularProgress, Container, Paper } from '@mui/material'
import { OverviewGroup } from './OverviewGroup'

export const OverviewPage = () => {
  return (
    <Container maxWidth='md'>
      <Paper style={{ padding: 32, marginTop: 32 }}>
        <ErrorBoundary fallback={<>Something went wrong, try again!</>}>
          <Suspense fallback={<CircularProgress />}>
            <OverviewGroup />
          </Suspense>
        </ErrorBoundary>
      </Paper>
    </Container>
  )
}
