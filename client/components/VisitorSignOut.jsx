import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { signOutButtonStyles } from '../utils'
import { getAllUnsignedOutVisitorsApi, visitorSignOutApi } from '../api'
import { format } from 'date-fns'
import LoadingIndicator from './LoadingIndicator'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default function SignOutForm () {
  const [visitorList, setVisitorList] = useState('')
  const buttonStyle = signOutButtonStyles()

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
    return <div>
      {visitorList.visitorsArray[0].map(visitor => {
        const dateNow = new Date()
        const signedInAt = visitor.signInTime.substring(0, 21)
        const newDate = Date.parse(signedInAt)
        const formattedSignedInTime = format(newDate, 'HH:mm dd-MM-yy')
        // style this
        return <List key={visitor.email}>
          <ListItem>
            <p style={{ fontSize: '2vh' }} key={visitor.email}>{visitor.name} Signed in at: {formattedSignedInTime}</p>
            <Button className={buttonStyle.root} onClick={() => visitorSignOutApi(visitor.email, dateNow)}>Sign out</Button>
          </ListItem>
        </List>

        //     <div key={visitor.email}>
        //       <p style={{ fontSize: '2vh' }} key={visitor.email}>{visitor.name} Signed in at: {formattedSignedInTime}</p>
        //       <Button className={buttonStyle.root} onClick={() => visitorSignOutApi(visitor.email, dateNow)}>Sign out</Button>
        //     </div>
      })}
      <div style={{ marginBottom: '26vh', marginLeft: '5vw' }}>
      </div>
    </div>
  } else {
    return <LoadingIndicator />
  }
}
