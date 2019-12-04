import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from 'reactn'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { singleVisitorSignOut, signOutButtonStyles, signoutListContainer } from '../utils'
import { getAllVisitorsApi } from '../api/visitors'
import { format } from 'date-fns'
import LoadingIndicator from './LoadingIndicator'
import BackArrow from './BackArrow'

export default function Dashboard () {
  const [visitorAdminList, setVisitorAdminList] = useState('')
  const [showButton, setShowButton] = useState('')
  const [signedIn, setSignedIn] = useGlobal('isAuthenticated')
  const listContainer = signoutListContainer()
  const buttonStyle = signOutButtonStyles()
  const singleVisitor = singleVisitorSignOut()

  useEffect(() => {
    const visitorsArray = []
    getAllVisitorsApi()
      .then(visitors => {
        visitorsArray.push(visitors)
        setVisitorAdminList({
          visitorsArray
        })
      })
  }, [])
  if (visitorAdminList && signedIn) {
    return <div className='page-background-full'>
      <div className='admin-dashboard-image'>
        <header>
          <h1 className='sign-out-page-text' style={{ fontSize: '3.6vw' }}>EDA visitors</h1>
        </header>
        {visitorAdminList.visitorsArray[0].map(visitor => {
          const signedInAt = visitor.signInTime.substring(0, 21)
          const inDate = Date.parse(signedInAt)
          const formattedSignedInDate = format(inDate, 'dd-MM-yy')
          const formattedSignedInTime = format(inDate, 'HH:mm')
          if (visitor.signOutTime) {
            const signedOutAt = visitor.signOutTime.substring(0, 21)
            const outDate = Date.parse(signedOutAt)
            const formattedSignedOutDate = format(outDate, 'dd-MM-yy')
            const formattedSignedOutTime = format(outDate, 'HH:mm')
            return <div key={visitor.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="userIcon.png" />
                </ListItemAvatar>
                <ListItemText
                  key={visitor.id}
                  style={{ color: 'black' }}
                  primary={visitor.name}
                  secondary={
                    <React.Fragment>
                      {/* show reason, sign in time and signout time, email */}
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                      </Typography>
                   Reason for visit: {visitor.reason}
                      <br />
                   Signed in: {formattedSignedInDate} at {formattedSignedInTime}
                      <br/>
                   Signed out: {formattedSignedOutDate} at {formattedSignedOutTime}
                      <br />
                   Visitor email: {visitor.email}
                    </React.Fragment>
                  }
                />
              </ListItem>

            </div>
          } else if (visitor.signOutTime === null) {
            return <div key={visitor.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="userIcon.png" />
                </ListItemAvatar>
                <ListItemText
                  key={visitor.id}
                  style={{ color: 'black' }}
                  primary={visitor.name}
                  secondary={
                    <React.Fragment>
                      {/* show reason, sign in time and signout time, email */}
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                      </Typography>
                   Reason for visit: {visitor.reason}
                      <br />
                   Signed in: {formattedSignedInDate} at {formattedSignedInTime}
                      <br/>
                   Signed out: no signout time
                      <br />
                   Visitor email: {visitor.email}
                    </React.Fragment>
                  }
                />
              </ListItem>

            </div>
          }
        })}
        <BackArrow />
      </div>
    </div>
  } else {
    return <LoadingIndicator />
  }
}
