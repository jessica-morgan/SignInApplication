import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  root: {
    background: 'white',
    border: 0,
    borderRadius: 9,
    color: '#2C97AF',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.5vw',
    fontWeight: 'bold',
    marginLeft: '36.5vw',
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
  styles: styles
}
