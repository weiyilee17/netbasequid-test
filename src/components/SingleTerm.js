import React from 'react'
import styled, { css } from 'styled-components'


function SingleTerm({ name, count }) {

  // TODO: make it work

  const CalculatedGrayBG = styled.span`
    background-color: lightgray;
    height: 20px;
    width: ${props => (100 - props.count) / 100 * 80}px
  `;

  const CalculatedYellowBG = styled.span`
    background-color: yellow;
    height: 20px;
    width: ${props => props.count / 100 * 80}px
  `;

  return (
    <div className='flex-container' >
      <span className='term-name'>{name}</span>
      {/* <span className='term-percentage'>
        <CalculatedGrayBG count={count} />
        <CalculatedYellowBG count={count} />
        {`${(count / 100) * 100}`}%
      </span> */}
      <span className='term-percentage'>{`${(count / 100) * 100}`}%</span>

      <span className='term-count'>{count}</span>
    </div>
  )
}

export default SingleTerm