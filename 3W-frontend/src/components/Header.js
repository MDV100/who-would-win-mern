import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Header = () =>
{
    return (
        <div className = "header">
            <IconButton>
                <BookmarksIcon fontSize = "large" className = "header_icon" />
            </IconButton>

            <IconButton>
                <CalendarTodayIcon fontSize="large" className = "header_icon" />
            </IconButton>
          
            <IconButton>
                <PersonIcon fontSize="large" className = "header_icon" />
            </IconButton>
            
        </div>
    )
}

export default Header