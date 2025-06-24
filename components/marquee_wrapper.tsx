import { ReactNode } from 'react'
type childrenType = {
  children: ReactNode;
}
const Marq_Wrap = ({ children }: childrenType) => {
  return (
    <div className='overflow-hidden flex items-center whitespace-nowrap relative justify-center w-max gap-8'>
      <div className='flex-nowrap flex w-fit gap-8 marquee'>
        {children}
      </div>
    </div>
  )
}

export default Marq_Wrap