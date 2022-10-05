import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'

export default function AnalyticsCard() {
  const { data } = useSWR('/api/views', fetcher)

  const pageViews = new Number(data?.total)
  const link = 'https://ashishlotake.com/'

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} isCurrency={false} />
}
