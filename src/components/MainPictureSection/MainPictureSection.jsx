import pictBaby1x from "../images/baby@1x-min.png";
import pictBaby2x from "../images/baby@2x-min.png";

const MainPictureSection = () => {
    return (
      <section>
          <img
              src={pictBaby1x}
              srcSet={pictBaby1x + " 1x," + pictBaby2x + " 2x"}
              alt="Baby with nanny is watching book" />
        
          <div>
              <svg>
                  <use />
              </svg>
              <p>Some text</p>
              <p></p>
          </div>
    </section>
  )
}

export default MainPictureSection