import React from 'react';
import TalkItems from '../components/TalkItems';
import MainLayout from "../layouts/MainLayout";

// const TalkEntry = ({ link, text, year, big }) => {
//     return (
//         <div className="talks-entry text-color-primary">
//             {/* <div className={`talks-entry--title ${big}`}>{year}</div>
//             <div className="talks-entry--body">
//             <p>{text}</p>
//             <em><a href={link} className="text--link">See Presentation</a></em>
//             </div> */}
//         </div>
//     )
// }

const talkEntry = [{
    year:'2018',
    title:'Coming soon...',
    text:"Coming soon..."
},{
    year:'2019',
    title:'Coming soon...',
    text:"Coming soon..."
},{
    year:'2020',
    title:'Coming soon...',
    text:"Coming soon..."
}]

const Talks = () => {


    return (
        <MainLayout id="talks" className=" main-content u-padding-left-small u-padding-right-small u-margin-top-medium">
            <div className="talks-header u-center-text text-color-primary">
                <h1>Past Talks</h1>
            </div>
            
                <div className="container">

                    {talkEntry.map((data, index) => {

                       return <TalkItems
                            key = {index}
                            year={data.year}
                            title={data.title}
                            text={data.text}
                        />
                    }
                    
                    )};


{/* 
                    <div className = "accordion">
                        <div className="accordion-item" id="question2">
                            <a className="accordion-link" href="#question2">
                                How often do you go to beach?
                                <i className="fa fa-angle-right"></i>
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <div className="answer">
                            <p>Lorem Lorem lorejfhfnfhhfnhejjjrebfejendfbfndj</p>
                            </div>
                        </div>

                    </div>


                    <div className = "accordion">
                        <div className="accordion-item" id="question3">
                            <a className="accordion-link" href="#question3">
                                How often do you go to beach?
                                <i className="fa fa-angle-right"></i>
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <div className="answer">
                                <p>Lorem Lorem lorejfhfnfhhfnhejjjrebfejendfbfndj</p>
                            </div>
                        </div>

                    </div>

                    <div className = "accordion">
                        <div className="accordion-item" id="question4">
                            <a className="accordion-link" href="#question4">
                                How often do you go to beach?
                                <i className="fa fa-angle-right"></i>
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <div className="answer">
                            <p>Lorem Lorem lorejfhfnfhhfnhejjjrebfejendfbfndj</p>
                            </div>
                        </div>

                    </div>
                     */}
                </div>
          

        </MainLayout>
    )
}

export default Talks;