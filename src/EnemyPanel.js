import React from 'react';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class EnemyPanel extends React.Component {
    render() {
        var progress = (this.props.enemy.currentHealth / this.props.enemy.health) * 100;
        return (
            <Col lg="auto" className="border border-danger rounded m-1 d-flex flex-column">
                <ProgressBar className="mt-3" style={{width: 'inherit'}} now={progress} label={`${this.props.enemy.currentHealth}/${this.props.enemy.health}`} striped variant="danger"></ProgressBar>
                <Row className="m-3 justify-content-center align-items-center flex-grow-1">
                    <Col lg= "auto">
                        <Button variant="danger" className="btn-circle btn-xl" onClick={this.props.onClick}>ENEMY!</Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default EnemyPanel;