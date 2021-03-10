import React, { Component } from 'react';
import Card from './CardUI'
import img1 from '../../images/appDesign.jpg';
import img2 from '../../images/application.jpg';
import img3 from '../../images/webDesign.jpg';
import img4 from '../../images/website.jpg';

class Cards extends Component {
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                        <Card imgsrc={img1} title="Aplication Design" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, commodi. Dolorem facere itaque architecto ipsum eaque veritatis velit beatae consequatur?"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                        <Card imgsrc={img2} title="Application" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iusto?"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                        <Card imgsrc={img3} title="Web Design" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia dolorem quae exercitationem, numquam necessitatibus!"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                        <Card imgsrc={img4} title="Website" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id minus mollitia aut."/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Cards;