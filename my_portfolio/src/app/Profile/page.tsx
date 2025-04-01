import Background from "../../components/Background";
import Header from "../../components/Header";
import BookFrame from "../../components/BookFrame";
import Page from "../../components/Page";
import Image from "next/image";

export default function Home() {

    return (
        <Background>
            <BookFrame>
                <Header />
                <Page>
                    <div className="absolute top-[0.9em] left-[0.1em] flex justify-center items-center w-[16em] h-[4em] bg-[#443020] -rotate-6">
                        <h2>Profile</h2>
                    </div>
                    <div className="flex flex-col size-[90%] items-center justify-evenly border-4 border-indigo-600">
                        <div className="flex w-[100%] h-[45%] items-center justify-evenly border-4 border-green-600">
                            <div className="flex w-[33%] h-[100%] justify-center border-4 border-yellow-600 text-justify p-[0.8em]">
                                <p>
                                    <span>
                                        Hey it's me ! The author of this website !
                                    </span>
                                </p>
                            </div>
                            <div className="relative flex w-[77%] h-[100%] items-center justify-center border-4 border-yellow-600 bg-gray-600">
                                <div className="absolute top-[0.2em] right-[-0.5] flex justify-center items-center w-[16em] h-[4em] bg-[#443020] rotate-6">
                                    <h3 id="author">The author</h3>
                                </div>
                                <Image
                                    src="/author.jpg" // Image in the public folder
                                    alt="A picture of the author of this website"
                                    width={200}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="flex w-[100%] h-[45%] flex-col relative items-center justify-center border-4 border-green-600">
                            <div className="absolute top-[0] center flex justify-center items-center w-[20em] h-[4em] bg-[#443020]">
                                <h3>Soft skills</h3>
                            </div>
                            <div className="flex w-[100%] flex-wrap justify-center items-center gap-[2em] border-4 border-green-600">
                                <div className="flex justify-center items-center w-[25%] h-[8em] border-4 border-yellow-600">
                                    Creative
                                </div >
                                <div className="flex justify-center items-center w-[25%] h-[8em] border-4 border-yellow-600">
                                    Curious
                                </div>
                                <div className="flex justify-center items-center w-[25%] h-[8em] border-4 border-yellow-600">
                                    Open minded
                                </div>
                            </div>
                            <div className="flex justify-center items-center w-[100%] mt-[1em] border-4 border-blue-500">
                                <a href="/CV_Brandon_YANG.pdf" download className="hover:text-blue-500">
                                    Download my resume !
                                </a>
                            </div>
                        </div>
                    </div>
                </Page>
                <Page>
                    <div className="flex flex-col size-[90%] items-center justify-end border-4 border-indigo-600 gap-[0.2em]">
                        <div className="absolute top-[0.9em] center flex justify-center items-center w-[40em] h-[4em] bg-[#443020]">
                            <h3>Technical Skills</h3>
                        </div>
                        <div className="flex flex-col w-[100%] h-[50%] justify-center items-center border-4 border-yellow-600 text-justify">
                            <div className="flex justify-center items-center w-[80%] border-4 border-">
                                <h3>Front</h3>
                            </div>
                            <div className="flex w-[100%] flex-wrap justify-center items-center gap-[2em] border-4 border-green-600">
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    HTML
                                </div >
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    CSS
                                </div>
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    JS
                                </div>
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    REACT
                                </div>
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    NEXT.JS
                                </div>
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    SASS
                                </div>
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    TAILWIND
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[100%] h-[50%] justify-center items-center border-4 border-yellow-600 text-justify">
                            <div className="flex justify-center items-center w-[80%] border-4 border-">
                                <h3>Back</h3>
                            </div>
                            <div className="flex w-[100%] flex-wrap justify-center items-center gap-[2em] border-4 border-green-600">
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    SQL
                                </div >
                                <div className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                    PHP
                                </div>
                            </div>
                        </div>

                    </div>
                </Page>
            </BookFrame>
        </Background >
    );

}
