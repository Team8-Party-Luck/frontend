import React from 'react';
import styled from 'styled-components'

const Add = () => {
return(
  <React.Fragment>

    <AddButton id="install-button">
    <img  style={{width:'2rem', height:'2rem', marginRight:'1rem'}}src="https://cdn-icons-png.flaticon.com/512/1665/1665731.png" alt="plus"/>
    </AddButton>
  </React.Fragment>
)
}

export default Add

const AddButton = styled.div`
// margin-bottom:2rem
`