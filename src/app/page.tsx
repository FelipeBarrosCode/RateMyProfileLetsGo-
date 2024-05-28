
import Image from 'next/image'
import HeaserToUseOnIntro from './ui/Header'
import MovementIcons from './ui/ImageMovement'
import BodyMainPage from './ui/BodyMainPage'
import FooterToUseOnIntro from './ui/Footer'



export default function Home() {


  return (

    <>
      <div className='flex flex-col overflow-x-hidden gap-6'>
        <HeaserToUseOnIntro />

        <MovementIcons />


        <BodyMainPage />

        <FooterToUseOnIntro/>
        
      </div>


    </>



  )
}
