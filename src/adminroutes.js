
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
    name: "Users",
    key: "users",
    route: "/admin/user",
    icon: <CustomerSupport size="12px" />,
    component: null,
    noCollapse: false,
    children : [
       
      ]
  },


];

export default routes;
