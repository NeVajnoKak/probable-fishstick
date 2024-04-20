import React from 'react'

type Props = {}

type MeItemConversation = {
    imageSrc: string;
    message: string;
    time: string;
}

const Me: React.FC<MeItemConversation> = ({ imageSrc, message, time }) => {
  return (
    <li className="conversation-item me">
                                <div className="conversation-item-side">
                                    <img className="conversation-item-image" src={imageSrc} alt=""/>
                                </div>
                                <div className="conversation-item-content">
                                    
                                    <div className="conversation-item-wrapper">
                                        <div className="conversation-item-box">
                                            <div className="conversation-item-text">
                                                <p>{message}</p>
                                                <div className="conversation-item-time">{time}</div>
                                            </div>
                                            <div className="conversation-item-dropdown">
                                                <button type="button" className="conversation-item-dropdown-toggle"><i className="ri-more-2-line"></i></button>
                                                <ul className="conversation-item-dropdown-list">
                                                    <li><a href="#"><i className="ri-share-forward-line"></i> Forward</a></li>
                                                    <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
  )
}

export default Me