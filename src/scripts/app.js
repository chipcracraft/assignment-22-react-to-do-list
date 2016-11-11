const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
const $ = require('jquery')

console.log(React)

let HomeView = React.createClass({

    getInitialState: function(){
          return {
              listItems: [],
              inputText: ""
          }
        },


        onInputChange: function(evt){
              return this.setState({
                inputText: evt.target.value
              })

        },


        addList: function(evt){
          evt.preventDefault()
            let itemsArr = this.state.listItems

            itemsArr.push(
              {
                text: this.state.inputText

              }
            )
          return this.setState({
                listItems : itemsArr,
                inputText : ""
        })

},

  
  //

render: function(){

    return  <div>
          <div className="header list-head text-center">
              <h3> To-Do List </h3>

          <div className="todo-list text-center">
              <div className="input-group input-group-lg text-center list-input list">
              <form onSubmit={this.addList}>
                <input onChange = {this.onInputChange} type="text" className="form-control" placeholder="" aria-describedby="sizing-addon1" value = {this.state.inputText} ref={(a) => this._inputElement = a} />
              </form>
            </div>
              <ul className="theList">
              {this.state.listItems.map((items, i) => {
                  return <ToDoList key={i} itemName = {items.text}><button onClick={DeleteClick}> X </button></ToDoList>
                })}
              </ul>
          </div>
        </div>
      </div>
  }

})

  var ToDoList = React.createClass ({
     render: function() {

          return <li>{this.props.itemName}</li>
        }

  })

ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
