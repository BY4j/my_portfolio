import { ReactNode } from "react";

export default function BookFrame({children} : {children: ReactNode}) {
    return (
        <section id="book-frame" className="flex justify-between w-[90%] h-[95%] mt-[3em] border-7 border-yellow-600  bg-gray-900">
            {children}
        </section>
    );
}