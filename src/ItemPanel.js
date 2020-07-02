import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class ItemPanel extends React.Component{
    render(){
        var items = this.props.items.map((item, i) => 
            <li key={i} className="m-1">
                <Button variant={this.props.canAffordItem(item.cost) ? "success" : "dark"} className="p-3 w-100" onClick={() => this.props.onClick(i)}>
                    <Row className="m-0"><strong>Name:&nbsp;</strong>{item.name}</Row>
                    <Row className="m-0"><strong>Cost:&nbsp;</strong>{item.cost}</Row>
                    <Row className="m-0"><strong>{item.isAutoAttack ? "Auto Attack Power" : "Power"}:&nbsp;</strong>{item.power}</Row>
                </Button>
            </li>
        );
        return(
            <ul className="p-0" style={{listStyleType: "none"}}>{items}</ul>
        );
    }
}

export default ItemPanel;