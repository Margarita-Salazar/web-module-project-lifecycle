import React from 'react';

class GithubCard extends React.Component{
    render(){
        const { name, location, bio, avatar_url } = this.props.user
        return(
            <div>
                <img src={avatar_url} alt={`${avatar_url}`} />
                <h2>Name: {name}</h2>
                <p>Location: {location ? location : 'Location unavailable'}</p>
                <p>Bio: {bio ? bio : 'Bio unavailable'}</p>
            </div>)}
}
export default GithubCard;