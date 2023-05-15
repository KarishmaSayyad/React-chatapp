import React from 'react'

function SendMsg(props) {
  return (
    <div className="message-out FMR">
        <div className="msg-container">
          <div className="its">
            <div className="msg-text ">
            {props.item.text}
              <div className="msgTime ">
                <small>  <small>{props.item.timestamp}</small></small>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}


export default SendMsg;