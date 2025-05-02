import MenuBar from "@/components/MenuBar"
import Footer from "@/components/Footer"
export default function IndexPage() {
  return ( 
  <div>
  <MenuBar/>
  <div className="alert alert-primary" role="alert">
    <h1>เว็บยังไม่เสร็จนะครับ</h1> 
  </div>
  {/*section1*/}
  <div className="section1-box">
    <h1 className="section1-name" barriecito-regular>Hey l'm Wipu</h1>
    <p className="section1-meta-data cascadia-mono-uniquifier">
      มหาวิทยาลัยรามงคลกรุงเทพ <br />
    </p>
    <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t51.75761-15/491459848_18324807223166634_5955574808682799577_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGZfUyMRP74zJ1Bi_-R-By6l61FM_Mh9GuXrUUz8yH0a9L4FzfgL0LKJV5PK4mHQv7dPsUHpnx_FXezqjHp6NDS&_nc_ohc=vXYGuASiUScQ7kNvwGygL3V&_nc_oc=Adm-A9Ii3wAUKxYyeImgUDw4GiCasX-y5VtL-V9vvY1BB6TxXxOmhCrdQ-IDV1hMyao&_nc_zt=23&_nc_ht=scontent.fbkk10-1.fna&_nc_gid=f-eDJsuk003aHJ2D8ZjlkQ&oh=00_AfHLIJFh8VafMTSosF1JmWNuCDHtNresPJfoizPIE9PZ7g&oe=681A1185" />
    <p className="section1-profile-description barriecito-regular"> 
      ชอบนอนดึก<br />
      อยากกินข้าว
    </p>
    <p className="section1-profile-description barriecito-regular"> 
      ชอบนอนดึก<br />
      อยากกินข้าว
    </p>
  </div> 
  {/*section2*/}
  <div className="section2-box">
    <a className="section2-contact-link pacifico-regular" href="https://www.facebook.com/wiwipon.kanchana.5">Facebook</a>
    <br />
    <a className="section2-contact-link pacifico-regular" href="https://www.instagram.com/wipon_kanchana/">Instagram</a>
  </div>
  {/*section3*/}
  <div className="section3-box">
    <div className="section3-box-a">
      <h1 className="section3-box-a-study">ศึกษา</h1>
      <p className="section3-box-a-study1">กำลังศึกษาอยู่ปีที่3 สาขาวัฒกรรมระบบสารสนเทศ<br />
        คณะบริหารธุรกิจ มหาวิทยาลัยราชมงคลกรุงเทพ </p>   
    </div>
    <div className="section3-box-b">
      <h1 className="section3-box-b-work">ฝึกงาน</h1>
      <p className="section3-box-b-work1">เรียน ปวส วิทยาลัยเทคนิคครนายก<br />
        ฝึกงานที่โรงเรียนนายร้อย
      </p>
    </div>
  
</div>
<Footer/>
 </div>
 
  )
}
