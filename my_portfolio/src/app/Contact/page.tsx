import Header from "../../components/Header";
import BookFrame from "../../components/BookFrame";
import Page from "../../components/Page";
import Background from "@/components/Background";
import ContactForm from "../../components/ContactForm"

export default function Contact() {
  return (
    <Background>
      <BookFrame>
        <Header />
        <Page>
          <div className="absolute top-[0.9em] left-[0.1em] flex justify-center items-center w-[16em] h-[4em] bg-[#443020] -rotate-6">
            <h2>Contact</h2>
          </div>
          <div className="flex flex-col size-[90%] items-center justify-evenly border-4 border-indigo-600">
            <div className="flex w-[100%] h-[40%] items-center justify-center border-4 border-yellow-600 text-justify">
              <p>
                <span>
                  If you've liked what you have seen today and wish to either work with me or discuss any work related subjects
                  feel free to send me a mail with this form !
                </span>
              </p>
            </div>
          </div>
        </Page>
        <Page>
          <div></div>
        </Page>
        <ContactForm/>
      </BookFrame>
    </Background>
  );
} 