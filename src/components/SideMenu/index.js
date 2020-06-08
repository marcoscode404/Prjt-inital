import React from 'react';
import {Sidemenu, Content} from './styles';



const SideMenu = (
    
) =>(
<Content>
    <button onClick = {fechanav()} >fechar</button>
    <Sidemenu  id ="menu">
        <div className="content">
            <div className="sidetitle">
                <div className="avatar">

                </div>
            </div>
            <div className="sidecontent">

            </div>
        </div>
    </Sidemenu>
    </Content>
    
);

function fechanav(){
    var alerta = 'oi'
    console.log(alerta)

}
export default SideMenu;