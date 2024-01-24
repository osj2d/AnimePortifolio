import React from 'react'

const Head = (props) => {
    React.useEffect(() => {
        document.title = `${props.title} | AnimeDb`;
        document.querySelector('meta[name="description"]')
        .setAttribute('content', props.description || 'a')
    }, [props])


  return (
    <div></div>
  )
}

export default Head