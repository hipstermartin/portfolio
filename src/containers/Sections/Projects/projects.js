const projects = [
  {
    title: "Cryptochat",
    gitrepo: "https://github.com/hipstermartin/Cryptochat",
    content: 
      "An end-to-end, RSA-2048 encrypted anonymous chat application.\
       We had used Vue.js for coordinating the frontend functionality along with a Node.js backend using Socket.io for sending messages between users. \
      The live application can be accessed through https://cryptochatz.herokuapp.com/", 
    dark: false
  },
  {
    title: "Face recognition based attendance system",
    gitrepo: "",
    content: 
      "The task of the proposed system is to capture the face of each student and to store it in the database for their attendance.\
       The face of the student needs to be captured in such a manner that all the features of the students' faces need to be detected and recognized.\
       There is no need for the manually take attendance in the class because the system records a video and through further processing steps the face is being recognized and the attendance database is updated",
    dark: false
  },
  {
    title: "Online Certificate generator for club events",
    gitrepo: "https://github.com/hipstermartin/CertificateGenerator",
    content: 
      "A simple python based application where we can generate the certificates(e-copy) for the participants who attended a particular event.\
      Here the input of the students who attended event will be taken in the form of the excel document, where there the program searches for the name coloumn and there after prints all the certificates with the names on them.\
      Here the event name will be also given by the user as a input.",
    dark: false
  },
  {
    title: "Employee Leave Management System",
    gitrepo: "https://github.com/hipstermartin/Employee-leave-management-system",
    content:
      "Online Leave Management System is a web-based application that is developed using PHP and MySQL. The objective of the Leave Management System is to develop a web-based application using which management of leave application and approval is done online.\
      The main objective of this Leave Management System is to manage the details of Leave, Employee details ,Attendance. It manages all the information about Leave, Leave Type, Attendance, Leave.",
    dark: false
  },
  {
    title: "Food wastage management",
    gitrepo: "https://github.com/hipstermartin/food-wastage-management",
    content: 
      "We have designed a system to curb the wastage by managing the flow of food going waste by redirecting it from the restaurants to the needy people.\
       For this we have different organizations like Restaurants, NGOs, Logistics who working in unison to achieve this goal.\
       Restaurants raise requests for food collection, which are passed onto all NGOs within the network." ,
    dark: false
  }
];

export default projects;