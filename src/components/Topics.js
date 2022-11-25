import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'

import {useRef} from 'react';


const Topics = ({topicid}) => {
    const [topic,setTopic]= useState([])
    const ref=useRef()
    


const {category_id}=topic
    return (
   
        <div>
          
        </div>
    );
};

export default Topics;