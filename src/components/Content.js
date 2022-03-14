import React from 'react'
import { connect } from 'react-redux'
import SingleTerm from './SingleTerm';

function Content({ terms }) {
  return (
    <div>
      <div className='content-top-terms'>TOP TERMS</div>
      <div className='flex-container table-header'>
        <div>TERMS</div>
        <div>% OF TOTAL POSTS</div>
        <div># OF POSTS</div>
      </div>
      <div className='content-table' >
        {terms.map((singleTerm) => (
          <SingleTerm key={singleTerm.name} {...singleTerm} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  terms: state.terms
});

export default connect(mapStateToProps)(Content)