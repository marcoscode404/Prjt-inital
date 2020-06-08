import styled from "styled-components";
export const Content = styled.div`
display:block;
`;
export const Sidemenu = styled.div`
    width:200px;
    height:100%;
    background:#fff;
    display:block;
    position:fixed;
    color:#353940;
    margin:0;
    padding:0;

    div.content{
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
    }

    div.sidetitle{
        background:red;
        width:100%;
        height:160px;
    }
    
    div.sidecontent{
        background:blue;
        width:100%;
        height:100%;

    }
`;