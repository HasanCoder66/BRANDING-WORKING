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
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cZw93qHlm4yQYn2jeJ6KaUEpNV4hKgvNWdr85O5z8Q&s",
    title: "Web Design & Development",
    desc:
      "Craft captivating websites that not only look stunning but also drive conversions, ensuring a seamless user experience every step of the way. ",
    buttonContent: "View Packages",
    routeLink: "/packages/web",
  },
  {
    id: "2",
    imgUrl:VideoAnimation,
      // "https://img.freepik.com/free-vector/influencer-recording-new-video_23-2148527130.jpg?size=626&ext=jpg&uid=R135466208&ga=GA1.1.1540570184.1698578526&semt=ais",
    title: "Video Animation",
    desc:
      "Bring your brand to life with captivating video animations that engage your audience and convey your message in a dynamic and memorable way. ",
    buttonContent: "View Packages",
    routeLink: "/packages/video",
  },
  {
    id: "3",
    imgUrl:GDesign,
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4oPrbYJ2mFyDWlt0StogzLwkMsVkoptw55--sN06h79mqZumxWL_YsiG-Jw257P07-M&usqp=CAU",
    title: "Graphic Design",
    buttonContent: "View Packages",
    desc:
      "From logos to marketing collateral, our graphic design services help you stand out with visually compelling assets that reflect your brand identity.",
      routeLink: "/packages/graphicdesign",
  },
  {
    id: "4",
    imgUrl:SocialMedia,
      // "https://www.shutterstock.com/image-vector/social-media-management-network-engagement-260nw-779194723.jpg",
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
      // "https://img.freepik.com/premium-photo/person-manage-search-engine-optimization-seo-digital-marketing-with-social-media-content_34141-1044.jpg?w=826",
      // (SEO)
    title: "Search Engine Optimization",
    desc:
      "Increase your online visibility and drive organic traffic to your website with our proven SEO strategies tailored to your business goals. ",
      routeLink: "/packages/seo",
  },

  {
    id: "6",
    buttonContent: "View Packages",
    imgUrl:PPC,
      // "https://img.freepik.com/free-vector/website-traffic-growth-banner-computer-with-diagrams-growth-charts-magnifying-glass_80328-169.jpg?size=626&ext=jpg&uid=R135466208&ga=GA1.1.1540570184.1698578526&semt=ais",
    title: "Pay Per Click (PPC)",
    desc:
      "Maximize your ROI with targeted PPC campaigns across various platforms, ensuring your brand gets noticed by the right audience at the right time.",
      // routeLink: "/packages/seo",
  },
  {
    id: "7",
    buttonContent: "View Packages",
    imgUrl:Content,
      // "https://img.freepik.com/free-vector/content-writing-typographic-header-professional-speaker-journalist-write-speech-public-announcement-copywriter-creating-text-media-flat-vector-illustration_613284-2212.jpg?size=626&ext=jpg&uid=R135466208&ga=GA1.1.1540570184.1698578526&semt=ais",
    title: "Content Writing",
    desc:
      "Elevate your brand with high-quality content that resonates with your audience, whether it's blog posts, articles, or website copy, we've got you covered. ",
      // routeLink: "/packages/seo",
  },
  {
    id: "8",
    buttonContent: "View Packages",
    imgUrl:Blogging,
      // "https://img.freepik.com/free-vector/publish-article-concept-illustration_114360-4926.jpg?size=626&ext=jpg&uid=R135466208&ga=GA1.1.1540570184.1698578526&semt=sph",
    title: "Blogging",
    desc:
      "Establish thought leadership and drive engagement with regular blog posts that provide value to your audience and keep them coming back for more.",
      // routeLink: "/packages/seo",
  },
  {
    id: "10",
    buttonContent: "View Packages",
    imgUrl:CWriting,
      // "https://img.freepik.com/free-photo/one-person-typing-laptop-office-generated-by-ai_188544-39272.jpg?size=626&ext=jpg&uid=R135466208&ga=GA1.1.1540570184.1698578526&semt=sph",
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
