import React from 'react';

const UserCard = (props) => {
    return(
        <div className='column'>
            <div className='ui card'>
                <div className='content'>
                    <div className='header'>
                        {props.name}
                    </div>
                    <div className='description'>
                        {props.children}
                    </div>
                </div>
                <div className='ui botton button'>
                    <i className='add icon'></i>
                    Add Friend
                </div>
            </div>
        </div>    
    )
}

export default UserCard;