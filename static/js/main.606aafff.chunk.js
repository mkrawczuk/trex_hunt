(this.webpackJsonptrex_hunter=this.webpackJsonptrex_hunter||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(7),r=n.n(c),o=(n(13),n(14),n(1)),i=n(2),l=n(4),u=n(3),m=n(5);n(15),n(16);var d=function(e){for(var t=[],n=0;n<e.lifes;++n)t.push(s.a.createElement("div",{className:"life",key:n}));return s.a.createElement("div",{className:"lifebar"},t)};n(17);var f=function(e){return s.a.createElement("div",{className:"scorebar"},s.a.createElement("span",{className:"score",key:e.score},e.score))};n(18);var E=function(e){return s.a.createElement("div",{className:"scoreboard"},"(placeholder)",s.a.createElement("br",null),"Game Over! Your final score:",s.a.createElement("br",null),e.score,s.a.createElement("br",null),"Click to restart")},h=(n(19),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"cloud",style:{top:Math.floor(40*Math.random())}})}}]),t}(a.Component)),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onCloudReachedEnd=function(){console.log("dua"),n.setState({clouds:n.state.clouds.splice(0,1)})},n.spawnClouds=function(e){if(0!==e){var t=1e4*Math.random()+5e3,a=setTimeout((function(){n.spawnOneCloud(e),n.spawnClouds(--e)}),t);n.setState({spawnCloudsTimerId:a})}},n.spawnOneCloud=function(e){n.setState({clouds:n.state.clouds.concat(s.a.createElement(h,{key:e}))})},n.state={clouds:[],spawnCloudsTimerId:0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.spawnOneCloud(4),this.spawnClouds(3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.spawnCloudsTimerId)}},{key:"render",value:function(){return s.a.createElement("div",{className:"sky "},this.state.clouds.map((function(e){return e})))}}]),t}(a.Component);n(20);var b=function(e){return s.a.createElement("div",{className:"startmenu"},"HAI THIS IS THE START MENU PLACEHOLDER",s.a.createElement("br",null),"Click anywhere to begin ",s.a.createElement("b",null,"the hunt"),".")},O=(n(21),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleEscaped=function(e){e.animationName.includes("run")&&n.props.onEscaped()},n.handleHit=function(){function e(e){return function(t){return new Promise((function(n){return setTimeout((function(){return n(t)}),e)}))}}n.props.onHit(),new Promise((function(e){n.setState({sprite:"trex-shock",style:{WebkitAnimationPlayState:"paused"}}),e()})).then(e(700)).then((function(){n.setState({motion:"",sprite:""})})).then(e(2e3*Math.random())).then((function(){n.restart()}))},n.restart=function(){n.setState({motion:"trex-run",sprite:"trex-toddle",style:{}})},n.state={motion:"trex-run",sprite:"trex-toddle"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.state.motion,style:this.state.style,onAnimationEnd:this.handleEscaped,onClick:this.handleHit},s.a.createElement("div",{className:this.state.sprite}))}}]),t}(a.Component)),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).gameState={START_MENU:0,RUNNING:1,SCOREBOARD:2},n.handleClick=function(){switch(n.state.game){case n.gameState.START_MENU:case n.gameState.SCOREBOARD:n.startGame();break;case n.gameState.RUNNING:}},n.startGame=function(){n.setState({game:n.gameState.RUNNING,lifes:3,score:0,scene:s.a.createElement(s.a.Fragment,null,s.a.createElement(f,{score:n.state.score}),s.a.createElement(d,{lifes:n.state.lifes}),s.a.createElement(O,{onHit:n.trexHit,onEscaped:n.trexEscaped}))})},n.trexHit=function(){n.setState({score:n.state.score+1e3,scene:s.a.createElement(s.a.Fragment,null,s.a.createElement(f,{score:n.state.score+1e3}),s.a.createElement(d,{lifes:n.state.lifes}),s.a.createElement(O,{onHit:n.trexHit,onEscaped:n.trexEscaped}))})},n.trexEscaped=function(){if(0===n.state.lifes)n.setState({game:n.gameState.SCOREBOARD,scene:s.a.createElement(E,{score:n.state.score}),lifes:3,score:0});else{var e=n.state.lifes-1;n.setState({lifes:e,scene:s.a.createElement(s.a.Fragment,null,s.a.createElement(f,{score:n.state.score}),s.a.createElement(d,{lifes:n.state.lifes-1}),s.a.createElement(O,{onHit:n.trexHit,onEscaped:n.trexEscaped,key:e}))})}},n.state={game:n.gameState.START_MENU,lifes:3,scene:s.a.createElement(b,null),score:0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"scene",onClick:this.handleClick},s.a.createElement(p,null),this.state.scene,s.a.createElement("div",{className:"floor"}))}}]),t}(a.Component);var S=function(){return s.a.createElement(v,null)};r.a.render(s.a.createElement(S,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.606aafff.chunk.js.map