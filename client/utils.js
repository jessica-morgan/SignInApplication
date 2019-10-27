import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'

const promoContainer = makeStyles({
  root: {
    display: 'block',
    float: 'right',
    fontFamily: 'Roboto, sans-serif',
    color: 'white',
    width: '-50vw',
    height: '-100vh',
    fontSize: '1.7vw',
    zIndex: '1',
    position: 'absolute',
    marginLeft: '-50vw',
    marginTop: '-100vh'
  }
})

// sign out styles

const signOutButtonStyles = makeStyles({
  root: {
    background: '#2C97AF',
    border: 0,
    borderRadius: 9,
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.8vw',
    fontWeight: 'bold',
    marginTop: '-6.8vh',
    marginLeft: '15vw',
    height: '7vh',
    width: '10vw',
    zIndex: 5,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: 'rgb(27, 111, 129)'
    }
  }
})

const singleVisitorSignOut = makeStyles({
  root: {
    background: 'rgb(255,255,255, 0.8)',
    borderRadius: '1.5vw',
    width: '34.5vw',
    marginLeft: '5vw',
    marginBottom: '17.5vh'
  }
})

const signoutListContainer = makeStyles({
  root: {
    width: '34.5vw',
    marginLeft: '5vw',
    marginTop: 'auto',
    zIndex: 2,
    background: 'rgb(255,255,255, 0.8)',
    borderRadius: '1.5vw',
    overflow: 'scroll',
    height: '42vh'
  }
})

// sign in styles

const signInButtonStyles = makeStyles({
  root: {
    background: 'white',
    border: 0,
    borderRadius: 9,
    color: '#2C97AF',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.5vw',
    fontWeight: 'bold',
    marginLeft: '30.5vw',
    marginTop: '4vh',
    height: '5vh',
    width: '9vw',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: 'rgb(27, 111, 129)'
    }
  }
})

const CustomDropDown = withStyles(theme => ({
  root: {
    color: 'rgb(161, 161, 161)'
  },
  input: {
    borderRadius: '1.2vw',
    position: 'relative',
    backgroundColor: 'white',
    border: '1.2vw',
    fontSize: '1.3vw',
    fontFamily: 'Roboto, sans-serif',
    width: '37vw',
    height: '3.5vh',
    paddingLeft: '4px',
    paddingTop: '10px',
    paddingBottom: '0px'
  },
  '&:focus': {
    borderRadius: '1.2vw',
    position: 'relative',
    backgroundColor: 'white',
    border: '1.2vw',
    fontSize: '1.3vw',
    fontFamily: 'Roboto, sans-serif',
    width: '38.6vw',
    height: '3.5vh',
    paddingLeft: '4px'
  }
}))(InputBase)

const CustomInput = withStyles(theme => ({
  root: {
    color: 'rgb(161, 161, 161)'
  },
  input: {
    borderRadius: '1.2vw',
    position: 'relative',
    backgroundColor: 'white',
    border: '1.2vw',
    fontSize: '1.3vw',
    fontFamily: 'Roboto, sans-serif',
    width: '39vw',
    height: '3.5vh',
    paddingLeft: '4px'
  }
}))(InputBase)

const menuItemStyle = makeStyles({
  root: {
    color: 'grey',
    fontSize: '2vh',
    fontFamily: 'Roboto, sans-serif',
    marginBottom: '1vh',
    paddingLeft: '6px',
    marginLeft: '6px'
  },
  select: {
    borderRadius: '1.2vw',
    position: 'relative',
    backgroundColor: 'white',
    border: '1.2vw',
    fontSize: '1.3vw',
    fontFamily: 'Roboto, sans-serif',
    width: '39vw',
    height: '3.5vh',
    paddingLeft: '4px'
  }
})

const selectStyle = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        '&:focus': {
          borderRadius: '1.2vw',
          position: 'relative',
          backgroundColor: 'white',
          border: '1.2vw',
          fontSize: '1.3vw',
          fontFamily: 'Roboto, sans-serif',
          height: '3.5vh',
          paddingLeft: '4px'
        }
      }
    }
  }
})

module.exports = {
  promoContainer: promoContainer,
  signInButtonStyles: signInButtonStyles,
  signOutButtonStyles: signOutButtonStyles,
  singleVisitorSignOut: singleVisitorSignOut,
  CustomDropDown: CustomDropDown,
  CustomInput: CustomInput,
  menuItemStyle: menuItemStyle,
  selectStyle: selectStyle,
  signoutListContainer: signoutListContainer
}
