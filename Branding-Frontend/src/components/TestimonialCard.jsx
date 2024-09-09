import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
 
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-50 w-50 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
 
export default function TestimonialCard() {
  return (
    // color="transparent"
    <>
    <Card  shadow={false} className="w-full sm:max-w-[20rem] md:max-w-[60rem] lg:max-w-[76rem] mt-[4rem]">
      <CardHeader
        // color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8 pl-[10px]"
      >
        <Avatar
          // size="sm"
          // variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
          className="rounded-full w-[100px] h-[100px] border-[4px] border-[#fca311]"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center ">
            <Typography variant="h5" color="blue-gray">
              Alexendra
            </Typography>
           
          </div>
          <Typography color="blue-gray">CEO of Webdeezien</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 px-5">
        <Typography>
          {/* &quot; */}
          Creative Tim has been a game-changer for all my design projects! Their templates are top-notch, and they've made my freelance work so much easier and enjoyable. Plus, the pricing is super affordable, and the team is incredibly supportive and humble. Highly recommend! 🎨🙌
          {/* &quot; */}
        </Typography>
      </CardBody>
    </Card>

    <Card  shadow={false} className="w-full sm:max-w-[20rem] md:max-w-[60rem] lg:max-w-[76rem] mt-[4rem]">
      <CardHeader
        // color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8 pl-[10px]"
      >
        <Avatar
          // size="sm"
          // variant="circular"
          src="https://media.licdn.com/dms/image/v2/D5603AQHAN2xQnQGNSg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686194483238?e=1731542400&v=beta&t=pZZNO3hpHxTjv578NUkCz0oJJjVEaqActK2MWiI3dD8"
          alt="tania andrew"
          className="rounded-full w-[100px] h-[100px] border-[4px] border-[#fca311]"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center ">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
           
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 px-5">
        <Typography>
          {/* &quot; */}
          I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!
          {/* &quot; */}
        </Typography>
      </CardBody>
    </Card>

    </>
  );
}
