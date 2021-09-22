function Time(props) {
  const dynamicDate = new Date()
  const dynamicDateString = dynamicDate.toUTCString()

  return (
    <div>
      <div>
        {dynamicDateString} (dynamic)
      </div>
      <div>
        {props.staticDateString} (static)
      </div>

    </div>
  )
}

export function getStaticProps() {
  const staticDate = new Date()
  const staticDateString = staticDate.toUTCString()
  return {
    props: {
      staticDateString
    },
    revalidate: 10
  }
}

export default Time