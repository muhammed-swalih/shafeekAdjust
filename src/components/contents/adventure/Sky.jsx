import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Sky() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    if (isMediumScreen) {
        return (
            <div className=' w-full h-auto min-h-screen '>
                <Navbar />
                <div className=' w-[800px] min-h-screen h-auto mx-auto py-14 pt-32
                 '>
                    <div>
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>SKY DIVING</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Exciting, thrilling, and a serious rush of Adrenaline. Sky diving just jump out of a
                            plane and the navigating through the feel fall.
                        </h1>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className=' w-full h-full min-h-screen   '>
<Navbar />
            <div className=' text-2xl mt-10'>
                <h1 className=' uppercase text-center font-medium text-orange-500'>SKY DIVING</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Exciting, thrilling, and a serious rush of Adrenaline. Sky diving just jump out of a
                    plane and the navigating through the feel fall.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Sky