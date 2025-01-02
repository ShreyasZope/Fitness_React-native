import React from 'react';
import { useState } from 'react';

let Loss = false;

const AppToggle= ()=>{
    if(Loss){
        Loss=false;
    }else{
        Loss=true;
    }
}
export {Loss,AppToggle};

