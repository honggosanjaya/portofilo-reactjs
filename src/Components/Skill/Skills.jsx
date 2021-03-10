import React, {Fragment } from 'react';
import Skill from './Skill';

const Services = (props) => {
    const servis = [
        {judul: "WEB DESIGN", paragraf1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},

        {judul: "FRONTEND WEB DEVELOPMENT", paragraf1:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},

        {judul: "UI/UX", paragraf1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur laboriosam officiis consectetur eaque, odit omnis, in rem ullam nihil exercitationem, accusamus facilis. Labore, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio.", paragraf2:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "},
    ];

    return ( 
        <Fragment>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {servis.map((serv) => (
                        <Skill key={serv.judul} gambar={serv.gambar} judul={serv.judul} paragraf1={serv.paragraf1} paragraf2={serv.paragraf2}/>
                    ))}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Services;