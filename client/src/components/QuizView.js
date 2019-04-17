import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Segment, Header, Icon, } from 'semantic-ui-react';

class QuizView extends React.Component {
  state = { title: '', due_date: '', }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/quizzes/${id}`)
      .then( res => {
        this.setState( res.data )
      })
  }

  render() {
    const { title, due_date } = this.state
    return (
      <>
       <Header as={Link} to='' onClick={() => this.props.history.goBack()} content='< Course Work' color='green' size='huge' textAlign='left'/>
        <Header style={{ color: '#23A24D' }}>
          <Icon name='block layout' color='green' />
            {title}
        </Header>
        <Moment format='ddd, MMM D, LT' date={due_date} />
        <Segment>
          <div 
            Quiz questions etc here
          />
        </Segment> 
      </>
    )
  }
}

export default QuizView