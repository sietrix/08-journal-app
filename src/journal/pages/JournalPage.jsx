import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"



export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur 
        ipsa eius similique excepturi nesciunt officiis earum nemo porro facilis eum. 
        Maiores necessitatibus, tenetur error recusandae explicabo iure. Sapiente, 
        et laborum.
      </Typography> */}

        <NothingSelectedView />
        {/* <NoteView /> */}


        <IconButton
          size="large"
          sx={{ 
            color: 'white', 
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30}} />
        </IconButton>
      
    </JournalLayout>
  )
}
