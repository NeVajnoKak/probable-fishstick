import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className="chat-sidebar">
               
            <ul className="chat-sidebar-menu">
               
                <li className="chat-sidebar-profile">
                    <button type="button" className="chat-sidebar-profile-toggle">
                    </button>       
                </li>
            </ul>
    </aside>
  )
}

export default Sidebar