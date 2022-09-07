import * as React from 'react'
import { TrendType } from './useOverview'
import { Stack, Typography } from '@mui/material'
import { Trend } from './Trend'

type OverviewProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
  trend_type: TrendType
  trend_value: number
}

export const Overview: React.FC<OverviewProps> = ({ icon, title, subtitle, trend_type, trend_value }) => (
  <Stack>
    {icon}
    <Typography variant='subtitle1'>{title}</Typography>
    <Typography variant='h4'>{subtitle}</Typography>
    <Trend
      type={trend_type}
      value={trend_value}
    />
  </Stack>
)
