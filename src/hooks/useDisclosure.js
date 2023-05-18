import React from 'react'
import { useState } from 'react';

const useDisclosure = () => {
    const [state,setState] = useState(false);

    function toggle(){
        setState(prev=>!prev);
    }

    function open(){
        setState(true);
    }

    function close(){
        setState(false);
    }

    return {isOpen:state,toggle,open,close};
}

export default useDisclosure;
