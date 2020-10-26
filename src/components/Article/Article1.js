import React from 'react';
import ArticlePost from './ArticlePost';
import '../../assets/css/rpgui/rpgui.css';

function Article1() {
    return(
        <div className='grid-container' style={{marginLeft: '360px', marginTop: '70px', marginBottom: '70px'}}>
            <ArticlePost title='Glass' content='Most household glass can be recycled over and over again; just rinse or wash out the container and recycle. Glass is one of the easiest materials to recycle, so buy products packaged in glass if you can. Some glass items, such as car windshields, cooking dishes, and light bulbs, aren’t usually accepted by local recycling systems, so check with your local government’s waste office to find out how to recycle these items.' />
            <ArticlePost title='Metals' content='Metal food and drink cans made from aluminum or steel are recyclable, and aluminum cans in particular are very valuable. You can even recycle used aluminum foil; just be sure cans and foil are clean.' />
            <ArticlePost title='Organics' content='Some recyclers include organic materials, such as yard and kitchen waste, in their regular services, whereas others offer seasonal organics recycling, such as Christmas tree drop-off locations after the holiday season.' />
            <ArticlePost title='Paper' content='Nearly every paper item is recyclable, though you should check with your local recycling service provider before you bring in your milk and juice cartons. These cartons are made of cardboard sandwiched between very thin layers of plastic, so not all the material is recyclable and not all centers accept them. If you have a garden, you can recycle your own paper in your compost pile.' />
            <ArticlePost title='Plastic' content='Each plastic product has a Plastic Identification Code — a triangle with a number from 1 to 7 inside — usually on the bottom. Most recycling services accept plastics with codes 1 or 2, which include beverage bottles and containers used for milk, juice, and body-care products.' />
            <ArticlePost title='Textiles' content='Many charitable and nonprofit organizations operate drop-off points for textiles like clothes and shoes. You usually find these sites in supermarket parking lots and in the organizations’ own business locations. What the groups can’t reuse they generally sell to private firms that deal in textiles.' />
        </div>
    );
}

export default Article1;