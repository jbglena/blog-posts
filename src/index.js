import React from 'react';
import ReactDom from 'react-dom';
import './css/styles.css'
import SingleComment from './SingleComment';
import profile1 from './image/avatar1.png';
import profile2 from './image/avatar2.png';
import profile3 from './image/avatar3.png';
import profile4 from './image/avatar4.png';
import profile5 from './image/avatar5.png';
import UserCard from './UserCard.js';

const App =()=>{
    return(
        <div className='ui three column centered grid ui comments principal-container'>
            <div className='column'>
                <UserCard name= 'Luciana'> 
                    <SingleComment 
                        date='Today at 5:00 PM'
                        comment ='It is amazing'
                        picture ={profile1}
                    />
                </UserCard>
            </div>
            <div className='column'>
                <UserCard name= 'Valeria'> 
                    <SingleComment 
                    date='Today at 5:45 PM'
                    comment ='Congratulations!'
                    picture ={profile2}
                    />
                </UserCard>
            </div>
            <UserCard name= 'Leandro'> 
                <SingleComment 
                date='Today at 13:23 PM'
                comment ='Regards!'
                picture ={profile4}
                />
            </UserCard>
            <UserCard name= 'Juliana'> 
                <SingleComment 
                    date='Today at 14:00 PM'
                    comment ='Hello, nice to meet you :D'
                    picture ={profile3}
                />
             </UserCard> 
            <UserCard name= 'Santino'> 
                <SingleComment 
                date='Today at 14:05 PM'
                comment ='Have a nice week. See you soon.'
                picture = {profile5}
                />
            </UserCard> 
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)