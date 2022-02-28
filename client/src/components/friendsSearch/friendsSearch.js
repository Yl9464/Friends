import React from 'react'
//import './friendsSearch.css'

const FriendsSearch = (props) => {
    const { name, setName } = props;
    
    return (
      <div className="SearchFriends">
        <h1> Search Friends</h1>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    );
}

export default FriendsSearch