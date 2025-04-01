import localFont from 'next/font/local'

// const myFont = localFont({
//     src: '/fonts/VTCGoblinHand.ttf',
//   })

export default function HomeOne() {

    return (
        <div className="flex flex-col size-[90%] items-center justify-evenly border-4 border-indigo-600">
            <div className="absolute top-[6em] left-[6em] flex justify-center items-center w-[16em] h-[4em] bg-red-600 -rotate-6">
                <h2>HOME</h2>
            </div>
            <div className="flex w-[100%] h-[40%] items-center justify-center border-4 border-yellow-600 text-center">
                <h3 className=""><b>Developpement</b> is the key to <b>infinite creativity</b> in the <b>digital World</b></h3>
            </div>
            <div className="flex w-[100%] h-[40%] items-center justify-center border-4 border-yellow-600">
                <div>
                    <p>

                    </p>
                    <div className="divide-y-4 divide-[#a68458]"></div>
                </div>
                <p>
                Welcome dear adventurer ! If you have stumbled upon my
                most humble of creation, it is with great enthusiasm that I invite
                you to browse it's content !
                In it you shall find all there is about mine own experience as a Developper 
                and some of the projects I've contributed to.
                </p>
            </div>
        </div>
    )
}