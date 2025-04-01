import { ReactNode } from "react";

export default function Background({children} : {children: ReactNode}) {
    return (
        <div className="h-[100vh] w-[100vw] flex align-center justify-center items-center bg-[url(/bg-two.webp)] bg-center">
            {children}
        </div>
    );
}