import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { signOutButtonStyles, signoutListItemStyle, signoutListContainer } from '../utils'
import { getAllUnsignedOutVisitorsApi, visitorSignOutApi } from '../api'
import { format } from 'date-fns'
import LoadingIndicator from './LoadingIndicator'
import BackArrow from './BackArrow'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}))

export default function SignOutForm () {
  const [visitorList, setVisitorList] = useState('')
  const buttonStyle = signOutButtonStyles()
  const listItemStyle = signoutListItemStyle()
  const listContainer = signoutListContainer()
  const classes = useStyles()
  useEffect(() => {
    const visitorsArray = []
    getAllUnsignedOutVisitorsApi()
      .then(visitors => {
        visitorsArray.push(visitors)
        setVisitorList({
          visitorsArray
        })
      })
  }, [])
  if (visitorList) {
    return <div className='page-background-half'>
      <div className='sign-out-form-image'>
        <header>
          <h1 className='sign-out-page-text'>Thank you for visiting
            <br/>Enspiral Dev Academy.</h1>
        </header>
        <div className={listContainer.root}>
          {visitorList.visitorsArray[0].map(visitor => {
            const dateNow = new Date()
            const signedInAt = visitor.signInTime.substring(0, 21)
            const newDate = Date.parse(signedInAt)
            const formattedSignedInTime = format(newDate, 'dd-MM-yy HH:mm ')

            return <div key={visitor.name} ><ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src="userIcon.png" />
              </ListItemAvatar>
              <ListItemText
                style={{ color: 'black' }}
                primary={visitor.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                    </Typography>
                    Signed in at: {formattedSignedInTime}
                  </React.Fragment>
                }
              />
            </ListItem>
            </div>
          })}
        </div>
        <BackArrow />
      </div>
    </div>
  } else {
    return <LoadingIndicator />
  }
}
