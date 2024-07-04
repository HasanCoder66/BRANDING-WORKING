import './button.css'
import { Link } from "react-router-dom"

const Button = ({ text, link }) => {
    return (
        <Link to={link}>
            {/* <button className="cursor-pointer btn">
                <span>{text}</span>
            </button> */}

            <button className="cursor-pointer bg-[#14213d] lg:w-40  text-white font-bold py-3 px-6 rounded-lg  hover:bg-[#fca311] transition ease-in-out duration-300">
                <span>{text}</span>
            </button>
        </Link>
    )
}

export default Button