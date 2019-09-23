import React from "react";
import API from "../util/API";
// import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid";

class Quizzes extends React.Component {
    state = {
        list: [],

    }

    componentDidMount() {
        this.loadQuizzes();
    }

    loadQuizzes = () => {
        API.getQuizzes().then(res => {
            console.log(res.data);
            this.setState({
                list : res.data,
        
            })
            console.log(this.state);
        })
    }

    getById = () => {
        API.getSingleQuiz().then(res => {
            console.log(res.data)
            this.setState({
                title: res.data,
                author: res.data
            })
        })
    }

    testFunction = () => {
        console.log("Testing");
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size = "md-6">
                        <h1>This is going to be the homepage</h1>
                        {this.state.list.map(item => {
                            <button onClick = {() => this.testFunction()} className = "btn btn-primary"> Click me </button>
                        })}
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Quizzes;