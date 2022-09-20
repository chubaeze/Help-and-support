import { data } from '../components/line'
import dynamic from 'next/dynamic'
import 'twin.macro'

const MyResponsiveLine = dynamic(() => import('../components/line'), {
  ssr: false,
})

const Chart = () => {
  return (
    <div tw="h-screen m-4">
      <MyResponsiveLine data={data} />
    </div>
  )
}
export default Chart
