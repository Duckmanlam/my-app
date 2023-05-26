import Menu from '../menu'
import Index from './Chat-content'

export default function Chat() {
  return (
    <div>
    <>
    <div className="flex mt-[4.7rem] md:mt-0">
        <Menu/>
      <div className="content">
        <Index/>
      </div>
    </div>
  </>
</div>
  )
}
