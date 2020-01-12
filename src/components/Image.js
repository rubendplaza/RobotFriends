import React from 'react';
import './Image.css';
import angela from '../res/angela.jpeg';
import darlene from '../res/darlene.jpeg';
import dom from '../res/dom.jpeg';
import elliot from '../res/elliot.jpeg';
import mrrobot from '../res/mrrobot.jpeg';
import price from '../res/price.jpeg';
import joanna from '../res/joanna.jpeg';
import tyrell from '../res/tyrell.jpeg';
import whiterose from '../res/whiterose.jpeg';
import susan from '../res/susan.jpeg';
import gideon from '../res/gideon.jpeg';
import terry from '../res/terry.jpeg';
import scott from '../res/scott.jpeg';
import krista from '../res/krista.jpeg';
import vera from '../res/vera.jpeg';
import shayla from '../res/shayla.jpeg';


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
  else if(name.toLowerCase().includes('whiterose'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={whiterose} />);
  else if(name.toLowerCase().includes('susan'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={susan} />);
  else if(name.toLowerCase().includes('gideon'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={gideon} />);
  else if(name.toLowerCase().includes('terry'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={terry} />);
  else if(name.toLowerCase().includes('scott'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={scott} />);
  else if(name.toLowerCase().includes('krista'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={krista} />);
  else if(name.toLowerCase().includes('vera'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={vera} />);
  else if(name.toLowerCase().includes('shayla'))
    return(<img className='pv2 db no-underline black center' alt='whiterose' src={shayla} />);
  else
    return(<img className='pv2 db no-underline black center' alt='error' src={whiterose} />);
}

export default Image;