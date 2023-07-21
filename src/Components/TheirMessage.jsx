const TheirMessage = ({lastMessage, message}) =>
{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar"
                  style={{backgroundImage: `url(${message?.sender?.avatar})`}}>
                </div>
            )}
            { message?.attachments?.length > 0
                    ? (
                        <img src={message.atatchments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{marginleft: isFirstMessageByUser ? '4px' : '48px'}}>
            
                        </img>
                    ):
                    (
                        <div className="message" style={{ float: 'left', backgroundColor:'#CABCDC', marginleft: isFirstMessageByUser ? '4px' : '48px'}}>

                        {message.text}
                    </div>
                    )
                 }
        </div>
    );
}

export default TheirMessage;