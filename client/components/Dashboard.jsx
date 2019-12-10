import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from 'reactn'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { adminVisitorListContainer } from '../utils'
import { getAllVisitorsApi } from '../api/visitors'
import { format } from 'date-fns'
import LoadingIndicator from './LoadingIndicator'
import BackArrow from './BackArrow'

export default function Dashboard () {
  const [visitorAdminList, setVisitorAdminList] = useState('')
  const [signedIn, setSignedIn] = useGlobal('isAuthenticated')
  const visitorListContainer = adminVisitorListContainer()

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
          <h1 className='admin-vistor-list-header' style={{ fontSize: '3.6vw' }}>EDA visitors</h1>
        </header>
        <div className={visitorListContainer.root} >
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
              return <div key={visitor.id} >
                <ListItem alignItems="flex-start" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                  <ListItemAvatar >
                    <Avatar src="userIcon.png"/>
                  </ListItemAvatar>
                  <ListItemText
                    key={visitor.id}
                    style={{ color: 'black', marginBottom: '3.5vh' }}
                    secondary={
                      <React.Fragment style={{ fontSize: '2.2vh' }}>
                        <Typography
                          component="span"
                          color="textPrimary"
                        >
                        </Typography>
                        <b>Name:</b>  {visitor.name}
                        <br />
                        <b> Reason for visit:</b>  {visitor.reason}
                        <br />
                        <b> Signed in:</b>  {formattedSignedInDate} at {formattedSignedInTime}
                        <br/>
                        <b> Signed out:</b>  no signout time
                        <br />
                        <b> Email:</b>  {visitor.email}
                      </React.Fragment>
                    }

                  />
                </ListItem>
              </div>
            } else if (visitor.signOutTime === null) {
              return <div key={visitor.id}>
                <ListItem alignItems="flex-start" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                  <ListItemAvatar>
                    <Avatar src="userIcon.png" />
                  </ListItemAvatar>
                  <ListItemText
                    key={visitor.id}
                    style={{ color: 'black', marginBottom: '3.5vh' }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          color="textPrimary"
                        >
                        </Typography>
                        <b>Name:</b>  {visitor.name}
                        <br />
                        <b> Reason for visit:</b>  {visitor.reason}
                        <br />
                        <b> Signed in:</b>  {formattedSignedInDate} at {formattedSignedInTime}
                        <br/>
                        <b> Signed out:</b>  no signout time
                        <br />
                        <b> Visitor email:</b>  {visitor.email}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </div>
            }
          })}
        </div>
      </div>
    </div>
  } else {
    return <LoadingIndicator />
  }
}
