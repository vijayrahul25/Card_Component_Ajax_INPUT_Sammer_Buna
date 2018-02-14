import React from 'react';

const Card = (props) => {
return (
<div>
    <img width="75" src={props.avatar_url} />
    <div>
      <div>Name: {props.name}</div>
      <div>Company: {props.company}</div>
    </div>
</div>
);
};

export default Card;
