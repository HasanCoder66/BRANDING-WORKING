import Blogging from "../../assets/servicesImages/Blogging.jpg";
import CWriting from "../../assets/servicesImages/content writing.jpg";
import Content from "../../assets/servicesImages/content.jpg";
import GDesign from "../../assets/servicesImages/graphic design.jpg";
import PPC from "../../assets/servicesImages/pay per click.jpg";
import SEO from "../../assets/servicesImages/search engine optimization.jpg";
import SocialMedia from "../../assets/servicesImages/social media.jpg";
import VideoAnimation from "../../assets/servicesImages/video animation.jpg";
import webDev from "../../assets/servicesImages/web design & development.jpg";
// import webdesign from "../../assets/servicesImages/web design.jpg";

const data = [
  {
    id: "1",
    // Icon : <CodeIcon />,
    imgUrl: webDev,
    title: "Web Design & Development",
    desc:
      "Craft captivating websites that not only look stunning but also drive conversions, ensuring a seamless user experience every step of the way. ",
    buttonContent: "View Packages",
    routeLink: "/packages/web",
  },
  {
    id: "2",
    imgUrl:VideoAnimation,
    title: "Video Animation",
    desc:
      "Bring your brand to life with captivating video animations that engage your audience and convey your message in a dynamic and memorable way. ",
    buttonContent: "View Packages",
    routeLink: "/packages/video",
  },
  {
    id: "3",
    imgUrl:GDesign,
    title: "Graphic Design",
    buttonContent: "View Packages",
    desc:
      "From logos to marketing collateral, our graphic design services help you stand out with visually compelling assets that reflect your brand identity.",
      routeLink: "/packages/graphicdesign",
  },
  {
    id: "4",
    imgUrl:SocialMedia,
    buttonContent: "View Packages",
    title: "Social Media Management",
    desc:
      "Build a strong social presence and foster meaningful connections with your audience through strategic content, engagement, and analytics-driven insights. ",
      routeLink: "/packages/smm",
  },
  {
    id: "5",
    buttonContent: "View Packages",
    imgUrl:SEO,
    title: "Search Engine Optimization",
    desc:
      "Increase your online visibility and drive organic traffic to your website with our proven SEO strategies tailored to your business goals. ",
      routeLink: "/packages/seo",
  },

  {
    id: "6",
    buttonContent: "View Packages",
    imgUrl:PPC,
    title: "Pay Per Click (PPC)",
    desc:
      "Maximize your ROI with targeted PPC campaigns across various platforms, ensuring your brand gets noticed by the right audience at the right time.",
      // routeLink: "/packages/seo",
  },
  {
    id: "7",
    buttonContent: "View Packages",
    imgUrl:Content,
    title: "Content Writing",
    desc:
      "Elevate your brand with high-quality content that resonates with your audience, whether it's blog posts, articles, or website copy, we've got you covered. ",
      // routeLink: "/packages/seo",
  },
  {
    id: "8",
    buttonContent: "View Packages",
    imgUrl:Blogging,
    title: "Blogging",
    desc:
      "Establish thought leadership and drive engagement with regular blog posts that provide value to your audience and keep them coming back for more.",
      // routeLink: "/packages/seo",
  },
  {
    id: "10",
    buttonContent: "View Packages",
    imgUrl:CWriting,
    title: "English, Arabic, Urdu Typing",
    desc:
      "Seamlessly communicate with your audience in their preferred language with our typing services, ensuring your message is clear and culturally relevant. ",
    // routeLink: "/packages/typing",
  },
  // {
  //   id: "9",
  //   buttonContent: "View Packages",
  //   imgUrl:
  //     "https://img.freepik.com/free-vector/writer-work-attributes-accessories-tools-isometric-horizontal-web-banner-with-books-typewriter-glasses-pen_1284-55418.jpg?size=626&ext=jpg&uid=R135466208&ga=GA1.1.1540570184.1698578526&semt=ais",
  //   title: "Copywriting",
  //   desc:
  //     "Craft compelling copy that captures attention, conveys your brand message effectively, and drives action, whether it's for ads, websites, or campaigns. ",
  //   // routeLink: "/packages/seo",
  // },
];

export default data;
