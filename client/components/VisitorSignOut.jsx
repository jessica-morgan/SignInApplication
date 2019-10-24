import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { signOutButtonStyles, signoutListItemStyle, signoutListContainer } from '../utils'
import { getAllUnsignedOutVisitorsApi, visitorSignOutApi } from '../api'
import { format } from 'date-fns'
import LoadingIndicator from './LoadingIndicator'
import BackArrow from './BackArrow'

export default function SignOutForm () {
  const [visitorList, setVisitorList] = useState('')
  const buttonStyle = signOutButtonStyles()
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
        <div className={listContainer.root}>
          <div>
            {visitorList.visitorsArray[0].map(visitor => {
              const dateNow = new Date()
              const signedInAt = visitor.signInTime.substring(0, 21)
              const newDate = Date.parse(signedInAt)
              const formattedSignedInTime = format(newDate, 'dd-MM-yy HH:mm ')
              // style this
              return <List key={visitor.email}>
                <ListItem className={listItemStyle.root}>
                  {/* on click pop up sign out modal asking 'sign out name?' */}
                  {/* if date is today display today and time, if date is yesterday display yesterday at time, else display date */}
                  {visitor.name}  {formattedSignedInTime}
                  {/* <Button className={buttonStyle.root} onClick={() => visitorSignOutApi(visitor.email, dateNow)}>Sign out</Button> */}
                </ListItem>
              </List>
            })}
          </div>
        </div>
        <BackArrow />
      </div>
    </div>
  } else {
    return <LoadingIndicator />
  }
}
