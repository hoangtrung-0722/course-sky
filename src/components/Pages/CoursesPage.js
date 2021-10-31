import { Container, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import ClassListItem from "../ClassListItem";
import Header from "../Header";
import NewClassModal from "../NewClassModal";

export default function CoursesPage() {
  const [newClassModalOpen, setNewClassModalOpen] = React.useState(false);

  return (
    <>
      <NewClassModal open={newClassModalOpen} onClose={() => setNewClassModalOpen(false)}/>
      <Header title={"Lớp học"} />
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          paddingTop: "64px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "22%", display: { xs: "none", sm: "block" } }}>
          <Box>
            <p>New content will be here soon</p>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "75%", md: "50%" } }}>
          <ClassListItem></ClassListItem>
          <ClassListItem></ClassListItem>
        </Box>
        <Box sx={{ width: "22%", display: { sm: "none", md: "block" } }}>
          <Box>
            <p>Create New Class</p>
            <Button variant="contained" onClick={() => setNewClassModalOpen(true)}>New Class</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
