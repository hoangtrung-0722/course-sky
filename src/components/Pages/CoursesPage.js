import {Container, Box, Button} from "@mui/material";
import React from "react";
import ClassListItem from "../Utility/ClassListItem";
import Header from "../Utility/Header";
import NewClassModal from "../Modal/NewClassModal";
import axios from "axios";
import SearchInput from "../Utility/SearchInput";
import ContentBox from "../Utility/ContentBox";
import SidePanel from "../Utility/SidePanel";

export default function CoursesPage() {
    const [newClassModalOpen, setNewClassModalOpen] = React.useState(false);
    const [classes, setClasses] = React.useState([]);

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_HOST}/courses`)
            .then(({data}) => setClasses(data))
            .catch((err) => console.log(err));
    }, [classes]);

    return (
        <>
            <NewClassModal
                open={newClassModalOpen}
                onClose={() => setNewClassModalOpen(false)}
            />
            <Header title={"Classes"}/>
            <Container
                maxWidth="xl"
                disableGutters
                sx={{
                    paddingTop: "64px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box sx={{width: "22%", display: {xs: "none", sm: "block"}, position: "fixed", left: "0"}}>
                    <SidePanel>
                        <SearchInput
                            style={{margin: "0 auto", width: "80%", textAlign: "center"}}/>
                        <p>Cannot search now</p>
                    </SidePanel>
                </Box>
                <Box sx={{width: {xs: "100%", sm: "75%", md: "50%"}}}>
                    {classes.map((item) => (
                        <ClassListItem
                            key={item._id}
                            name={item.courseName}
                            tutors={`${item.teacher.firstName} ${item.teacher.lastName}`}
                            description={item.description}
                            maxStudent={item.maxStudent}
                        />
                    ))}
                </Box>
                <Box sx={{width: "22%", display: {xs: "none", md: "block"}, position: "fixed", right: "0"}}>
                    <SidePanel>
                        <p>Create New Class</p>
                        <Button
                            variant="contained"
                            onClick={() => setNewClassModalOpen(true)}
                            sx={{bgcolor: "#01458E"}}
                        >
                            New Class
                        </Button>
                        <p>More content later...</p>
                    </SidePanel>
                </Box>
            </Container>
        </>
    );
}
