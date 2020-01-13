class Hello extends React.Component {
    render() {
        return <h1> Hello There</h1>
    }
}
console.log('this loaded')
ReactDOM.render(<Hello/>, document.getElementById('root'))