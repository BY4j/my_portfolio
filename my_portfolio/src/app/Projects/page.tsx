import Header from "../../components/Header";
import BookFrame from "../../components/BookFrame";
import Background from "@/components/Background";
import ProjectComponent from "@/components/ProjectComponent";

export default function Projects() {

    return (
        <Background>
            <BookFrame>
                <Header />
                <ProjectComponent/>
            </BookFrame>

        </Background>
    );
} 