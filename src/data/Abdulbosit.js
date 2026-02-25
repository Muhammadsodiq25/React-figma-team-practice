import ProfileImg from "../assets/myProfile-profile-img.png";
import TeamImg1 from "../assets/team-img1.png";
import TeamImg2 from "../assets/team-img2.png";
import TeamImg3 from "../assets/team-img3.png";
import TeamImg4 from "../assets/team-img4.png";
import TeamImg5 from "../assets/team-img5.png";
import TeamImg6 from "../assets/team-img6.png";
import TeamImg7 from "../assets/team-img7.png";

const Abdulbosit = {
  name: "Evan Yates",
  role: "UI/UX Designer",
  avatar: ProfileImg,

  info: [
    { label: "Position", value: "UI/UX Designer" },
    { label: "Company", value: "Cadabra" },
    { label: "Location", value: "NYC, New York, USA" },
    { label: "Birthday Date", value: "May 19, 1996" },
    { label: "Email", value: "evanyates@gmail.com" },
    { label: "Mobile Number", value: "+1 675 346 23 10" },
    { label: "Skype", value: "Evan 2256" },
  ],

  projects: [
    {
      id: 1,
      code: "PN0001265",
      title: "Medical App (iOS native)",
      created: "Sep 12, 2020",
      priority: "Medium",
      projectData: {
        allTasks: 34,
        activeTasks: 13,
      },
      assignees: 3,
    },
    {
      id: 2,
      code: "PN0001221",
      title: "Food Delivery Service",
      created: "Sep 10, 2020",
      priority: "Medium",
      projectData: {
        allTasks: 50,
        activeTasks: 24,
      },
      assignees: 4,
    },
    {
      id: 3,
      code: "PN0001290",
      title: "Internal Project",
      created: "May 28, 2020",
      priority: "Low",
      projectData: {
        allTasks: 23,
        activeTasks: 20,
      },
      assignees: 2,
    },
  ],

  team: [
    {
      id: 1,
      name: "Shawn Stone",
      role: "UI/UX Designer",
      level: "Middle",
      avatar: TeamImg1,
    },
    {
      id: 2,
      name: "Randy Delgado",
      role: "UI/UX Designer",
      level: "Junior",
      avatar: TeamImg2,
    },
    {
      id: 3,
      name: "Emily Tyler",
      role: "Copywriter",
      level: "Middle",
      avatar: TeamImg3,
    },
    {
      id: 4,
      name: "Blake Silva",
      role: "IOS Developer",
      level: "Senior",
      avatar: TeamImg4,
    },
    {
      id: 5,
      name: "Oscar Holloway",
      role: "UI/UX Designer",
      level: "Middle",
      avatar: TeamImg5,
    },
    {
      id: 6,
      name: "Wayne Marsh",
      role: "Copywriter",
      level: "Junior",
      avatar: TeamImg6,
    },
    {
      id: 7,
      name: "Jeremy Barrett",
      role: "UI/UX Designer ",
      level: "Middle",
      avatar: TeamImg7,
    },
  ],
};

export default Abdulbosit;
