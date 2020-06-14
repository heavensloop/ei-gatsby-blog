import React from "react"
import WelcomeItems from "../components/WelcomeItems"
import MainLayout from "../layouts/MainLayout"

const Welcome = () => {
  return (
    <MainLayout id="index-page">
      <div className="grid l-grid-height">
        <div className="l-grid-left bg-color l-height-100 d-flex flex-direction">
          {/* <h3 className="grid--title u-margin-top-huge u-padding-left u-padding-right u-center-text">
                        {name}
                    </h3>
                    <p className="grid-intro u-padding-left-small u-padding-right-small u-center-text">
                        {introduction}
                    </p> */}
          <WelcomeItems
            name="Esther"
            introduction="Hi, my name is Esther Itolima. I'm a Front-End Developer base in
                        Lagos, Nigeria. I'm passionate about building maintainable,
                        accessible and responsive websites."
          />
        </div>
        <div className="l-grid-right">
          <div className="profile-image" />
        </div>
      </div>
    </MainLayout>
  )
}

export default Welcome
