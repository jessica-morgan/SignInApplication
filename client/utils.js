import { makeStyles } from '@material-ui/styles'

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

const styles = makeStyles({
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

module.exports = {
  useStyles: useStyles,
  styles: styles
}
