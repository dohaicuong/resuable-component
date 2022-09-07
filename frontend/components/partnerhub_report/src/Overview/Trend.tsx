import * as React from 'react'
import { TrendingDown, TrendingUp } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { TrendType } from './useOverview'

type TrendProps = {
  value: number
  type: TrendType
}

export const Trend: React.FC<TrendProps> = ({ value, type }) => (
  <Stack direction='row' spacing={1}>
    <span>{value}%</span>
    {type === 'UP' && <TrendingUp color='success' />}
    {type === 'DOWN' && <TrendingDown color='error' />}
  </Stack>
)
