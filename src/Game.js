import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PlayerPanel from './PlayerPanel';
import EnemyPanel from './EnemyPanel';
import Player from './Player';
import Enemy from './Enemy';
import Item from './Item';
import TopNav from './TopNav';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player: new Player(),
            enemy: new Enemy(10, 1),
            items: items,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.autoAttackEnemy();
      }

    canAffordItem(itemCost){
        return this.state.player.money >= itemCost;
    }

    autoAttackEnemy(){
        var enemy = this.state.enemy;
        var player = this.state.player;

        enemy.DamageEnemy(player.autoAttackPower);
        this.checkEnemyDead();
    }

    checkEnemyDead(){
        var enemy = this.state.enemy;
        var player = this.state.player;
        if (enemy.IsDead()){
            player.money += enemy.value;
            enemy = new Enemy(Math.round(enemy.health * 1.1) + 1, Math.round(enemy.value * 1.1) + 1);
        }
        this.setState({
            enemy: enemy,
            player: player
        });
    }

    handleClickEnemy(){
        var enemy = this.state.enemy;
        var player = this.state.player;
        enemy.DamageEnemy(player.power);
        this.checkEnemyDead();
    }

    handleItemClick(i){
        var player = this.state.player;
        var items = this.state.items;
        var item = items[i];
        if (items[i].cost > player.money){
            return;
        }

        if (item.isAutoAttack) {
            player.autoAttackPower += item.power;
        } else {
            player.power += item.power;
        }

        player.money -= item.cost;
        item.cost = Math.round(item.cost * 1.5) + 1;
        item.power = Math.round(item.power * 1.2) + 1;

        this.setState({
            player: player,
            items: items,
        });
    }

    render() {
        return (
            <main>
            <TopNav />
            <Container fluid>
                <Row className="justify-content-center">
                    <PlayerPanel player={this.state.player} items={this.state.items} itemOnClick={(i) => this.handleItemClick(i)} canAffordItem={(i) => this.canAffordItem(i)}></PlayerPanel>
                    <EnemyPanel enemy={this.state.enemy} onClick={() => this.handleClickEnemy()}></EnemyPanel>
                </Row>
            </Container>
            </main>
        );
    }
}

var items = [
    new Item("Sword", 5, 1, false), 
    new Item("Attack Dog", 10, 3, true),
    new Item("Turret", 50, 10, true),
];

export default Game;