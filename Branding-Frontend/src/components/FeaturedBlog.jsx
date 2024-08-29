// import Image from "next/image"
// import Button from "../OrangeButton/Button"
// import Link from "next/link"

import { Link } from "react-router-dom"
import ButtonTwo from "./ButtonTwo"

const FeaturedBlog = () => {
    return (
        <div className="mt-[10px] featureConatiner w-[100%] h-[calc(100vh-70px)] py-[50px] relative tabletRg:flex tabletRg:flex-col tabletRg:justify-center tabletSm:items-center">
            <div className="hidden tabletSm:flex absolute top-0 w-[100%]">
                <div className="imgContainer w-[100%] h-[210px] relative ">
                    <img src='data:image/jpeg;base64,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' className="object-cover" fill />
                </div>
            </div>
            <div className="mainTitle tabletSm:bg-theme-white tabletSm:dark:!bg-theme-black tabletSm:w-[100%] tabletSm:flex tabletSm:justify-center tabletRg:mb-[50px] mt-[50px] mb-[100px] tabletSm:mb-[20px] relative">
                <div className="tabletSm:hidden bg-theme-black dark:bg-theme-white h-[32px] w-1 absolute bottom-[2px] left-[-10px]"></div>
                <h1 className="text-[20px]">This is the <br className="" /> <b className="text-[36px] leading-8 tracking-widest">Headlines</b></h1>
            </div>
            <div className="heading">
                <h1 className="text-[28px] font-semibold tabletSm:text-center">This is the blog heading</h1>
            </div>
            <div className="smallDesc bg-inherit tabletRg:w-[60%] tabletSm:!w-[100%] w-[40%] text-[15px] mb-[60px] tabletSm:text-center tabletSm:mb-[30px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis illo voluptatum eligendi quos, ratione facilis rem fugiat nihil non sapiente cumque labore, velit explicabo tempora quis itaque voluptatem modi delectus.
            </div>
            <Link href={`/`}>
                <ButtonTwo text={`Read More`} />
            </Link>
            <div className="flex">
                <div className="tabletSm:hidden tabletRg:right-0 tabletRg: absolute right-[20%] top-0 h-[100%] w-[35%] rounded-tl-[10.5rem]">
                    <div className="imgContainer w-[100%] h-[calc(100vh-100px)] relative rounded-tl-[10.5rem]">
                            <img src='/img1.jpg' className="object-cover rounded-tl-[10.5rem]" fill />
                    </div>
                </div>
                <div className="tabletRg:hidden absolute right-0 top-0 h-[70%] w-[18%] rounded-br-[10.5rem]">
                    <div className="imgContainer w-[100%] h-[100%] relative rounded-br-[10.5rem]">
                        <img src='/img1.jpg' className="object-cover rounded-br-[10.5rem]" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog