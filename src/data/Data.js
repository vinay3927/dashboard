import Dashboard from '../assets/menuicons/dashboard_icon.png'
import Vector from '../assets/menuicons/Vector.png'
import Schedule from '../assets/menuicons/schedule_icon.png'
import Setting from '../assets/menuicons/setting_icon.png'
import Transaction from '../assets/menuicons/transaction_icon.png'
import Likes from '../assets/cardicons/likes.png'
import Revenue from '../assets/cardicons/revenue.png'
import Transactions from '../assets/cardicons/transactions.png'
import Users from '../assets/cardicons/users.png'

export const SidebarData = [
    {
      icon: Dashboard,
      heading: 'Dashboard',
    },
    {
      icon: Transaction,
      heading: 'Transactions',
    },
    {
      icon: Schedule,
      heading: 'Schedules',
    },
    {
      icon: Vector,
      heading: 'Users',
    },
    {
      icon: Setting,
      heading: 'Settings',
    },
  ];

  export const cardsData = [
    {
      title: "Total Revenues",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
      percentage: "+2.5%",
      value: "$2,219,430",
      png: Revenue,
      imgback:"#7FCD93"
    },
    {
      title: "Total Transactions",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
      percentage: "+1.7%",
      value: "1,520",
      png: Transactions,
      imgback:"#DEBF85"
    },
    {
      title: "Total Likes",
      boxShadow: "0px 10px 20px 0px #F9D59B",
      percentage: "+1.4%",
      value: "9,271",
      png: Likes,
      imgback:"#ECA4A4"
    },
    {
      title: "Total Users",
      boxShadow: "0px 10px 20px 0px #F9D59B",
      percentage: "+4.2%",
      value: "9,271",
      png: Users,
      imgback:"#A9B0E5"
    },
  ];

  export const activitiesData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'User',
        data: [500,350,200,400],
        backgroundColor: '#98D89E',
        borderWidth: 0,
        barThickness: 20,
      },
      {
        label: 'Guest',
        data: [400,450,300,350],
        backgroundColor: '#EE8484',
        borderWidth: 0,
        barThickness: 20,
      },
    ],
  };


  