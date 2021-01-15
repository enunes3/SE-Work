// //importing React.Component library line 8 in index.html
// class App extends React.Component{
// //class MUST have a render function -- so a Component must render some view
//
//
// render(){
//   return (
//     <div>
//       <h3> Hello </h3>
//     </div>
//   )
// }
// }
//
// ReactDOM.render(
//   <App />,
//   document.querySelector('.container')
// )

// class App extends React.Component {
//   tardis = {
//   name: 'Time and Relative Dimension in Space',
//   caps: false,
// }
// render() {
//       return(
//           <div>
//              <DivOne />
//           </div>
//       )
//   }
// }
// changeIt = (text) => {
//   if (this.state.tardis.caps) {
//     this.setState({
//       tardis: {
//         name: text.toLowerCase(),
//         caps: false
//       }
//     })
//   } else {
//     this.setState({
//       tardis: {
//         name: text.toUpperCase(),
//         caps: true
//       }
//     })
//   }
// }
//   render() {
//       return(
//           <div>
//              <DivOne />
//           </div>
//       )
//   }
// }
// class DivOne extends React.Component {
//     render () {
//         return(
//             <div>
//                 <DivTwo />
//             </div>
//         )
//     }
// }
// class DivTwo extends React.Component {
//     render () {
//         return(
//             <div>
//                <DivThree />
//             </div>
//         )
//     }
// }
// class DivThree extends React.Component {
//     render () {
//         return(
//         <div onClick={this.changeIt}>
//             <div>
//              <h3>Futbol is Life!! "Davi Sanchez"</h3>
//             </div>
//              <div>
//              <h3>FUTBOL IS LIFE!! "DAVI SANCHEZ"</h3>
//             </div>
//         </div>
//         )
//     }
// }
class App extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false
        }
    }
    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: text.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() {
        return (<div onClick= { () => this.changeIt(this.state.tardis.name)}>
            <DivOne datta={this.state.tardis.name}/>
        </div>)
    }
}
class DivOne extends React.Component {
    render() {
        return (<div>
            <DivTwo datta={this.props.datta}/>
        </div>)
    }
}
class DivTwo extends React.Component {
    render() {
        return (<div>
            <DivThree datta={this.props.datta}/>
        </div>)
    }
}
class DivThree extends React.Component {
    render() {
        return (<div>
            <DivFour datta={this.props.datta}/>
        </div>)
    }
}
class DivFour extends React.Component {
    render() {
        return (<div>
            <h3>{this.props.datta}</h3>
        </div>)
    }
}

ReactDOM.render(<App />, document.querySelector(".container"))
