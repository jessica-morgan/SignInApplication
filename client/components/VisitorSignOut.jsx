import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { signOutButtonStyles, signoutListItemStyle, signoutListContainer } from '../utils'
import { getAllUnsignedOutVisitorsApi, visitorSignOutApi } from '../api'
import { format, isToday, isYesterday } from 'date-fns'
import LoadingIndicator from './LoadingIndicator'
import BackArrow from './BackArrow'
import SignOutButtonModal from './SignOutButtonModal'

export default function SignOutForm () {
  const [visitorList, setVisitorList] = useState('')
  const [showButton, setShowButton] = useState('')
  const listItemStyle = signoutListItemStyle()
  const listContainer = signoutListContainer()

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
        {showButton ? <SignOutButtonModal/> : <div></div>}
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

            return <div key={visitor.name} onClick={() => setShowButton(true)}><ListItem alignItems="flex-start">
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
        <BackArrow />
      </div>
    </div>
  } else {
    return <LoadingIndicator />
  }
}
