import { LoadingFrame } from "@/styles/components/loading";

const Loading = () => {
    return (
        <div className="flex gap-6 w-full h-full items-center justify-center bg-transparent fixed">
            <LoadingFrame className="bg-black rounded-full w-6 h-6"/>
            <LoadingFrame className="bg-black rounded-full w-6 h-6"/>
            <LoadingFrame className="bg-black rounded-full w-6 h-6"/>
        </div>
    );
} 

export default Loading;