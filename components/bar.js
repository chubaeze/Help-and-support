import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    day: 'Rating 1',
    degress: 59,
  },
  {
    day: 'Rating 2',
    degress: 61,
  },
  {
    day: 'Rating 3',
    degress: 55,
  },
  {
    day: 'Rating 4',
    degress: 78,
  },
  {
    day: 'Rating 5',
    degress: 71,
  },
]

const Bar = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={['degress']}
      indexBy="day"
      margin={{ top: 20, right: 10, bottom: 50, left: 60 }}
      padding={0.4}
      layout="horizontal"
      valueScale={{ type: 'linear' }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  )
}

export default Bar
