import image1 from "./assets/img/content.png";
import image2 from "./assets/img/web-design.png";
import image3 from "./assets/img/marketing.png";
import image4 from "./assets/img/green.png";
import image5 from "./assets/img/profile.jpg";
// Digital section data
const digitalData = [
  {
    id: 1,
    title: "Content Writing",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    image: image1,
    borderColorTop: "border-t-custom-blue",
    borderColorLeft: "border-l-custom-blue",
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Tumeric shabby chic prism actually, hot chicken activated charcoal live-edge letterpress.",
    image: image3,
    borderColorTop: "border-t-custom-green",
    borderColorLeft: "border-l-custom-green",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Slow-carb letterpress seitan vexillologist. Migas retro small batch fashion axe succulents.",
    image: image2,
    borderColorTop: "border-t-custom-red",
    borderColorLeft: "border-l-custom-red",
  },
];

// Blogs Data
const blogData = [
  {
    id: 1,
    title: "Keyword Research The Definitive Guide(2020 Updated)",
    name: "Olivia",
    date: "Last updated: March 1, 2020",
    image: image4,
    profileImg: image5,
  },
  {
    id: 2,
    title: "Link Building The Definitive Guide(2020 Updated)",
    name: "John",
    date: "Last updated: May 12, 2020",
    image: image4,
    profileImg: image5,
  },
  {
    id: 3,
    title: "Critical Thinking The Definitive Guide(2020 Updated)",
    name: "Robert",
    date: "Last updated: July 21, 2020",
    image: image4,
    profileImg: image5,
  },
  {
    id: 4,
    title: "Project Management The Definitive Guide(2020 Updated)",
    name: "Matthew",
    date: "Last updated: November 10, 2020",
    image: image4,
    profileImg: image5,
  },
];

export default digitalData;
export { blogData };
