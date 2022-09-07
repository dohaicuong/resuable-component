import { suspend } from "suspend-react"

export type TrendType = 'UP' | 'DOWN'

type OverviewPayload = {
  customer: {
    active: number
    total: number
    trend: TrendType
    trend_value: number
  }
  learner: {
    active: number
    total: number
    trend: TrendType
    trend_value: number
  }
  enrollment: {
    value: number
    trend: TrendType
    trend_value: number
  }
  completion_rate: {
    value: number
    trend: TrendType
    trend_value: number
  }
}

export const useOverview = (
  fromDate: string = '2022-09-02T05:39:44.121Z',
  toDate: string = '2022-09-03T05:39:44.121Z',
) => {
  return suspend(async () => {
    const res = await fetch(`http://0.0.0.0:3000/overview/${fromDate}/${toDate}`)
    return res.json() as Promise<OverviewPayload>
  }, [fromDate, toDate])
}
