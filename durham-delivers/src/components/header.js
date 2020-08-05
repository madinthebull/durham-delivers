import PropTypes from "prop-types"
import React from "react"
import HeroImg from "../images/hero.jpg"
import Hamburger from "../components/hamburger"

const Header = () => (
  <header
    style={{
      backgroundImage: `url(${HeroImg})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      height:  `calc(100vh - 75px)`
    }}
  >
  <Hamburger />
    <div className="header__container">
      <h1>
<<<<<<< HEAD
        Delivery from your favorite, independent Durham restaurants.
=======
        Order safe, pick up safe and stay safe with&nbsp;<br />
         <span
          style={{
            color: `white`,
            borderBottom: `11px solid #FFFFFF`
          }}
        >
        Durham Delivers.
        </span>
>>>>>>> master
      </h1>
      <div className="logo__container">
        <svg width="244" height="277" viewBox="0 0 244 277" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.5 24L53.5 1H188L207.5 222H34L50 24H45.5Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M228.451 276.577C227.705 276.423 226.98 276.185 226.289 275.866C225.64 275.57 225.032 275.191 224.48 274.739L225.949 272.123C226.615 272.666 227.374 273.083 228.19 273.354C229.03 273.644 229.912 273.791 230.801 273.79C231.634 273.835 232.465 273.654 233.203 273.264C233.467 273.118 233.687 272.902 233.837 272.639C233.988 272.377 234.064 272.079 234.057 271.776C234.067 271.582 234.039 271.388 233.973 271.205C233.908 271.022 233.807 270.854 233.677 270.711C233.4 270.436 233.057 270.238 232.681 270.133C232.166 269.985 231.641 269.87 231.11 269.79H231.048H230.983L230.729 269.752C229.783 269.608 228.853 269.377 227.95 269.061C227.199 268.787 226.545 268.299 226.066 267.659C225.549 266.992 225.29 266.045 225.29 264.817C225.263 263.836 225.515 262.868 226.018 262.026C226.528 261.236 227.266 260.621 228.135 260.263C229.197 259.831 230.338 259.624 231.484 259.655C232.105 259.657 232.724 259.726 233.33 259.861C233.962 260.002 234.58 260.205 235.173 260.466C235.774 260.726 236.348 261.043 236.888 261.414L235.55 264.098C234.923 263.666 234.241 263.32 233.522 263.067C232.871 262.83 232.184 262.704 231.491 262.696C230.711 262.654 229.934 262.82 229.24 263.177C228.995 263.306 228.791 263.5 228.65 263.738C228.509 263.976 228.436 264.248 228.44 264.525C228.43 264.735 228.461 264.944 228.532 265.142C228.603 265.34 228.713 265.521 228.855 265.676C229.143 265.963 229.496 266.176 229.885 266.295C230.449 266.464 231.022 266.603 231.601 266.71C231.631 266.719 231.662 266.725 231.693 266.728L231.786 266.748L231.92 266.776L232.054 266.803C232.964 266.97 233.855 267.224 234.716 267.563C235.434 267.864 236.052 268.362 236.501 268.999C237.018 269.801 237.27 270.747 237.218 271.7V271.725C237.245 272.695 236.983 273.652 236.466 274.474C235.931 275.266 235.167 275.877 234.277 276.223C233.174 276.651 231.997 276.855 230.815 276.825C230.02 276.827 229.228 276.744 228.451 276.577ZM0 259.816H1.59559H3.16716H5.56225C6.79519 259.782 8.02014 260.024 9.14804 260.524C10.0978 260.959 10.8884 261.68 11.4093 262.586C11.9491 263.588 12.2165 264.714 12.1848 265.851V270.621C12.2098 271.725 11.9522 272.817 11.4368 273.793C10.9252 274.708 10.1455 275.444 9.20294 275.9C8.06058 276.435 6.80894 276.694 5.54853 276.656H3.16716H1.59559H0V259.816ZM3.16716 273.591V262.875H5.63088C6.66258 262.875 7.46324 263.125 8.03285 263.624C8.32356 263.894 8.55096 264.225 8.6987 264.594C8.84643 264.962 8.91082 265.359 8.88725 265.755V270.711C8.91082 271.107 8.84643 271.504 8.6987 271.872C8.55096 272.24 8.32356 272.572 8.03285 272.841C7.47696 273.343 6.6603 273.591 5.63088 273.591H3.16716ZM19.9395 276.086C19.0346 275.61 18.3023 274.861 17.8464 273.945C17.3429 272.889 17.0971 271.729 17.1293 270.559V259.816H20.2964V270.642C20.2492 271.46 20.5281 272.263 21.0719 272.876C21.688 273.388 22.4636 273.669 23.2645 273.669C24.0655 273.669 24.8411 273.388 25.4572 272.876C25.7299 272.573 25.9395 272.218 26.0738 271.833C26.2082 271.447 26.2645 271.039 26.2395 270.632V259.816H29.4033V270.559C29.436 271.729 29.189 272.89 28.6827 273.945C28.2228 274.861 27.487 275.61 26.5792 276.086C25.5393 276.57 24.4063 276.821 23.2594 276.821C22.1125 276.821 20.9795 276.57 19.9395 276.086ZM35.9849 259.816H34.7256V276.656H37.8927V269.886H39.8131L43.6026 276.656H47.4388L43.4224 269.72C43.8053 269.615 44.175 269.461 44.5222 269.26C45.2263 268.844 45.794 268.232 46.1555 267.497C46.5375 266.668 46.7353 265.765 46.7353 264.851C46.7353 263.937 46.5375 263.035 46.1555 262.205C45.7952 261.471 45.2287 260.858 44.5256 260.442C43.7856 260.015 42.9431 259.799 42.0893 259.816H37.8927H35.9849ZM37.8927 262.906V266.831H41.8182C42.1222 266.838 42.4213 266.753 42.6761 266.587C42.9282 266.417 43.1261 266.179 43.2457 265.899C43.3862 265.574 43.4597 265.223 43.4619 264.868C43.4667 264.514 43.3977 264.163 43.2594 263.837C43.1385 263.558 42.9395 263.319 42.6864 263.15C42.4275 262.984 42.1254 262.899 41.8182 262.906H37.8927ZM52.1294 259.816H55.2966V266.776H61.3289V259.816H64.4961V276.656H61.3289V269.831H55.2966V276.656H52.1294V259.816ZM77.3122 259.816H75.3151L68.8882 276.656H72.299L73.2419 273.952H79.3822L80.3284 276.656H83.7357L77.3122 259.816ZM78.3134 270.896L76.3068 265.16L74.3071 270.896H78.3134ZM98.7239 259.816H102.896V276.656H100.018V264.718L96.919 274.79H94.1258L91.0376 264.962V276.656H88.1587V259.816H92.3312L95.5327 271.157L98.7239 259.816ZM119.278 259.816H117.686V276.656H119.278H120.849H123.231C124.491 276.694 125.743 276.435 126.885 275.9C127.828 275.445 128.608 274.709 129.119 273.793C129.634 272.817 129.892 271.725 129.867 270.621V265.851C129.899 264.714 129.631 263.588 129.091 262.586C128.57 261.68 127.78 260.959 126.83 260.524C125.702 260.024 124.477 259.782 123.244 259.816H120.849H119.278ZM120.849 262.875V273.591H123.313C124.342 273.591 125.159 273.343 125.715 272.841C126.006 272.572 126.233 272.24 126.381 271.872C126.529 271.504 126.593 271.107 126.569 270.711V265.755C126.593 265.359 126.529 264.962 126.381 264.594C126.233 264.225 126.006 263.894 125.715 263.624C125.145 263.125 124.345 262.875 123.313 262.875H120.849ZM134.994 259.816H136.14H138.161H146.252V262.875H138.161V266.762H144.982V269.817H138.161V273.591H146.252V276.656H138.161H136.14H134.994V259.816ZM154.175 259.816H151.015L151.008 276.656H152.425H154.175H162.273V273.591H154.175V259.816ZM169.825 276.656H166.528V259.816H169.812L169.825 276.656ZM177.199 259.816H173.939L179.533 276.656H182.007L187.6 259.816H184.34L180.768 271.044L177.199 259.816ZM191.954 259.816H193.097H195.121H203.209V262.875H195.121V266.762H201.939V269.817H195.121V273.591H203.209V276.656H195.121H193.097H191.954V259.816ZM209.235 259.816H207.976L207.969 276.656H211.136V269.886H213.06L216.849 276.656H220.689L216.669 269.72C217.052 269.615 217.422 269.461 217.769 269.261C218.474 268.845 219.043 268.232 219.406 267.497C219.785 266.667 219.982 265.765 219.982 264.851C219.982 263.938 219.785 263.035 219.406 262.205C219.043 261.472 218.477 260.86 217.776 260.442C217.034 260.015 216.191 259.799 215.336 259.816H211.136H209.235ZM211.136 262.899V266.831H215.068C215.371 266.838 215.669 266.752 215.923 266.587C216.177 266.419 216.376 266.18 216.496 265.899C216.635 265.574 216.707 265.223 216.708 264.868C216.715 264.514 216.646 264.163 216.506 263.837C216.391 263.552 216.191 263.31 215.934 263.142C215.677 262.974 215.375 262.889 215.068 262.899H211.136ZM244.589 273.477H241.425V276.656H244.589V273.477Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M189.96 1.76991V1.37469C189.962 1.03325 189.837 0.703356 189.609 0.449245C189.382 0.195134 189.068 0.0349935 188.729 0H188.674H188.591H188.533H188.427C188.376 0.00582622 188.325 0.0150114 188.276 0.0274944C188.225 0.0147118 188.173 0.00552389 188.121 0H188.011H187.898H52.3006C52.0167 0.00017155 51.7399 0.0885124 51.5082 0.252851C51.2765 0.41719 51.1014 0.649439 51.007 0.917605L43.2075 23.0639C43.1345 23.2711 43.1123 23.4929 43.1425 23.7105C43.1728 23.9282 43.2547 24.1354 43.3814 24.3148C43.5081 24.4942 43.6759 24.6406 43.8707 24.7416C44.0655 24.8427 44.2817 24.8955 44.5011 24.8956H48.9619L36.3002 169.836L31.4619 223.387H209.32L189.96 1.76991ZM186.8 199.753L170.47 217.847L187.164 26.7652L186.8 199.753ZM188.173 202.334L204.688 220.638H171.651L188.173 202.334ZM206.102 218.101L189.545 199.756L189.888 32.5733L206.102 218.101ZM53.2717 2.74938H185.959L179.128 22.1463H46.4296L53.2717 2.74938ZM39.0452 170.084L52.1977 24.8956H180.099C180.383 24.8962 180.661 24.8082 180.893 24.6438C181.126 24.4794 181.301 24.2467 181.396 23.978L185.743 11.6849L167.488 220.638H34.6291L39.0452 170.084ZM148.747 88.9321L148.731 88.9239C148.296 88.6871 142.407 85.4848 136.689 83.5124C143.864 76.7833 148.393 67.7035 149.217 58.2662C149.244 57.9638 149.251 57.6854 149.254 57.4139V56.9362C149.27 56.6256 149.18 56.3188 148.999 56.0659C148.819 55.813 148.557 55.6291 148.259 55.5441C147.96 55.4591 147.641 55.4782 147.355 55.598C147.068 55.7179 146.83 55.9316 146.681 56.2042C140.954 66.6862 130.701 74.3879 119.199 76.8692C114.068 75.2108 108.546 75.2108 103.415 76.8692C92.4343 74.4017 83.5985 66.7653 79.7382 56.3829C79.6301 56.0959 79.4294 55.8533 79.1678 55.6938C78.9063 55.5343 78.5989 55.4669 78.2948 55.5025C77.9906 55.538 77.707 55.6745 77.4892 55.8901C77.2713 56.1056 77.1317 56.388 77.0926 56.6922C77.072 56.8537 77.048 57.0118 77.0205 57.1699L77.0115 57.2293L77.0115 57.2294C76.973 57.4826 76.933 57.7453 76.9107 58.0257C76.0872 67.4492 79.0176 76.5359 84.9951 83.3028C78.8061 85.2394 71.9799 88.6286 71.4456 88.8939L71.424 88.9046C71.218 89.0078 71.0413 89.1612 70.9101 89.3508C70.7789 89.5403 70.6974 89.7598 70.6732 89.9892C70.6489 90.2185 70.6826 90.4503 70.7713 90.6631C70.8599 90.876 71.0006 91.0631 71.1803 91.2072C71.4754 91.4444 77.9024 96.5445 83.9279 97.902C83.6618 99.0666 83.4761 100.248 83.372 101.438C82.7544 108.515 85.0877 115.316 89.7853 120.234C89.6148 120.873 89.5 121.526 89.4421 122.186C89.0063 127.186 89.8127 130.73 91.9058 133.022C95.0593 136.459 100.543 136.459 106.345 136.459C115.555 136.459 124.257 136.459 125.482 122.416C125.545 121.747 125.545 121.074 125.482 120.406C131.044 115.532 134.568 108.748 135.186 101.672C135.296 100.406 135.313 99.133 135.237 97.8642C141.358 96.4781 148.439 91.5688 148.88 91.2626L148.891 91.2554C149.082 91.1212 149.236 90.9402 149.338 90.7297C149.44 90.5191 149.487 90.2859 149.474 90.0522C149.461 89.8185 149.389 89.592 149.264 89.3942C149.139 89.1964 148.966 89.0338 148.76 88.9218L148.747 88.9321ZM133.556 95.3897C133.2 95.4402 132.879 95.6282 132.66 95.9135C132.441 96.1988 132.343 96.5585 132.386 96.9156C132.552 98.4224 132.569 99.942 132.437 101.452C131.861 108.044 128.471 114.371 123.135 118.808C122.95 118.961 122.809 119.16 122.726 119.385C122.642 119.61 122.619 119.853 122.658 120.089C122.776 120.786 122.808 121.495 122.75 122.2C121.745 133.73 115.62 133.73 106.348 133.73C100.941 133.73 96.2705 133.73 93.9338 131.176C92.3897 129.489 91.8166 126.63 92.1803 122.437C92.2484 121.703 92.4063 120.98 92.6505 120.285C92.7343 120.039 92.7465 119.774 92.6858 119.521C92.625 119.268 92.4938 119.037 92.3073 118.856C87.8019 114.474 85.5475 108.202 86.1308 101.672C86.2669 100.147 86.5472 98.6384 86.9681 97.1665C87.0227 96.9742 87.0347 96.7723 87.0034 96.5749C86.9721 96.3774 86.8982 96.1892 86.7868 96.0233C86.6754 95.8575 86.5292 95.7179 86.3584 95.6144C86.1877 95.5109 85.9964 95.446 85.798 95.4241C81.8897 94.9945 77.2196 92.1145 74.7215 90.3756C77.7 89.0009 83.3617 86.4886 87.9151 85.3304C88.1516 85.2704 88.3677 85.1483 88.5414 84.9767C88.7151 84.8052 88.84 84.5904 88.9032 84.3545C88.9665 84.1186 88.9658 83.87 88.9013 83.6344C88.8368 83.3988 88.7108 83.1847 88.5362 83.0141C83.0306 77.5575 79.8219 70.1954 79.57 62.4419C82.0713 66.8208 85.4732 70.6173 89.5503 73.5798C93.6274 76.5422 98.2866 78.603 103.219 79.6255C103.455 79.6733 103.7 79.6602 103.929 79.5877C108.714 77.964 113.9 77.964 118.684 79.5877C118.918 79.6703 119.169 79.687 119.412 79.6358C129.826 77.4913 139.314 71.3395 145.737 62.7615C143.835 70.7198 139.392 77.839 133.082 83.0381C132.89 83.1987 132.745 83.4089 132.663 83.6462C132.581 83.8834 132.566 84.1386 132.618 84.384C132.671 84.6294 132.79 84.8556 132.962 85.0382C133.134 85.2208 133.352 85.3528 133.594 85.4198C137.766 86.5814 142.67 88.9046 145.377 90.2725C142.656 91.9599 137.591 94.8158 133.556 95.3897ZM147.416 140.789C147.571 140.899 147.701 141.039 147.799 141.201C147.971 141.552 148.003 141.955 147.89 142.329C147.777 142.702 147.526 143.019 147.189 143.215L121.11 159.189C120.44 159.616 119.672 159.863 118.879 159.908C118.086 159.953 117.295 159.795 116.581 159.447L114.765 158.509C114.471 158.357 114.136 158.303 113.808 158.354L140.024 173.39C140.696 173.773 141.276 174.299 141.724 174.93C142.172 175.562 142.476 176.284 142.615 177.046C142.911 178.664 142.557 180.333 141.63 181.689C140.704 183.094 139.288 184.101 137.66 184.514C136.893 184.721 136.092 184.767 135.308 184.649C134.523 184.53 133.771 184.251 133.099 183.827L103.13 164.471L71.4204 183.078C70.7255 183.498 69.9547 183.776 69.1522 183.898C68.3497 184.019 67.5312 183.981 66.7434 183.786C65.9933 183.599 65.2933 183.249 64.6928 182.761C64.0922 182.274 63.6057 181.66 63.2674 180.964C62.9238 180.244 62.7313 179.46 62.7018 178.662C62.6722 177.864 62.8064 177.069 63.0959 176.325C63.6807 174.745 64.8352 173.443 66.3316 172.675L93.8581 158.478L93.6385 158.333C93.146 158.038 92.5839 157.879 92.0098 157.873C91.4358 157.867 90.8704 158.014 90.3718 158.299C86.3743 160.385 81.8586 160.33 78.29 158.158C75.6993 156.563 71.7155 153.412 69.0253 149.69C64.6537 143.634 65.8204 139.218 67.5704 136.582C69.3204 133.946 72.9988 131.063 80.5787 132.286C85.2419 133.042 89.9223 135.153 92.513 136.73C96.0851 138.906 98.0513 142.799 97.7768 147.154C97.7199 147.709 97.8232 148.27 98.0743 148.769C98.3254 149.267 98.714 149.684 99.1939 149.968L104.485 153.003L109.227 150.56C109.487 150.429 109.711 150.238 109.883 150.003C110.054 149.768 110.167 149.496 110.212 149.209L110.535 147.092C110.669 146.284 110.993 145.519 111.482 144.862C111.97 144.204 112.607 143.673 113.341 143.311L140.672 129.898C140.838 129.807 141.02 129.751 141.208 129.734C141.395 129.717 141.585 129.739 141.764 129.798C141.943 129.857 142.108 129.953 142.248 130.079C142.389 130.205 142.502 130.359 142.58 130.53C142.718 130.899 142.711 131.307 142.562 131.671C142.412 132.036 142.131 132.33 141.774 132.496L118.574 143.896L120.506 147.848L143.246 135.331C143.407 135.231 143.587 135.165 143.774 135.138C143.962 135.11 144.153 135.122 144.336 135.173C144.519 135.223 144.689 135.311 144.836 135.43C144.984 135.55 145.105 135.699 145.191 135.868C145.347 136.228 145.361 136.634 145.229 137.004C145.097 137.375 144.83 137.681 144.481 137.861L121.745 150.377L123.677 154.33L145.819 140.768C145.976 140.662 146.153 140.589 146.339 140.553C146.525 140.517 146.717 140.52 146.902 140.56C147.087 140.601 147.262 140.678 147.416 140.789ZM89.2017 155.749C91.2606 154.68 93.6214 154.718 95.3782 155.855L96.9738 156.887L101.26 154.673L97.5571 152.549C96.6543 152.008 95.9219 151.222 95.4438 150.283C94.9656 149.344 94.7609 148.29 94.8532 147.24C95.0625 143.913 93.5596 140.937 90.8351 139.277C85.7978 136.208 74.0728 131.877 69.9689 138.06C65.865 144.243 74.9341 152.573 79.9714 155.642C82.6821 157.302 86.1478 157.34 89.2017 155.749ZM139.265 176.755C139.034 176.43 138.736 176.159 138.39 175.96L110.651 160.079L106.05 162.777L134.825 181.359C135.171 181.576 135.559 181.719 135.963 181.778C136.367 181.837 136.779 181.812 137.172 181.703C138.011 181.492 138.739 180.973 139.214 180.249C139.453 179.902 139.621 179.51 139.709 179.098C139.797 178.685 139.802 178.259 139.725 177.844C139.652 177.452 139.495 177.08 139.265 176.755ZM118.921 157.003C119.208 156.987 119.485 156.897 119.727 156.742L121.1 155.917L115.874 145.233L114.464 145.92C114.194 146.049 113.96 146.241 113.78 146.481C113.601 146.72 113.482 146.999 113.434 147.295L113.112 149.412C112.984 150.205 112.671 150.957 112.198 151.606C111.725 152.256 111.106 152.784 110.39 153.147L107.398 154.687L104.19 156.34L99.7086 158.65L96.5929 160.254L67.4915 175.245C66.7236 175.64 66.131 176.308 65.8307 177.118C65.6815 177.501 65.6121 177.91 65.6269 178.32C65.6416 178.73 65.7402 179.133 65.9165 179.504C66.0908 179.861 66.3412 180.176 66.65 180.427C66.9588 180.678 67.3186 180.857 67.7042 180.954C68.1088 181.054 68.5292 181.074 68.9414 181.011C69.3535 180.949 69.7493 180.805 70.1062 180.59L100.484 162.753L103.418 161.035L107.851 158.433L110.854 156.673L111.828 156.103C112.491 155.694 113.246 155.46 114.023 155.424C114.801 155.388 115.574 155.551 116.272 155.897L118.09 156.835C118.348 156.961 118.634 157.019 118.921 157.003Z" fill="#3C827A"/>
        </svg>
      </div>
    </div>
    <div className="scroll__container">
    <p
      style={{
        fontFamily: `'Lato', 'Helvetica', sans-serif`,
        color: `#3C827A`,
        fontSize: `21px`,
        lineHeight: `25px`,
        fontWeight: `600`,
        letterSpacing: `0.01em`,
        marginBottom: `5px`
      }}
    >
      scroll
    </p>
      <svg width="42" height="21" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21 21L22.96 19.04L21 16.94L18.9 19.04L21 21ZM23.24 18.76L23.66 18.34L21.56 16.24L21.14 16.66L23.24 18.76ZM23.94 18.06L42 0H37.8L21.84 15.96L23.94 18.06ZM37.24 0H36.54L21.14 15.26L21.56 15.68L37.24 0ZM21 15.54L20.58 15.96L21 16.38L21.42 15.96L21 15.54ZM20.3 16.24L18.2 18.34L18.62 18.76L20.72 16.66L20.3 16.24ZM35.98 0H5.88L21 15.12L35.98 0ZM5.46 0H4.62L20.3 15.68L20.72 15.26L5.46 0ZM4.06 0H0L17.92 18.06L20.02 15.96L4.06 0Z" fill="#3C827A"/>
      </svg>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
