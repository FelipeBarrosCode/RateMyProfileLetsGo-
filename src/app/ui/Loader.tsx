import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


export default function LoadingIcon() {
    return (<>
        <div className=' flex flex-row justify-center items-center'>
        <Segment className=' w-screen h-32'>
            <Dimmer active>
                <Loader />
            </Dimmer>

            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        </div>



    </>)
}