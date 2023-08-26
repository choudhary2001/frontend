
import Dashboard from "layouts/dashboard";
import Maintenance from "layouts/maintenance";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SiteMap from "layouts/sitemaps";
import Local_Link from "layouts/local_link";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Units from "layouts/units";
import Calendar from "layouts/Calendar";
import Library from "layouts/library";
import Reservations from "layouts/reservations";
import PetRegistry from "layouts/petregistry";
// HG Pro icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";



const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <SiteMap />,
    noCollapse: true,
    children : [
      {
        type: "item",
        name: "Site Map",
        key: "Site Map",
        route: "/sitemap",
        icon: <Shop size="12px" />,
        component: <SiteMap />,
        
      },
      {
        type: "item",
        name: "My Profile",
        key: "My Profile",
        route: "/profile",
        icon: <CustomerSupport size="12px" />,
        component: <Profile />,
      },
      {
        type: "item",
        name: "Local Link",
        key: "Local Link",
        route: "/local-link",
        icon: <CustomerSupport size="12px" />,
        component: <Local_Link/>,
      },
    ]
  },

  {
    type: "collapse",
    name: "Manage",
    key: "manage",
    route: "/manage",
    icon: <CreditCard size="12px" />,
    component: null,
    noCollapse: true,
    children : [
      {
        type: "item",
        name: "Units/Occupants",
        key:"Units/Occupants",
        route:"/units/occupants",
        icon: <CreditCard size="12px" />,
        component: <Units/>
      },
      {
        type: "item",
        name: "Calendar",
        key:"Calendar",
        route:"/calendar",
        icon: <CreditCard size="12px" />,
        component: <Calendar/>
      },
      {
        type: "item",
        name: "Library",
        key:"Library",
        route:"/library",
        icon: <CreditCard size="12px" />,
        component: <Library/>
      },
      {
        type: "item",
        name: "Reservations",
        key:"Reservations",
        route:"/reservations",
        icon: <CreditCard size="12px" />,
        component: <Reservations/>
      },
      {
        type: "item",
        name: "Pet Registry",
        key:"Pet Registry",
        route:"/pet/registry",
        icon: <CreditCard size="12px" />,
        component: <PetRegistry/>
      },
    ]

  },
  {
    type: "collapse",
    name: "Front Desk",
    key: "front-desk",
    route: "/front-desk",
    icon: <Cube size="12px" />,
    component: null,
    noCollapse: true,
    children : [
      {
        type: "item",
        name: "Event Log",
        key:"Event Log",
        route:"/event/log",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Instructions",
        key:"Instructions",
        route:"/instructions",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Incident Reports",
        key:"Incident Reports",
        route:"/incident/reports",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Resident Directory",
        key:"Resident Directory",
        route:"/resident/directory",
        icon: <CreditCard size="12px" />,
        component: null
      },
    ]

  },
  {
    type: "collapse",
    name: "Maintenance",
    key: "Maintenance",
    route: "/maintenance",
    icon: <Settings size="12px" />,
    component: <Maintenance />,
    Collapse: true,
    children : [
      {
        type: "item",
        name: "New Request",
        key:"New Request",
        route:"/maintenance/new/request",
        icon: <CreditCard size="12px" />,
        component: <Maintenance />
      },
      {
        type: "item",
        name: "Search Requests",
        key:"Search Requests",
        route:"/maintenance/search/requests",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Incident Reports",
        key:"Incident Reports",
        route:"/maintenance/vendor/directory",
        icon: <CreditCard size="12px" />,
        component: <Tables />
      },
    ]

  },

  {
    type: "collapse",
    name: "Communicate",
    key: "communicate",
    route: "/communicate",
    icon: <Office size="12px" />,
    component: null,
    noCollapse: true,
    children : [
      {
        type: "item",
        name: "Send Email",
        key:"Send Email",
        route:"/communicate/send/email",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Library",
        key:"Library",
        route:"/communicate/library",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Public Display",
        key:"Public Display",
        route:"/communicate/public/display",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Resident Directory",
        key:"Resident Directory",
        route:"/communicate/resident/directory",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Building Directory",
        key:"Building Directory",
        route:"/communicate/building/directory",
        icon: <CreditCard size="12px" />,
        component: null
      },
    ]

  },
  {
    type: "collapse",
    name: "Resident Site",
    key: "resident-site",
    route: "/resident-site",
    icon: <Settings size="12px" />,
    component: null,
    noCollapse: true,
    children : [
      {
        type: "item",
        name: "Local Businesses",
        key:"Local Businesses",
        route:"/maintenance/local/businesses",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Offers & Services",
        key:"Offers & Services",
        route:"/maintenance/offers/services",
        icon: <CreditCard size="12px" />,
        component: null
      },
      {
        type: "item",
        name: "Pet Park",
        key:"Pet Park",
        route:"/maintenance/pet/park",
        icon: <CreditCard size="12px" />,
        component: null
      },
    ]

  },
  {
    type: "collapse",
    name: "Other",
    key: "Other",
    route: "/other",
    icon: <CustomerSupport size="12px" />,
    component: null,
    noCollapse: true,
    children : [
      {
        type: "item",
        name: "Know Your Residents",
        key:"Know Your Residents",
        route:"/maintenance/know-your-residents",
        icon: <CreditCard size="12px" />,
        component: null,
      },
      {
        type: "item",
        name: "Resident Id Verify",
        key:"Resident Id Verify",
        route:"/maintenance/resident-id-verify",
        icon: <CreditCard size="12px" />,
        component: null,
      },
    ]
  },

];

export default routes;
