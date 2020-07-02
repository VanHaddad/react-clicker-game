(this["webpackJsonpreact-clicker-game"]=this["webpackJsonpreact-clicker-game"]||[]).push([[0],{26:function(e,t,n){e.exports=n(36)},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),s=n(5),o=n(6),i=n(9),u=n(8),m=n(24),h=n(10),p=n(14),y=n(18),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t,n){return r.a.createElement("li",{key:n,className:"m-1"},r.a.createElement(y.a,{variant:e.props.canAffordItem(t.cost)?"success":"dark",className:"p-3 w-100",onClick:function(){return e.props.onClick(n)}},r.a.createElement(h.a,{className:"m-0"},r.a.createElement("strong",null,"Name:\xa0"),t.name),r.a.createElement(h.a,{className:"m-0"},r.a.createElement("strong",null,"Cost:\xa0"),t.cost),r.a.createElement(h.a,{className:"m-0"},r.a.createElement("strong",null,t.isAutoAttack?"Auto Attack Power":"Power",":\xa0"),t.power)))}));return r.a.createElement("ul",{className:"p-0",style:{listStyleType:"none"}},t)}}]),n}(r.a.Component),k=n(16),d=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,{lg:"auto",className:"border border-success rounded m-1"},r.a.createElement(k.a,{className:"m-1",horizontal:!0},r.a.createElement(k.a.Item,null,r.a.createElement("strong",null,"Power"),r.a.createElement("br",null),this.props.player.power),r.a.createElement(k.a.Item,null,r.a.createElement("strong",null,"Auto Attack Power"),r.a.createElement("br",null),this.props.player.autoAttackPower),r.a.createElement(k.a.Item,null,r.a.createElement("strong",null,"Money"),r.a.createElement("br",null),this.props.player.money)),r.a.createElement(f,{items:this.props.items,onClick:this.props.itemOnClick,canAffordItem:this.props.canAffordItem}))}}]),n}(r.a.Component),E=n(25),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.enemy.currentHealth/this.props.enemy.health*100;return r.a.createElement(p.a,{lg:"auto",className:"border border-danger rounded m-1 d-flex flex-column"},r.a.createElement(E.a,{className:"mt-3",style:{width:"inherit"},now:e,label:"".concat(this.props.enemy.currentHealth,"/").concat(this.props.enemy.health),striped:!0,variant:"danger"}),r.a.createElement(h.a,{className:"m-3 justify-content-center align-items-center flex-grow-1"},r.a.createElement(p.a,{lg:"auto"},r.a.createElement(y.a,{variant:"danger",className:"btn-circle btn-xl",onClick:this.props.onClick},"ENEMY!"))))}}]),n}(r.a.Component),b=function e(){Object(s.a)(this,e),this.money=0,this.power=1,this.autoAttackPower=0},w=function(){function e(t,n){Object(s.a)(this,e),this._health=t,this._currentHealth=t,this._value=n}return Object(o.a)(e,[{key:"IsDead",value:function(){return this._currentHealth<=0}},{key:"DamageEnemy",value:function(e){this._currentHealth-=e}},{key:"value",set:function(e){this._value=e},get:function(){return this._value}},{key:"health",set:function(e){this._health=e},get:function(){return this._health}},{key:"currentHealth",set:function(e){this._currentHealth=e},get:function(){return this._currentHealth}}]),e}(),g=function(){function e(t,n,a,r){Object(s.a)(this,e),this._name=t,this._cost=n,this._power=a,this._isAutoAttack=r,this._level=0}return Object(o.a)(e,[{key:"name",get:function(){return this._name}},{key:"isAutoAttack",get:function(){return this._isAutoAttack}},{key:"level",get:function(){return this._level},set:function(e){this._level=e}},{key:"cost",get:function(){return this._cost},set:function(e){this._cost=e}},{key:"power",get:function(){return this._power},set:function(e){this._power=e}}]),e}(),j=n(15),A=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(j.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(j.a.Brand,{href:"#"},"React Clicker Game"),r.a.createElement(j.a.Collapse,{className:"justify-content-end"},r.a.createElement(j.a.Text,null,"Created by Van Haddad")))}}]),n}(r.a.Component),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={player:new b,enemy:new w(10,1),items:_},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.autoAttackEnemy()}},{key:"canAffordItem",value:function(e){return this.state.player.money>=e}},{key:"autoAttackEnemy",value:function(){var e=this.state.enemy,t=this.state.player;e.DamageEnemy(t.autoAttackPower),this.checkEnemyDead()}},{key:"checkEnemyDead",value:function(){var e=this.state.enemy,t=this.state.player;e.IsDead()&&(t.money+=e.value,e=new w(Math.round(1.1*e.health)+1,Math.round(1.1*e.value)+1)),this.setState({enemy:e,player:t})}},{key:"handleClickEnemy",value:function(){var e=this.state.enemy,t=this.state.player;e.DamageEnemy(t.power),this.checkEnemyDead()}},{key:"handleItemClick",value:function(e){var t=this.state.player,n=this.state.items,a=n[e];n[e].cost>t.money||(a.isAutoAttack?t.autoAttackPower+=a.power:t.power+=a.power,t.money-=a.cost,a.cost=Math.round(1.5*a.cost)+1,a.power=Math.round(1.2*a.power)+1,this.setState({player:t,items:n}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement(A,null),r.a.createElement(m.a,{fluid:!0},r.a.createElement(h.a,{className:"justify-content-center"},r.a.createElement(d,{player:this.state.player,items:this.state.items,itemOnClick:function(t){return e.handleItemClick(t)},canAffordItem:function(t){return e.canAffordItem(t)}}),r.a.createElement(v,{enemy:this.state.enemy,onClick:function(){return e.handleClickEnemy()}}))))}}]),n}(r.a.Component),_=[new g("Sword",5,1,!1),new g("Attack Dog",10,3,!0),new g("Turret",50,10,!0)],C=O;n(34),n(35);l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0ce34e7c.chunk.js.map