
      //   getInitialState: function(){
      //     return{
      //       items: [];
      //       total: 0;
      //       currency: 'EUR'
      //
      //       }
      //     },
      //     addItem: function(e, item){
      //       this.state.items.push(item);
      //       this.countTotal();
      //     },
      //     removeItem: function(e, itemId){
      //       var itemIndex;
      //
      //       this.state.items.some(function(item, index){
      //         if(item.id == itemId){
      //           itemIndex = index;
      //           return true;
      //         }
      //       })
      //
      //       if(typeof itemId != 'undefined'){
      //         this.state.items.splice(itemIndex, 1);
      //       }
      //     },
      //     countTotal: function(){
      //       var total = 0;
      //       this.state.items.forEach(function(item, index){
      //         total = total + item.price;
      //       })
      //       this.setstate({total : total})
      //     }
      //     render: function(){
      //       var items = this.state.items.map(function(item){
      //         return(
      //           <li key={item.id}>
      //           <span>{item.name}</span>
      //           <span>{item.price}</span>
      //           </li>
      //         )
      //       })
      //     }
      //
      //
      //     );
      //   }
      // }
