import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
    return (
        <section className="relative w-[49%] h-[100%] p-[1em] border-red-600 flex justify-center items-center border-4 border-indigo-600 bg-[#c8b28b]">
            {children}
        </section>
    )
}