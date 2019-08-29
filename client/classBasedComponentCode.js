// this is the code for making signinform and signoutform classe based components

// SIGN IN FORM CLASS BASED

// class SignInForm extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       fullName: '',
//       reason: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

// handleChange (event) {
//   return this.setState({ [event.target.name]: event.target.value })
// }

//   render () {
//     const { classes } = this.props

//     return (
// <div className='page-background'>
//   <Link to='/'>
//     <img src='backarrow.png' className='arrow'>
//     </img>
//   </Link>
//   <header>
//     <h1 className='page-text'>Sign in at</h1>
//     <h1 style={{ paddingLeft: '10%' }}>Enspiral Dev Academy.</h1>
//   </header>
//   <form style={{ marginLeft: '10%' }}>
//     <br/><br/><br/>
//     <TextField
//       style={{ paddingLeft: '6px' }}
//       placeholder="Full name"
//       InputProps={{ disableUnderline: true }}
//       className="form-inputs"
//       type='text'
//       name='fullName'
//       value={this.state.fullName}
//       onChange={this.handleChange}
//     />
//     <br/><br/>
//     <TextField
//       style={{ paddingLeft: '6px' }}
//       placeholder="Reason for visit"
//       InputProps={{ disableUnderline: true }}
//       className="form-inputs"
//       type='text'
//       name='reason'
//       value={this.state.reason}
//       onChange={this.handleChange}
//     />
//   </form>
//   <br/>
//   {/* on click send new date object to get time of sign out */}
//   <Button className={classes.root}>Sign in</Button>
// </div>
//     )
//   }
// }

// SignInForm.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(SignInForm)

// SIGN OUT FORM CLASS BASED

// const styles = theme => ({
//   root: {
//     background: 'white',
//     border: 0,
//     borderRadius: 9,
//     color: '#2C97AF',
//     fontFamily: 'Roboto, sans-serif',
//     fontSize: '1.5vw',
//     fontWeight: 'bold',
//     marginLeft: '36.5vw',
//     height: '5vh',
//     width: '9vw',
//     textTransform: 'none',
//     '&:hover': {
//       backgroundColor: 'white',
//       color: 'rgb(27, 111, 129)'
//     }
//   }
// })

// class SignOutForm extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       fullName: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange (event) {
//     return this.setState({ [event.target.name]: event.target.value })
//   }

//   render () {
//     const { classes } = this.props
//     return (
//       <div className='page-background'>
//         <Link to='/'>
//           <img src='backarrow.png' className='arrow'>
//           </img>
//         </Link>
//         <header>
//           <h1 className="page-text">Thank you for visiting</h1>
//           <h1 style={{ paddingLeft: '10%' }}>Enspiral Dev Academy.</h1>
//         </header>
// <br/>
// <form style={{ marginLeft: '10%' }}>
//   <br/><br/><br/>
//   <TextField
//     placeholder="Full name"
//     style={{ paddingLeft: '6px' }}
//     name='fullName'
//     value={this.state.fullName}
//     onChange={this.handleChange}
//     InputProps={{ disableUnderline: true }}
//     className="form-inputs"
//     type='text'
//   />
// </form>
// <br/>
// {/* on click send new date object to get time of sign out */}
// <Button className={classes.root}>Sign out</Button>
//       </div>
//     )
//   }
// }

// SignOutForm.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(SignOutForm)
