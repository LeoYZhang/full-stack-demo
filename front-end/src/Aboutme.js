import './aboutme.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutme = props => {
  return (
    <>
      <img src="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec" alt="" />
      <h1>Hi there, I'm Leo</h1>
      <p>I'm a rising junior in High School.</p>
      <p>
        I like computer science.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default Aboutme