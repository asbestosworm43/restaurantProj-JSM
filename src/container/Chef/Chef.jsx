import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            auctor at arcu in sodales. Etiam quis porttitor neque. Curabitur
            sodales sagittis tincidunt.
          </p>
        </div>
        <p className="p__opensans">
          Vestibulum blandit neque nibh, id vulputate dolor imperdiet sit amet.
          Curabitur sodales sagittis tincidunt. Vivamus id sapien non sem
          placerat gravida. Etiam quis porttitor neque. In hendrerit dui nec
          quam feugiat hendrerit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Praesent lacus est,
          dignissim sit amet velit imperdiet, consectetur pulvinar felis. Donec
          sit.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
