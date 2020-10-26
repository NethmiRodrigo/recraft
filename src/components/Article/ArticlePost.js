import React from 'react';
import '../../assets/css/rpgui/rpgui.css';

function ArticlePost(props) {
    return (
        <div className='rpgui-center rpgui-content rpgui-container framed-grey' style={{marginTop: '30px', marginBottom: '30px', width: '70%', alignItems: 'center'}}>
            <h3 className='h3'> {props.title} </h3> <br />
            <p className='p'>
                {props.content}
            </p> <br />
        </div>
    );
}

export default ArticlePost;