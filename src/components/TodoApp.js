import React, {Component} from 'react';
import nolist from '../img/no-list.svg';
import './TodoAdd.css'


export default class TodoApp extends Component {
  render() {
    
    let {listItems, onDone} = this.props;
    
    if(!listItems || listItems.length === 0){
      return <img className="nolist" src={nolist} alt="logo-nolist"/>;
    }
    return (
      <div className="ToDoApp">
        <div className="upcoming">
          <h3>upcoming</h3>
          <div className="overup" id="style-scroll-up">
          { listItems.map(function(x, index){
              if(x.isDone === false){              
                return (               
                  <div key={index} className="itemup" onClick={onDone(x)}>{index +1}. {x.title}</div>
                )              
              }            
            })
          }
          </div>
        </div>
        <div className="finished">
          <h3>finished</h3>
          <div className="overfinished" id="style-scroll">
          { listItems.map(function(x, index){
              if(x.isDone === true){              
                return (<div key={index} className="itemdone" onClick={onDone(x)}>{index +1}. {x.title}</div>)              
              }            
            })
          }
          </div>
        </div>
      </div>
    );
    
  }
}

// Requirements:
// Viết một app todo-list có giao diện như hình https://cdn.glitch.com/780fd861-6c5c-464f-8b1b-c3c0ed64e30a%2FPasted_Image_4_20_20__9_05_PM.png?v=1587384320345
// Không cần phải giống 100%, nhưng càng giống càng tốt và phải có tính thẩm mỹ
// Illustration có thể tải ở đây https://undraw.co/illustrations hoặc các nguồn khác và upload lên Glitch assets
// Cần làm:
// - Màn hình danh sách todo list, nếu trống thì hiển thị một hình nào đó như trong ảnh
// - Khi ấn nút + để tạo todo mới thì hiển thị modal có chứa 1 text input và nút để add
// - Khi ấn vào 1 item thì sẽ toggle trạng thái isDone của nó
// - Nếu isDone là true thì cho vào danh sách Finished, còn không thì ở Upcoming