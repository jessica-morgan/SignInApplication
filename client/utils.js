import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'

const useStyles = makeStyles({
  root: {
    background: 'white',
    border: 0,
    borderRadius: 9,
    color: '#2C97AF',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '2vw',
    fontWeight: 'bold',
    textTransform: 'none',
    marginLeft: '7vw',
    height: '7vh',
    width: '12vw',
    '&:hover': {
      backgroundColor: 'white',
      color: 'rgb(27, 111, 129)'
    }
  }
})

const signInButtonStyles = makeStyles({
  root: {
    background: 'white',
    border: 0,
    borderRadius: 9,
    color: '#2C97AF',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.5vw',
    fontWeight: 'bold',
    marginLeft: '31.5vw',
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
    'label + &': {
      marginTop: theme.spacing(3)
    },
    fontSize: '2vw',
    color: 'rgb(161, 161, 161)'
  },
  input: {
    borderRadius: '1.2vw',
    position: 'relative',
    backgroundColor: 'white',
    border: '1.2vw',
    fontSize: '1.3vw',
    fontFamily: 'Roboto, sans-serif',
    width: '38.6vw',
    height: '3.5vh'
  }
}))(InputBase)

const ButtonMargin = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}))

module.exports = {
  useStyles: useStyles,
  signInButtonStyles: signInButtonStyles,
  CustomDropDown: CustomDropDown,
  ButtonMargin: ButtonMargin
}
