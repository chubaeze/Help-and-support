import { data } from '../components/bar'

import dynamic from 'next/dynamic'


const Bar = dynamic(() => import('../components/bar'), {
  ssr: false,
})

const Chart = () => {
  return (
    <div >
      <Bar data={data} />
    </div>
  )
}
export default Chart
