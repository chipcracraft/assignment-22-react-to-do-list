const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
const $ = require('jquery')

console.log(React)
// document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`

let HomeView = React.createClass({

    getInitialState: function(){
          return {
              listItems: []
          }
        },

        var ToDoList = React.createClass ({
           render: function() {
              let listEntry = this.props.entries;

              function addToList(item) {
                return <li key={item.key}>{item.text}</li>
              }
              let listItems = listEntry.map(addToList)

              return (
                <ul className="to-do-list">
                  {listIems}
                  </ul>
              )
           }
        })


        const addList: function(){
            let itemsArr = this.state.items

            itemsArr.push(
              {
                text: this._inputElement.value
                key: i
              }
            )
          this.setState({
            listItems : itemsArr
        }),
          this._inputElement.value = ""

  //


  // _keyDownEvt: function(evt){
  //     if(evt.key == 'Enter'){
  //
  //       }
  //     },

      // componentWillMount: function(){
      //
      //     var self = this
      //       Backbone.Events.on('change-list',function(addedlist,newStatus){
      //         console.log('inventory changed', addedlist, newStatus)
      //
      //         let listCopy = self.state.listItems.map((copy) => {return copy})
      //         let indexAt
      //         let listObj = listCopy.find(function(itemObj,i){
      //             indexAt = i
      //             return itemObj === addedlist
      //
      //         })
      //
      //         listCopy[indexAt] = addedlist
      //         self.setState({listItems: listCopy})
      //
      //     })
      //
      // },
  // _handleNewListSubmit: function(){
  //
  //     let addListEl = this.refs.addListEl.value
  //
  //             let newStateObj = {
  //                   listData : {
  //                   addList : addListEl
  //                   }
  //                 }
  //                   this.setState(newStateObj)
  //         },


  // render: function(){
  //         let jsxList = this.state.listItems.map(function(itemEl, i){
  //           return <HomeView key={i} itemData = {itemEl}/>
  //
  //
  //         })

render: function(){

    return  <div>
          <div className="header list-head text-center">
              <h3> To-Do List </h3>
            </div>
          <div className="todo-list text-center">
              <div className="input-group input-group-lg text-center list-input list">
              <form onSubmit={this.addList}>
                <input type="text" className="form-control" placeholder="" aria-describedby="sizing-addon1" onKeyDown={this._keyDownEvt} ref={(a) => this._inputElement = a} />
              </form>
            </div>
              <ul>
              <ToDoList entries={this.state.items}/>
              </ul>
          </div>
        </div>
  }

})



ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
