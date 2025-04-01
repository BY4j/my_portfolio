import Background from "../components/Background";
import Header from "../components/Header";
import BookFrame from "../components/BookFrame";
import Page from "../components/Page";
//import HomeOne from "../components/HomeOne";

export default function Home() {

  return (
    <Background>
      <BookFrame>
        <Header />
        <Page>
          <div className="absolute top-[0.9em] left-[0.1em] flex justify-center items-center w-[16em] h-[4em] bg-[#443020] -rotate-6">
            <h2>HOME</h2>
          </div>
          <div className="flex flex-col size-[90%] items-center justify-evenly border-4 border-indigo-600">
            <div className="flex w-[100%] h-[40%] items-center justify-center border-4 border-yellow-600 text-center">
              <h3 className=""><b>Developpement</b> is the key to <b>infinite creativity</b> in the <b>digital World</b></h3>
            </div>
            <div className="flex w-[100%] h-[40%] items-center justify-center border-4 border-yellow-600 text-justify">
              <p>
                <span>
                  Welcome dear adventurer ! If you have stumbled upon my
                  most humble of creation, it is with great enthusiasm that I invite
                  you to browse it's content !
                  In it you shall find all there is about my own experience as a Developper
                  and some of the projects I've either done or contributed to.
                </span>
              </p>
            </div>
          </div>
        </Page>
        <Page>
          <div className="absolute top-[0.9em] center flex justify-center items-center w-[40em] h-[4em] bg-[#443020] z-[100]">
            <h3>Some things that I like</h3>
          </div>
          <div className="relative flex flex-col size-[90%] items-center justify-evenly border-4 border-indigo-600">
            <div className="absolute top-[5em] left-[0em] flex justify-center items-center w-[55%] h-[33%] border-4 border-yellow-600 bg-gray-500">
              <h3>Tabletop games</h3>
            </div>
            <div className="absolute top-[15em] right-[0em] flex justify-center items-center w-[55%] h-[40%] border-4 border-yellow-600 bg-gray-500">
              <h3>Video games</h3>
            </div>
            <div className="absolute top-[25em] left-[-0.1em] flex justify-center items-center w-[60%] h-[42%] border-4 border-yellow-600 bg-gray-500">
              <h3>Drawing</h3>
            </div>
          </div>
        </Page>
      </BookFrame>
    </Background>
  );

}
