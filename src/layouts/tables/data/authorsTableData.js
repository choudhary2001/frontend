/* eslint-disable react/prop-types */
// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import Icon from "@mui/material/Icon";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "name", align: "center" },
    { name: "category", align: "center" },
    { name: "address", align: "center" },
    { name: "city", align: "center" },
    { name: "state", align: "center" },
    { name: "zip", align: "center" },
    { name: "phone", align: "center" },
    { name: "assign_to_maint_req", align: "center" },
    { name: "vendor_compliance", align: "center" },
    { name: "contact_vendor", align: "center" },
    { name: "acctions", align: "center" },
  ],

  rows: [
    {
      name: (
        <SoftTypography variant="caption" color="text" fontWeight="medium" >
          Air Comfort
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      city: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      state: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      zip: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      phone: <Function job="Manager" org="Organization" />,

       assign_to_maint_req: (
        <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
          </Icon>
      ),
      

       
      vendor_compliance: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
       contact_vendor: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        acctions: (
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit / View
          </SoftTypography>
        ),
    },


    {
      name: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          Air Comfort
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      city: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      state: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      zip: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      phone: <Function job="Manager" org="Organization" />,

       assign_to_maint_req: (
        <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
          </Icon>
      ),
      
       
      vendor_compliance: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
       contact_vendor: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        acctions: (
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit / View
          </SoftTypography>
        ),
    },

    {
      name: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          Air Comfort
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      city: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      state: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      zip: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      phone: <Function job="Manager" org="Organization" />,

       assign_to_maint_req: (
        <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
          </Icon>
      ),
      
       
      vendor_compliance: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
       contact_vendor: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        acctions: (
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit / View
          </SoftTypography>
        ),
    },


    {
      name: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          Air Comfort
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      city: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      state: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      zip: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      phone: <Function job="Manager" org="Organization" />,

       assign_to_maint_req: (
        <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
          </Icon>
      ),
      
       
      vendor_compliance: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
       contact_vendor: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        acctions: (
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit / View
          </SoftTypography>
        ),
    },


    {
      name: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          Air Comfort
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      city: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      state: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      zip: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      phone: <Function job="Manager" org="Organization" />,

       assign_to_maint_req: (
        <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
          </Icon>
      ),
      
      vendor_compliance: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
       contact_vendor: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        acctions: (
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit / View
          </SoftTypography>
        ),
    },


    {
      name: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          Air Comfort
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      city: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      state: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      zip: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      phone: <Function job="Manager" org="Organization" />,

       assign_to_maint_req: (
        <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
          </Icon>
      ),
      
      vendor_compliance: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
       contact_vendor: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        acctions: (
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit / View
          </SoftTypography>
        ),
    },


    {
      name: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          Air Comfort
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      city: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      state: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      zip: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      phone: <Function job="Manager" org="Organization" />,

       assign_to_maint_req: (
        <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
          </Icon>
      ),
      
       
      vendor_compliance: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
       contact_vendor: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        acctions: (
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit / View
          </SoftTypography>
        ),
    },




  ],
};

export default authorsTableData;
