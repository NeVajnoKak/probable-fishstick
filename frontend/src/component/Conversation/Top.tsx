import React from 'react'

type Props = {}

const Top = (props: Props) => {
  return (
    <div className="conversation-top">
                        <button type="button" className="conversation-back"><i className="ri-arrow-left-line"></i></button>
                        <div className="conversation-user">
                            <img className="conversation-user-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <div>
                                <div className="conversation-user-name">CP Geek</div>
                            </div>
                        </div>
                    </div>
  )
}

export default Top