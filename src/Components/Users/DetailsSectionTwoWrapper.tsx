import "../../styles/base.css";
import { FieldTitle,DetailsGroupSectionTwo } from '../../index';

function DetailsSectionTwoWrapper(props:{title:string,dataOne:[],dataTwo?:[]}){
    return <div className="details-section-two-wrapper">
        <FieldTitle {...{title:props.title}}/>
    <div className="section-two-for-details-section-two-wrapper">
{
    props.dataOne.map((i)=>{
return <DetailsGroupSectionTwo {...{ title:i.title,title:i.text }}/>
    })
}

    </div>
    <div className="section-three-for-details-section-two-wrapper">
        {props.dataTwo?
                props.dataTwo.map((i)=>{
                    return <DetailsGroupSectionTwo {...{ title:i.title,title:i.text }}/>
                        })
                        :""
        }

    </div>

    </div>
}

export default DetailsSectionTwoWrapper