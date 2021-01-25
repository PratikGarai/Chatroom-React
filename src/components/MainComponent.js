import React from 'react';

class MainComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            messages : [],
        }

        this.setMessages = this.setMessages.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.props.componentRef.messages = this.state.messages;
        this.props.componentRef.addMessage = this.addMessage;
    }

    setMessages(updatedMessages)
    {
        //console.log("Called setMessgaes ");
        //console.log(updatedMessages);
        this.setState( prevState => {
            return {   
                ...prevState ,
                messages : updatedMessages,
            }
        });
    }

    addMessage(newMessage)
    {
        const oldMessages = [ ...this.state.messages ];
        oldMessages.push(newMessage);
        //console.log("Called addMessgaes ");
        //console.log(oldMessages);
        this.setMessages(oldMessages);
    }

    render()
    {
        return(
            <div>
                There are {this.state.messages.length} message here.
            </div>
        );
    }
}

export default MainComponent;