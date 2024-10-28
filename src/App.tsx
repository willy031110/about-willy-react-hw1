
import './App.css'

function App() {
  

  return (
    <>
      <div id="app">
      <div id="container">
        <div id="user">
          <div id="avatar">
            <img src="/1727373563896.jpg" alt="大頭貼" />
          </div>
          <div id="userInfo">
            <div id="nameAndTitle">
              <p className="title">潘劭威 Willy</p>
              <p>淡江大學資管系</p>
            </div>
            <div id="aboutUser">
              <p>
                Willy 是一位學生，目前就讀新北市淡水區，
                淡江大學學校財團法人淡江大學。
              </p>
              <p>
                目前主修資訊管理系，對程式設計和數據分析特別感興趣，也積極參加相關的課外活動。
              </p>
              <p>
                我希望畢業後能夠進入科技公司從事程式開發相關的工作，並持續學習新技術以提高自己的專業能力。
              </p>
            </div>
          </div>
        </div>

        <div id="edu">
          <p className="title">學歷</p>
          <p>新北市立海山高級中學畢業、淡江大學三年級</p>
        </div>

        <div id="about">
          <div id="contact">
            <p className="title">聯絡方式</p>
            <div id="contactInfo">
              <div id="locate">
                <p className="title">定位 <i className="bi bi-geo-alt"></i></p>
                <p>潘劭威 Willy</p>
                <p>管管系 Tamkang University</p>
              </div>
              <div id="email">
                <p className="title">Email <i className="bi bi-envelope"></i></p>
                <p>E-mail: 411630063@o365.tku.edu.tw</p>
              </div>
            </div>
          </div>

          <div id="experiences">
            <p className="title">經歷</p>
            <div className="experience">
              <p className="title">大學</p>
              <p>新北市淡水區淡江大學三年級</p>
            </div>
            <div className="experience">
              <p className="title">高中</p>
              <p>新北市立海山高級中學</p>
            </div>
            <div className="experience">
              <p className="title">國中</p>
              <p>新北市樹林區育林國民中學</p>
            </div>
            <div className="experience">
              <p className="title">國小</p>
              <p>新北市樹林區育林國民小學</p>
            </div>
          </div>

          <div id="experiences">
            <p className="title">我的愛車 GSX-R150</p>
            <div id="avatar">
              <img src="/IMG20240706061406.jpg" alt="150R" />
            </div>
          </div>

          <div id="experiences">
            <p className="title">MMBCU</p>
            <div id="avatar">
              <img src="/IMG20230829090726.jpg" alt="MMBCU" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
