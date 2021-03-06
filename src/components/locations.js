import React from "react"
import Background from "../images/utensil-bkgr.png"
import Park1 from "../images/park-1.png"
import Burch from "../images/burch-avenue.jpeg"
import OldBull from "../images/old-bull.jpg"
import Audubon from "../images/audubon-park.png"
import Northgate from "../images/northgate-park.png"
import Woodcroft from "../images/woodcroft.png"
import Brightleaf from "../images/brightleaf.png"

const Locations = () => (
  <div className="locations__wrapper" id="local-pick-up"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundColor: `#D9F0EC`,
      backgroundRepeat: `repeat`
    }}
  >
    <div
      style={{
        padding: `0 30px`,
        maxWidth: `1080px`,
        margin: `0 auto`,
      }}
    >
      <h2
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease-in"
      >
        Delivery Locations
      </h2>
      <div className="container">
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Audubon})`,
            }}
          >
          </div>
          <div className="location__info">
            <p className="park__title">
              Audubon Park
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              corner of Solitude Way & Whisperwind Dr., Durham, NC 27713
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Northgate})`,
            }}
          >
          </div>
          <div className="location__info">
            <p className="park__title">
              Northgate Park
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
            300 W Club Boulevard, Durham, NC 27704
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div className="location__info">
            <p className="park__title">
              Liberty Warehouse Apartments
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              530 Foster St., Durham, NC 27701
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${OldBull})`,
            }}
          >
          </div>
          <div className="location__info">
            <p className="park__title">
              Old Bull at ATC
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              300 Blackwell St., Durham, NC 27701
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Burch})`,
            }}
          >
          </div>
          <div className="location__info">
            <p className="park__title">
              Burch Avenue Park
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              816 Burch Ave., Durham, NC 27701
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Woodcroft})`,
            }}
          >
          </div>
          <div className="location__info">
            <p className="park__title">
              Woodcroft
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              TBD
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Brightleaf})`,
            }}
          >
          </div>
          <div className="location__info">
            <p className="park__title">
              Solis Brightleaf Apartments
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              1005 W Main St, Durham, NC 27701
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Locations
