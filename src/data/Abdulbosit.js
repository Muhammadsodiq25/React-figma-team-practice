import ProfileImg from "../assets/myProfile-profile-img.png";

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
};

export default Abdulbosit;
