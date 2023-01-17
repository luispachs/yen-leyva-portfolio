import Layout from "./Layout";
import image1 from "../assets/Images/worksImages/1.jpeg"
import image2 from "../assets/Images/worksImages/2.jpeg"
import image3 from "../assets/Images/worksImages/3.jpeg"
import image4 from "../assets/Images/worksImages/4.jpeg"
import image5 from "../assets/Images/worksImages/5.jpeg"
import image6 from "../assets/Images/worksImages/6.jpeg"
import image7 from "../assets/Images/worksImages/7.jpeg"
import image8 from "../assets/Images/worksImages/8.jpeg"
import image9 from "../assets/Images/worksImages/9.jpeg"
import image10 from "../assets/Images/worksImages/10.jpeg"
import image11 from "../assets/Images/worksImages/11.jpeg"
import image12 from "../assets/Images/worksImages/12.jpeg"
import image13 from "../assets/Images/worksImages/13.jpeg"
import image14 from "../assets/Images/worksImages/14.jpeg"
import image15 from "../assets/Images/worksImages/15.jpeg"
import image16 from "../assets/Images/worksImages/16.jpeg"
import image17 from "../assets/Images/worksImages/17.jpeg"
import image18 from "../assets/Images/worksImages/18.jpeg"
import image19 from "../assets/Images/worksImages/19.jpeg"
import image20 from "../assets/Images/worksImages/20.jpeg"
import image21 from "../assets/Images/worksImages/21.jpeg"
import image22 from "../assets/Images/worksImages/22.jpeg"
import image23 from "../assets/Images/worksImages/23.jpeg"
import image24 from "../assets/Images/worksImages/24.jpeg"
import image25 from "../assets/Images/worksImages/25.jpeg"
import image26 from "../assets/Images/worksImages/26.jpeg"
import image27 from "../assets/Images/worksImages/27.jpeg"
import image28 from "../assets/Images/worksImages/28.jpeg"
import image29 from "../assets/Images/worksImages/29.jpeg"
import image30 from "../assets/Images/worksImages/30.jpeg"
import image31 from "../assets/Images/worksImages/31.jpeg"

function MyWorks(){

    let images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30,image31]

    let image=images.map((elem,id)=>{
       return( <div key={id} id={`image-${id}`}  className="workImages">
            <figure>
                <img src={elem} alt="imagen de manicura" height={150} width={150} id={`images-${id}`}/>
            </figure>
        </div>)
    });

    return (
        <Layout>
            <div className="gridContainer">
                {image}
            </div>
        </Layout>
    )

}

export default MyWorks;