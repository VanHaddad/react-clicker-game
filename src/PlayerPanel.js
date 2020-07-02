import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemPanel from './ItemPanel';
import ListGroup from 'react-bootstrap/ListGroup';

class PlayerPanel extends React.Component {
    render() {
        return (
            <Col lg="auto" className="border border-success rounded m-1">
                <ListGroup className="m-1" horizontal>
                    <ListGroup.Item><strong>Power</strong><br />{this.props.player.power}</ListGroup.Item>
                    <ListGroup.Item><strong>Auto Attack Power</strong><br />{this.props.player.autoAttackPower}</ListGroup.Item>
                    <ListGroup.Item><strong>Money</strong><br />{this.props.player.money}</ListGroup.Item>
                </ListGroup>
                <ItemPanel items={this.props.items} onClick={this.props.itemOnClick} canAffordItem={this.props.canAffordItem}></ItemPanel>
            </Col>
        );
    }
}

export default PlayerPanel;