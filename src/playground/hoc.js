import React from 'react';
import ReactDOM from 'react-dom';
import { AST_PropAccess } from 'terser';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>Info is: {props.info}</p>
    
    </div>
);

const wihAdminWarning = (WrappedComponent) => {
    return(props) => (
        <div>
         {props.isAdmin && <p>This is private info! Don't share!</p>}
          <WrappedComponent {...props}/>
        
        </div>
    )

};

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
         {props.isAuthenticated ?
            (<WrappedComponent {...props}/>) :
           <p>Ei ole autenditud!!!</p>}
        
        </div>
    )

};

const AdminInfo = wihAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info = 'This is the detail!' />, document.getElementById('app'));