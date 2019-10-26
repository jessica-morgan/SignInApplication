import React, { useState, useEffect } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { signOutButtonStyles, singleVisitorSignOut, signoutListContainer } from '../utils'
import { getAllUnsignedOutVisitorsApi, visitorSignOutApi } from '../api/visitors'
import { format, isToday, isYesterday } from 'date-fns'
import LoadingIndicator from './LoadingIndicator'
import BackArrow from './BackArrow'

export default function SignOutForm () {
  const [visitorList, setVisitorList] = useState('')
  const [showButton, setShowButton] = useState('')
  const [selectedVisitor, setSelectedVisitor] = useState('')
  // const [selectedVisitorDate, setVisitorDate] = useState('')
  // const [selectedVisitorTime, setVisitorTime] = useState('')
  const listContainer = signoutListContainer()
  const buttonStyle = signOutButtonStyles()
  const singleVisitor = singleVisitorSignOut()

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

        {showButton ? <React.Fragment>
          <header>
            <h1 className='sign-out-page-text' style={{ fontSize: '3.6vw' }}>Thank you for visiting
              <br/>Enspiral Dev Academy,
              <br/>we hope to see you
              <br/>again soon</h1>
          </header>
          <ListItem className={singleVisitor.root} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="userIcon.png" />
            </ListItemAvatar>
            <ListItemText
              style={{ color: 'black' }}
              primary={selectedVisitor.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                  </Typography>
                  {selectedVisitor.date} at {selectedVisitor.time} <Button className={buttonStyle.root} onClick={() => visitorSignOutApi(selectedVisitor.email, new Date())}>Sign out</Button>

                </React.Fragment>
              }
            />
          </ListItem>
        </React.Fragment>
          : <React.Fragment>
            <header>
              <h1 className='sign-out-page-text'>Sign out from
                <br/>Enspiral Dev Academy.</h1>
            </header>
            <div className={listContainer.root}>

              {visitorList.visitorsArray[0].map(visitor => {
                const signedInAt = visitor.signInTime.substring(0, 21)
                const newDate = Date.parse(signedInAt)
                const formattedSignedInDate = format(newDate, 'dd-MM-yy')
                const formattedSignedInTime = format(newDate, 'HH:mm')
                const checkedDate = () => {
                  if (isToday(newDate)) {
                    return 'today'
                  } else if (isYesterday(newDate)) {
                    return 'yesterday'
                  } else {
                    return formattedSignedInDate
                  }
                }

                return <div key={visitor.name} onClick={() => { setShowButton(true); setSelectedVisitor({ name: visitor.name, email: visitor.email, date: formattedSignedInDate, time: formattedSignedInTime }) }}>
                  <ListItem alignItems="flex-start">
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
                            color="textPrimary"
                          >
                          </Typography>
                          {checkedDate()} at {formattedSignedInTime}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              })}
            </div>
          </React.Fragment>
        }
        <BackArrow />
      </div>
    </div>
  } else {
    return <LoadingIndicator />
  }
}
