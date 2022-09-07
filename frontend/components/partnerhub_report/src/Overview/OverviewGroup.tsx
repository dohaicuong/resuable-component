import * as React from 'react'
import { useOverview } from './useOverview'
import { Divider, Grid } from '@mui/material'
import { Apartment, BookmarkAdded, Person, PostAdd } from '@mui/icons-material'
import { Overview } from './Overview'
export const OverviewGroup = () => {
  const data = useOverview()
  return (
    <Grid container spacing={2}>
      <Grid item xs style={{ display: 'flex', justifyContent: 'center' }}>
        <Overview
          icon={<Apartment />}
          title='Active customers'
          subtitle={`${data.customer.active}/${data.customer.total}`}
          trend_type={data.customer.trend}
          trend_value={data.customer.trend_value}
        />
      </Grid>
      <Divider orientation='vertical' flexItem />

      <Grid item xs style={{ display: 'flex', justifyContent: 'center' }}>
        <Overview
          icon={<Person />}
          title='Active learners'
          subtitle={`${data.learner.active}/${data.learner.total}`}
          trend_type={data.learner.trend}
          trend_value={data.learner.trend_value}
        />
      </Grid>
      <Divider orientation='vertical' flexItem />

      <Grid item xs style={{ display: 'flex', justifyContent: 'center' }}>
        <Overview
          icon={<PostAdd />}
          title='Entrollments started'
          subtitle={`${data.enrollment.value}`}
          trend_type={data.enrollment.trend}
          trend_value={data.enrollment.trend_value}
        />
      </Grid>
      <Divider orientation='vertical' flexItem />

      <Grid item xs style={{ display: 'flex', justifyContent: 'center' }}>
        <Overview
          icon={<BookmarkAdded />}
          title='Completion rate'
          subtitle={`${data.completion_rate.value}%`}
          trend_type={data.completion_rate.trend}
          trend_value={data.completion_rate.trend_value}
        />
      </Grid>
    </Grid>
  )
}
