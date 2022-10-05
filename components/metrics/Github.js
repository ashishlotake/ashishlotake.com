import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'

export default function GithubCard() {
  const { data } = useSWR('/api/github-stats', fetcher)

  const stars = new Number(data?.stars)
  const followers = new Number(data?.followers)
  const link = 'https://github.com/ashishlotake'

  if (!data) {
    return null
  }

  return (
    <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      {/* <MetricCard header="GitHub Stars" link={link} metric={stars} isCurrency={false} /> */}
      <img 
        src='https://github-readme-stats.vercel.app/api?username=ashishlotake&show_icons=true&hide_title=true'
        className='items-center rounded-lg '
        width="100%"
        />
      <MetricCard header="Github Followers" link={link} metric={followers} isCurrency={false} />
    </div>
  )
}
