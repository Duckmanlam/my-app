import Menu from '../Menu'
import Content_chat from './Chat-Content'

export default function Chat() {
  return (
    <div>
      <>
        <div className="flex mt-[4.7rem] md:mt-0">
          <Menu />
          <div className="content">
            <Content_chat />
          </div>
        </div>
      </>
    </div>
  )
}