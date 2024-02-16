import Card from "./Card";

import muladharaIcon from "../../assets/imgs/img_muladhara_chakra_with_background.svg";
import sahasraraIcon from "../../assets/imgs/img_sahasrara_chakra_with_background.svg";
import anahataIcon from "../../assets/imgs/img_anahata_chakra_with_background.svg";

const CardList = ({ kapServiceList }) => {

  const getImg = (imgName) => {
    switch(imgName){
      case 'img_muladhara':
        return muladharaIcon;
      case 'img_sahasrara':
        return sahasraraIcon;
      case 'img_anahata':
        return anahataIcon;
      default:
        return '';
    }
  }

  return (
    <div className="row align-items-stretch mt-4 mx-0">
      <div className="col-12 d-flex justify-content-between p-0">
        {kapServiceList.length > 0 &&
          kapServiceList.map((kapService, index) => {
            const cardDescriptionList = kapService.descriptionList;
            const cardImg = getImg(kapService.imgName);
            return(
              <Card key={index} imgUrl={cardImg} imgAlt="" imgText={kapService.imgText}>
                <h3 className="card-title">{kapService.name}</h3>
                {cardDescriptionList.length > 0 && 
                <ul className="card-list">
                  {cardDescriptionList.map((description, itemIndex) =>{
                    return(
                      <li key={itemIndex} className="card-item">
                        <span className="card-item-bullet">•</span>
                        <span>{description.item}</span>
                      </li>)
                    })}
                </ul>}
              </Card>)
        })}
      </div>
    </div>
  );
};

export default CardList;
