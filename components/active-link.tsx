import { useRouter } from "next/navigation";

export default function ActiveLink({ children, href, className, componentRef }) {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    }

    return (
        <a href={href} onClick={handleClick} className={className} ref={componentRef}>
            {children}
        </a>
    )
}