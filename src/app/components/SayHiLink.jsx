
import { HiOutlineMail } from "react-icons/hi";

export default function SayHiLink() {
    return (
        <a
            href="#sayhi"
            className="flex items-center gap-2"
        >
            {" "}
            <HiOutlineMail size={20} />
            Say Hi!
        </a>
    )
}