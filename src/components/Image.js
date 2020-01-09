import React from 'react';
import './Image.css';
import angela from '../res/angela2.jpeg';
import darlene from '../res/darlene2.jpeg';
import dom from '../res/dom2.jpeg';
import elliot from '../res/elliot2.jpeg';
import mrrobot from '../res/mrrobot2.jpeg';
import price from '../res/price2.jpeg';
import joanna from '../res/joanna2.jpeg';
import tyrell from '../res/tyrell2.jpeg';
import whiterose from '../res/whiterose.jpeg';


const Image = ({name}) => {
  if(name.toLowerCase().includes('angela'))
    return (<img className='pv2 db no-underline black center' alt='angela' src={angela}/>);
  else if(name.toLowerCase().includes('darlene'))
    return <img className='pv2 db no-underline black center' alt='darlene' src={darlene}/>
  else if(name.toLowerCase().includes('dom'))
    return <img className='pv2 db no-underline black center' alt='dom' src={dom}/>
  else if(name.toLowerCase().includes('elliot'))
    return <img className='pv2 db no-underline black center' alt='elliot' src={elliot}/>
  else if(name.toLowerCase().includes('robot'))
    return <img className='pv2 db no-underline black center' alt='robot' src={mrrobot}/>
  else if(name.toLowerCase().includes('price'))
    return (<img className='pv2 db no-underline black center' alt='price' src={price}/>);
  else if(name.toLowerCase().includes('joanna'))
    return (<img className='pv2 db no-underline black center' alt='joanna' src={joanna}/>);
  else if(name.toLowerCase().includes('tyrell'))
    return (<img className='pv2 db no-underline black center' alt='tyrell' src={tyrell}/>);
  else
    return(<img className='pv2 db no-underline black center' alt='error' src={whiterose} />);
}

export default Image;