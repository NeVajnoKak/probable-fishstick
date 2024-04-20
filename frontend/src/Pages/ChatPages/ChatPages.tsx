import React, { useEffect, useState } from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import ChatSidebar from '../../component/Sidebar/ChatSidebar'
import DefaultConversation from '../../component/Conversation/Default'
import TopConversation from '../../component/Conversation/Top'
import MeItemConversation from '../../component/Conversation/Item/Me'
import SideItemConversation from '../../component/Conversation/Item/Side'

import './ChatPages.css';
import './ChatPagesTailWind.css'
type Props = {}
const ChatPages = (props: Props) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const addNewMessage = () => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    };
    useEffect(() => {
        document.querySelector('.chat-sidebar-profile-toggle')?.addEventListener('click', function(this: HTMLElement, e: Event) {
            e.preventDefault();
            const parentElement = this.parentElement;
            if (parentElement) {
                parentElement.classList.toggle('active');
            }
        });

        document.addEventListener('click', function(e: Event) {
            const target = e.target as HTMLElement;
            if (!target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
                const profileElement = document.querySelector('.chat-sidebar-profile');
                if (profileElement) {
                    profileElement.classList.remove('active');
                }
            }
        });

        document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
            item.addEventListener('click', function(this: HTMLElement, e: Event) {
                e.preventDefault();
                const parentElement = this.parentElement;
                if (parentElement) {
                    if (parentElement.classList.contains('active')) {
                        parentElement.classList.remove('active');
                    } else {
                        document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
                            i.classList.remove('active');
                        });
                        parentElement.classList.add('active');
                    }
                }
            });
        });

        document.addEventListener('click', function(e: Event) {
            const target = e.target as HTMLElement;
            if (!target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
                document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
                    i.classList.remove('active');
                });
            }
        });

        document.querySelectorAll('.conversation-form-input').forEach(function(item) {
            item.addEventListener('input', function(this: HTMLTextAreaElement) {
                this.rows = this.value.split('\n').length;
            });
        });

        document.querySelectorAll('[data-conversation]').forEach(function(item) {
            item.addEventListener('click', function(this: HTMLElement, e: Event) {
                e.preventDefault();
                const conversationId = this.dataset.conversation;
                if (conversationId) {
                    document.querySelectorAll('.conversation').forEach(function(i) {
                        i.classList.remove('active');
                    });
                    const conversationElement = document.querySelector(conversationId);
                    if (conversationElement) {
                        conversationElement.classList.add('active');
                    }
                }
            });
        });

        document.querySelectorAll('.conversation-back').forEach(function(item) {
            item.addEventListener('click', function(this: HTMLElement, e: Event) {
                e.preventDefault();
                const closestConversation = this.closest('.conversation');
                if (closestConversation) {
                    closestConversation.classList.remove('active');
                }
                const defaultConversation = document.querySelector('.conversation-default');
                if (defaultConversation) {
                    defaultConversation.classList.add('active');
                }
            });
        });
    }, []);
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet" />
    <section className="chat-section">
        <div className="chat-container">
            <Sidebar/>
            <div className="chat-content">
                <ChatSidebar/>
                <DefaultConversation/>
                <div className="conversation" id="conversation-1">
                    <TopConversation/>
                    <div className="conversation-main">
                        <ul className="conversation-wrapper">
                            <div className="coversation-divider"><span>Today</span></div>
                            <MeItemConversation imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" message="Hello" time="12:30"/>
                            <SideItemConversation imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" message="Hoiiii" time="12:34"/>
                            {messages.map((msg, index) => (
                                        <MeItemConversation
                                            key={index}
                                            imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                            message={msg}
                                            time="12:30"
                                        />
                                    ))}
                        </ul>
                    </div>
                    <div className="conversation-form">
                        <div className="conversation-form-group">
                            <textarea className="conversation-form-input" placeholder="Type here..." value={message} onChange={handleMessageChange}></textarea>
                        </div>
                        <button type="button" className="conversation-form-button conversation-form-submit" onClick={addNewMessage}><i className="ri-send-plane-2-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ChatPages