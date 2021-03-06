import React from 'react'
import EditQuestion from './EditQuestion'
import styled from 'styled-components'
import {Icon, } from 'semantic-ui-react'

class ShowQuestion extends React.Component {
  state = { question: { ...this.props.question}, editQuestion: false}


  toggleEdit = () => {
    this.setState({ editQuestion: !this.state.editQuestion})
  }
  handleSetQuestioningState = (index, editedQuestion) => {
    this.props.handleSetQuestionState(index, editedQuestion)
    this.setState({ question: {...editedQuestion}, })
  }



  render () {
    const { index } = this.props
    const { question, editQuestion } = this.state

    return(
      <>
      { editQuestion ?
        <QuestionDiv>
         <EditQuestion question={this.state.question} index={index} toggleEdit={this.toggleEdit} handleSetQuestioningState={this.handleSetQuestioningState} />
            <SmallDelete onClick={() => this.props.filterQuestion(index)}><Icon name='trash alternate outline' size='large' /></SmallDelete>
            <SmallEdit onClick={() => this.toggleEdit()}><Icon name='edit' size='large' /></SmallEdit>
        </QuestionDiv>
          :
          <QuestionDiv>
            <h3>Question {index + 1}</h3>
            <StyledH4>Type: {question.kind}</StyledH4>
            <StyledH4>Points: {question.points_possible}</StyledH4>
            <StyledH4>Question: {question.body}</StyledH4>
            {question.choices.map( (choice, index) => 
              <h5 style={{margin: 0}} key={index}>
                Q{index+1}: {choice.text} {choice.correct ? '(Correct)' : ''}
              </h5>
              )}
            <SmallDelete onClick={() => this.props.filterQuestion(index)}><Icon name='trash alternate outline' size='large' /></SmallDelete>
            <SmallEdit onClick={() => this.toggleEdit()}><Icon name='edit' size='large' /></SmallEdit>
          </QuestionDiv>
        }
      </>
    )
  }
}
const QuestionDiv = styled.div`
  box-shadow: 1px 1px 1px 1px #ededed;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 2px solid #ededed;
  padding: 5px;
  position: relative;

`

const SmallDelete = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  position: absolute;
  right: 5px;
  top: 5px;
  
  :hover {
    color: #23a24d;
    cursor: pointer;
  }
`
const SmallEdit = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  position: absolute;
  right: 5px;
  bottom: 5px;
  
  :hover {
    color: #23a24d;
    cursor: pointer;
  }
`

const StyledH4 = styled.h4`
  margin: 0;
`

export default ShowQuestion;