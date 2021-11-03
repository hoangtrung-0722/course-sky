import React from "react";
import {
    Modal,
    Box,
    Typography,
    IconButton,
    TextField,
    Autocomplete, Button, Snackbar, Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {makeStyles} from "@mui/styles"
import axios from "axios";

const ContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "20px/15px",
    boxShadow: 24,
    pb: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    minWidth: {xs: "90%", md: "600px"},
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
};

const InputLabelProps = {
    shrink: true,
    style: {
        fontWeight: "600",
    },
};

const inputProps = {
    style: {height: "100px"},
};

const TextFieldStyle = {width: "90%"};

const useStyles = makeStyles(theme => ({
    endAdornment: {
        display: 'none'
    }
}));

const initialFormValues = {
    className: "",
    description: "",
    tutors: {},
    maxStudent: "",
};

export default function NewClassModal({open, onClose}) {
    const [formValues, setFormValues] = React.useState(initialFormValues);
    const [tutorOptions, setTutorOptions] = React.useState([]);
    const [classNameError, setClassNameError] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_HOST}/user/teacher_options`)
            .then(({data}) => {
                setTutorOptions(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (name === "className") {
            setClassNameError(false);
        }
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleAutocompleteChange = (e, value) => {
        setFormValues({
            ...formValues,
            tutors: value
        });
    }

    const handleFormSubmit = (e) => {
        if (formValues.className === "") {
            setClassNameError(true);
        } else {
            axios.post(
                `${process.env.REACT_APP_API_HOST}/courses/create`,
                {
                    courseName: formValues.className,
                    description: formValues.description,
                    teacher: formValues.tutors._id,
                    maxStudent: formValues.maxStudent
                })
                .then(() => {
                    setSnackbarMessage("Your class has been created");
                    setSnackbarOpen(true);
                })
                .catch((err) => console.log(err));
            setFormValues(initialFormValues);
            onClose();
        }
        e.preventDefault();
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarOpen(false);
    }

    const footer = [
        <Button
            type="submit" onClick={handleFormSubmit} key="submit_btn" sx={{color: "#01458E"}}>Create</Button>,
        <Button
            onClick={onClose} key="cancel_btn" sx={{color: "#01458E"}}>Cancel</Button>
    ];

    const classes = useStyles();

    return (
        <>
            <Snackbar open={snackbarOpen} autoHideDuration={3000}
                      onClose={handleSnackbarClose}
                      anchorOrigin={{horizontal: "center", vertical: "top"}}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{width: '100%'}}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Modal open={open} onClose={onClose}>
                <Box sx={ContainerStyle}>
                    <IconButton
                        onClick={onClose}
                        sx={{width: "fit-content", alignSelf: "flex-end"}}
                    >
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h6" component="h2" sx={{fontWeight: "bold"}}>
                        Tạo lớp học mới
                    </Typography>
                    <form style={formStyle} onSubmit={handleFormSubmit}>
                        <TextField
                            label="Class Name"
                            value={formValues.className}
                            name="className"
                            error={classNameError}
                            onChange={handleInputChange}
                            InputLabelProps={InputLabelProps}
                            margin="dense"
                            size="small"
                            sx={TextFieldStyle}
                        />
                        <TextField
                            label="Description"
                            value={formValues.description}
                            name="description"
                            onChange={handleInputChange}
                            InputLabelProps={InputLabelProps}
                            margin="dense"
                            size="small"
                            multiline={true}
                            inputProps={inputProps}
                            sx={TextFieldStyle}
                        />
                        <Autocomplete
                            options={tutorOptions}
                            value={formValues.tutors}
                            name="tutors"
                            onChange={handleAutocompleteChange}
                            getOptionLabel={(option) => option.fullName || ""}
                            isOptionEqualToValue={(option, value) => (Object.keys(formValues.tutors).length === 0 && formValues.tutors.constructor === Object) || (option === value)}
                            sx={TextFieldStyle}
                            classes={{endAdornment: classes.endAdornment}}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Tutor"
                                    InputLabelProps={InputLabelProps}
                                    margin="dense"
                                    size="small"
                                />
                            )}
                        />
                        <TextField
                            label="Maximum Student"
                            tutors={formValues.maxStudent}
                            name="maxStudent"
                            onChange={handleInputChange}
                            InputLabelProps={InputLabelProps}
                            margin="dense"
                            size="small"
                            sx={TextFieldStyle}
                            type="number"
                        />
                        {footer}
                    </form>
                </Box>
            </Modal>
        </>
    );
}
