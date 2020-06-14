import React from "react"
import Thumbnail from "../components/Thumbnail"
import MainLayout from "../layouts/MainLayout"

// import ProjectImage from './../images/melineo.png';
import img from "../images/melineo.png"
import img2 from "../images/melineo.png"
import img3 from "../images/melineo.png"

const thumbnailData = [
  {
    img: img,
    title: "Melineo Calculator",
    description:
      "Melineo calculator is a solar calculator that calculates the power you need for your appliances in the house. ",
  },
  {
    img: img2,
    title: "2Melineo Calculator2",
    description:
      "2Melineo calculator is a solar calculator that calculates the power you need for your appliances in the house. ",
  },
  {
    img: img3,
    title: "3Melineo Calculator",
    description:
      "3Melineo calculator is a solar calculator that calculates the power you need for your appliances in the house. ",
  },
]

const Showcase = () => {
  return (
    <MainLayout
      id="showcase"
      className="main-content u-padding-left-small u-padding-right-small"
    >
      <div className="projects-header u-center-text text-color-primary">
        <h1>Major Projects</h1>
        <p>These are my major projects that I have worked on</p>
      </div>
      {thumbnailData.map(data => (
        <Thumbnail
          image={data.img}
          title={data.title}
          description={data.description}
          key={`pt-${data.title.replace(/\s+/, '').toLocaleLowerCase()}`}
        />
      ))}
      ;
    </MainLayout>
  )
}

export default Showcase
