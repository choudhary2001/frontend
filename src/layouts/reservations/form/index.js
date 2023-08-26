import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box } from "@mui/material";
import SoftButton from "components/SoftButton";
import PropTypes from 'prop-types';
import { useState } from 'react';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import Checkbox from "@mui/material/Checkbox";


function EditFormPopup({ onClose }) {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [emergencyPhone, setEmergencyPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        // Perform necessary actions, e.g., update profile information
        onClose(); // Close the popup form after submission
    };

    return (
        <Dialog open={true} onClose={onClose} fullWidth maxWidth="xl" PaperProps={{ sx: { width: '100%', height: '100%' } }}>
            <DialogTitle>Make a New Reservation</DialogTitle>
            <DialogContent >
            <form onSubmit={handleSubmit}>

                <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], maxWidth: '100%', width: "100%", justifyContent:"space-between" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: ['100%', '70%'] }}>

                            <SoftBox mb={2}>
                                <SoftBox mb={1} ml={0.5}>
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Category
                                    </SoftTypography>
                                </SoftBox>
                                <SoftBox mb={1}>
                                    <select style={{ width: "100%", padding: "12px", borderRadius: "7px" }} value={category}
                                        onChange={(e) => setCategory(e.target.value)}>

                                        <option value="Board Meetings">Board Meetings</option>
                                        <option value="Building Events">Building Events</option>
                                        <option value="Delivery">Delivery</option>
                                        <option value="Furniture Delivery">Furniture Delivery</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Neighborhood Events">Neighborhood Events</option>
                                        <option value="Staff Events">Staff Events</option>
                                    </select>
                                </SoftBox>
                            </SoftBox>
                            <SoftBox mb={1}>
                                <SoftBox mb={1} ml={0.5}>
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Title
                                    </SoftTypography>
                                </SoftBox>
                                <SoftInput
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </SoftBox>
                            <SoftBox mb={2} >
                                <SoftBox mb={1} ml={0.5}>
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Description:[4,000 Characters Remaining]
                                    </SoftTypography>
                                </SoftBox>
                                <SoftBox mb={2}>

                                    <textarea row="8" style={{ width: "100%", padding: "20px", borderRadius: "7px" }} value={description}
                                        onChange={(e) => setDescription(e.target.value)}></textarea>
                                </SoftBox>
                            </SoftBox>
                            <SoftBox mb={2}>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                >
                                    Start
                                </SoftTypography>
                                <SoftBox sx={{display:"flex",flexDirection: ['column', 'row'], flexWrap:"wrap" }}>
                                    <SoftInput type="date" sx={{  width: ['100%', '30%'], margin: "2px" }} />
                                    <SoftInput type="time" sx={{  width: ['100%', '30%'], margin: "2px" }} />
                                    <SoftBox display="flex" alignItems="center" flexDirection="row" sx={{  width: ['100%',], margin: "2px" }}>
                                        <Checkbox />
                                        <SoftTypography
                                            variant="button"
                                            fontWeight="regular"
                                        >
                                            &nbsp;&nbsp;All Day Entry &nbsp;
                                        </SoftTypography>
                                    </SoftBox>
                                </SoftBox>
                            </SoftBox>
                            <SoftBox mb={2} >
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                >
                                    End
                                </SoftTypography>
                                <SoftBox  sx={{display:"flex",flexDirection: ['column', 'row'], flexWrap:"wrap" }}>
                                    <SoftInput type="date" sx={{  width: ['100%', '30%'], margin: "2px" }} />
                                    <SoftInput type="time" sx={{  width: ['100%', '30%'], margin: "2px" }} />
                                    <SoftBox display="flex" alignItems="center" flexDirection="row" sx={{  width: ['100%', ], margin: "2px" }}>
                                        <Checkbox />
                                        <SoftTypography
                                            variant="button"
                                            fontWeight="regular"
                                        >
                                            &nbsp;&nbsp;All Day Entry &nbsp;
                                        </SoftTypography>
                                    </SoftBox>
                                </SoftBox>
                            </SoftBox>
                            <SoftBox mb={2}>
                                <SoftBox mb={1} ml={0.5}>
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Allow Resident to RSVP
                                    </SoftTypography>
                                </SoftBox>
                                <Checkbox />
                            </SoftBox>

                        
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: ['100%', '25%'] }}>

                        <SoftBox mb={2}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold" size="medium">
                                Amenity Information
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1} sx={{border:"1px solid grey", padding:"5px", borderRadius:"15px"}}>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Amenity Hours:
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Reservation Rules:
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox mb={1} ml={0.5} sx={{display:"flex", flexDirection:"column"}}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Last-Minute Reservations Policy:
                                </SoftTypography>
                                <SoftTypography component="label" variant="caption" >
                                    Reservations must be placed at least 1 Day(s) in advance.
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Instructions Shown to Residents:
                                </SoftTypography>
                            </SoftBox>
                            
                        </SoftBox>


                    </Box>
                </Box>
            </form>
            </DialogContent>
            <DialogActions>
                <SoftButton onClick={handleSubmit} variant="gradient" color="dark" type="submit">
                    Save
                </SoftButton>
                <SoftButton onClick={onClose}>Cancel</SoftButton>
            </DialogActions>
        </Dialog>
    );
}

EditFormPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default EditFormPopup;
