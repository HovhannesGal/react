import {useEffect} from 'react';

export const useSiteTitle = (title) =>{
    useEffect(() =>{
      document.title = `instagram ${title}`;
    }, []);
  };

 
