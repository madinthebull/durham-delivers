import React from "react"
import DurhamImg from "../images/durham-img.jpg"
import BlueCorn from "../images/blue-corn.jpg"
import BullCity from "../images/bull-city-burger.png"
import Copa from "../images/copa.png"
import Dames from "../images/dames-chicken-and-waffles.png"
import Goorsha from "../images/goorsha.jpg"
import Parker from "../images/parker-and-otis.png"
import Pompierei from "../images/pompierei.jpg"
import Zweli from "../images/zweli.png"

const Restaurants = () => (
  <div id="participating-restaurants">
    <div className="order__container">
      <h2
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-easing="ease-in"
      >
       Participating Restaurants
      </h2>
      <div>
        <div className="container">
          <div
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://bluecorncafedurham.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${BlueCorn})`,
                }}
              >
                <div class="restaurant__title">
                  Blue Corn Café
                </div>
              </div>
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://www.bullcityburgerandbrewery.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${BullCity})`,
                }}
              >
                <div class="restaurant__title">
                  Bull City Burger & Brewery
                </div>
              </div>
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://copadurham.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${Copa})`,
                }}
              >
                <div class="restaurant__title">
                  Copa
                </div>
              </div>
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://dameschickenwaffles.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${Dames})`,
                }}
              >
                <div class="restaurant__title">
                  Dame's Chicken & Waffles
                </div>
              </div>
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://www.goorshadurham.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${Goorsha})`,
                }}
              >
                <div class="restaurant__title">
                  Goorsha
                </div>
              </div>
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://www.parkerandotis.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${Parker})`,
                }}
              >
                <div class="restaurant__title">
                  Parker & Otis
                </div>
              </div>
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://www.pompieripizza.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${Pompierei})`,
                }}
              >
                <div class="restaurant__title">
                  Pompieri Pizza
                </div>
              </div>
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease-in"
            className="location__item"
          >
            <a href="https://www.zwelis.com/" target="_blank" rel="noreferrer" className="restaurant__link">
              <div className="restaurant__image"
                style={{
                  backgroundImage: `url(${Zweli})`,
                }}
              >
                <div class="restaurant__title">
                  Zweli's
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="cover__image"
      style={{
        backgroundImage: `url(${DurhamImg})`
      }}>
    </div>
  </div>
)

export default Restaurants
