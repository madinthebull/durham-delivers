/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import BackgroundImg from "../images/fork-bkgr.jpg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`
        }}
      >
        <main>{children}</main>
        <footer style={{
          backgroundImage: `url(${BackgroundImg})`,
          padding: `30px 0`,
          marginTop: `130px`,
          backgroundRepeat: `repeat`,
          backgroundPosition:  `center`
        }}>
          <div style={{
            maxWidth: `1080px`,
            padding: `0 20px`,
            margin: `0 auto`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            flexWrap: `wrap`
          }}>
            <div className="footer__section footer__section--one">
              <div className="footer__tag">
              Designed and Crafted by:
              </div>
              <a href="https://savaslabs.com">
                <svg width="178" height="100" viewBox="0 0 178 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M164.839 99.8921H39.9037C17.8665 99.8921 0 82.0257 0 59.9884V40.1996C0 18.1624 17.8665 0.295898 39.9037 0.295898H164.839C171.568 0.295898 177.025 5.75242 177.025 12.4822V87.7058C177.025 94.4356 171.568 99.8921 164.839 99.8921Z" fill="#221C35"/>
                  <path d="M34.6741 37.9576C36.4955 37.9576 37.9723 36.4812 37.9723 34.6595C37.9723 32.838 36.4955 31.3613 34.6741 31.3613C32.8527 31.3613 31.376 32.838 31.376 34.6595C31.376 36.4812 32.8527 37.9576 34.6741 37.9576Z" fill="#221C35"/>
                  <path d="M45.1336 37.9576C46.955 37.9576 48.4317 36.4812 48.4317 34.6595C48.4317 32.838 46.955 31.3613 45.1336 31.3613C43.3122 31.3613 41.8354 32.838 41.8354 34.6595C41.8354 36.4812 43.3122 37.9576 45.1336 37.9576Z" fill="#221C35"/>
                  <path d="M59.6926 59.9889C59.6926 56.3833 58.7299 53.0044 57.0436 50.0945C56.0156 48.3181 54.7206 46.7187 53.2113 45.346C53.2113 45.346 53.2113 45.346 53.2113 45.3429C53.1802 45.315 53.1461 45.287 53.115 45.2591C52.9721 45.1318 52.8262 45.0044 52.6802 44.8802C52.6336 44.8398 52.587 44.8026 52.5405 44.7622C52.4721 44.7063 52.4069 44.6504 52.3386 44.5945V44.5976V44.5945C52.2889 44.5541 52.2361 44.5137 52.1864 44.4734C52.1398 44.4361 52.0467 44.3647 52.0467 44.3647C49.5436 42.4144 46.5591 41.0541 43.3013 40.4889C42.8448 40.4113 42.3821 40.5821 42.0839 40.933L39.9007 43.492L37.7175 40.933C37.4162 40.5821 36.9535 40.4081 36.5001 40.4889C33.115 41.0759 30.0249 42.52 27.4628 44.5945C26.938 43.1162 26.6709 41.52 26.7113 39.8554C26.8945 32.7342 32.7672 27.0105 39.8914 27.0043C47.1678 27.0012 53.0933 32.9206 53.0933 40.197C53.0933 40.8771 53.0405 41.5479 52.9411 42.2001C52.8759 42.6224 53.0436 43.0448 53.3759 43.3119C54.6957 44.3802 55.8759 45.5883 56.8976 46.9206C57.379 47.5448 58.3603 47.3802 58.615 46.6349C59.3107 44.6162 59.6864 42.4516 59.6864 40.197C59.6864 35.2467 57.8666 30.7217 54.8634 27.2496C54.5436 26.8801 54.5374 26.3304 54.8541 25.9577L57.3603 23.0167C57.7268 22.5882 57.4225 21.9298 56.8572 21.9298H50.7765C48.9442 21.9298 47.1212 21.6782 45.3603 21.1751C43.6243 20.6782 41.7889 20.4111 39.8945 20.4111C37.997 20.4111 36.1647 20.6782 34.4287 21.1751C32.6678 21.6813 30.8448 21.9298 29.0125 21.9298H22.9442C22.3821 21.9298 22.0777 22.5882 22.4411 23.0167L24.9473 25.9577C25.2672 26.3304 25.261 26.8801 24.938 27.2496C21.9318 30.7186 20.115 35.2467 20.115 40.197C20.115 43.2125 20.792 46.0665 21.997 48.6224C22.0933 48.8274 22.1926 49.0293 22.2982 49.2311C22.3324 49.2964 22.3634 49.3585 22.3976 49.4237C22.4349 49.4951 22.4721 49.5634 22.5094 49.6349C22.5933 49.787 22.6771 49.9392 22.7641 50.0883C22.6678 50.2529 22.5746 50.4206 22.4846 50.5914C22.4256 50.7001 22.3696 50.8088 22.3137 50.9206C22.2858 50.9734 22.2578 51.0262 22.2299 51.0821C22.1585 51.2249 22.087 51.3709 22.0187 51.5168C22.0125 51.5324 22.0032 51.5479 21.997 51.5634C21.9224 51.7249 21.8479 51.8864 21.7765 52.0479C20.7113 54.4765 20.1181 57.1628 20.1181 59.9858C20.1181 64.728 21.7889 69.0821 24.5715 72.492C24.5715 72.492 24.5715 72.492 24.5746 72.4889C24.5746 72.4889 24.5746 72.4889 24.5715 72.492C28.1988 76.933 33.7144 79.7715 39.8945 79.7746C40.7516 79.7746 41.5964 79.7218 42.4256 79.6131C43.3603 79.492 43.6088 78.256 42.792 77.7808C40.7796 76.61 38.9256 75.1846 37.2579 73.5137C37.2547 73.5106 37.2516 73.5075 37.2516 73.5075C36.7858 73.0417 36.2299 72.6721 35.6088 72.4578C33.1895 71.6224 31.087 70.1007 29.5342 68.1255C27.7703 65.8833 26.7175 63.0541 26.7175 59.9858C26.7175 58.4454 26.9846 56.9641 27.4721 55.5883C27.4504 55.5728 27.4318 55.5541 27.4131 55.5386C27.4318 55.5541 27.4535 55.5728 27.4721 55.5883C28.2299 53.4516 29.5249 51.5634 31.1926 50.0914C33.5187 48.0386 36.5715 46.7932 39.9069 46.7932C43.2454 46.7932 46.2951 48.0386 48.6212 50.0914C50.2889 51.5634 51.5839 53.4485 52.3417 55.5883C52.8293 56.9641 53.0964 58.4454 53.0964 59.9858V59.9889V72.8647C49.3448 72.1877 45.8479 70.4113 43.115 67.6846C39.5529 64.1318 37.5933 59.4019 37.5933 54.374C37.5933 52.874 37.7703 51.3926 38.115 49.9547C38.2827 49.2591 37.6367 48.6349 36.9442 48.8181C35.2299 49.2746 33.6274 50.1255 32.2734 51.3181C32.1771 51.4019 32.0808 51.4889 31.9877 51.579C31.379 52.1535 31.0218 52.9516 31.0032 53.7901C31.0001 53.9827 30.997 54.1783 30.997 54.3709C30.997 57.7995 31.6678 61.1255 32.9939 64.2591C34.2734 67.2839 36.1026 69.9982 38.4349 72.3305C40.7672 74.6628 43.4815 76.492 46.5063 77.7715C49.6398 79.0976 52.9659 79.7684 56.3945 79.7684H58.702C59.2485 79.7684 59.6926 79.3243 59.6926 78.7777V59.9889Z" fill="#221C35"/>
                  <path d="M65.8322 40.2001H70.6645C70.9812 40.2001 71.2483 40.4268 71.3042 40.7405C71.5713 42.2094 72.916 43.3119 74.5993 43.3119C76.4067 43.3119 77.7483 42.197 77.7483 40.7778C77.7483 38.9734 75.5589 38.0107 73.062 37.3585C69.2204 36.3989 65.534 34.0914 65.534 29.0603C65.534 24.5666 69.3757 21.1846 74.4471 21.1846C79.357 21.1846 83.062 24.2839 83.444 28.5262C83.4781 28.9144 83.1769 29.2529 82.7887 29.2529H77.9595C77.6396 29.2529 77.3788 29.02 77.3166 28.7063C77.0682 27.4113 75.9378 26.4858 74.4471 26.4858C72.8353 26.4858 71.6427 27.4858 71.6427 28.8305C71.6427 30.52 73.4098 31.4424 75.9843 32.1349C80.0185 33.2094 83.8601 35.1691 83.8601 40.3927C83.8601 45.079 79.8663 48.6132 74.5247 48.6132C69.4564 48.6132 65.5651 45.3616 65.1831 40.9268C65.1427 40.5386 65.4409 40.2001 65.8322 40.2001Z" fill="#F9FAFB"/>
                  <path d="M102.245 35.2841V47.5046C102.245 47.8617 101.957 48.1537 101.596 48.1537H97.5901C97.2329 48.1537 96.941 47.8649 96.941 47.5046V47.0015C95.7112 48.0015 94.0994 48.6133 92.2919 48.6133C88.3727 48.6133 85.3013 45.809 85.3013 42.1195C85.3013 38.3928 88.3758 35.5885 92.2919 35.5885C93.9441 35.5885 95.441 36.0885 96.6336 36.9704V35.3183C96.6336 33.7437 95.6336 32.7437 94.0994 32.7437C92.9597 32.7437 92.0963 33.2686 91.7671 34.1071C91.6522 34.3959 91.382 34.5885 91.0715 34.5885H86.8913C86.3944 34.5885 86.028 34.1133 86.1615 33.635C87.0808 30.3709 90.0373 28.0977 94.177 28.0977C98.8261 28.0977 102.245 31.0169 102.245 35.2841ZM96.6367 42.1195C96.6367 40.8524 95.4069 39.8524 93.8323 39.8524C92.2951 39.8524 91.0652 40.8524 91.0652 42.1195C91.0652 43.3493 92.2951 44.3493 93.8323 44.3493C95.4069 44.3493 96.6367 43.3493 96.6367 42.1195Z" fill="#F9FAFB"/>
                  <path d="M139.804 35.2841V47.5046C139.804 47.8617 139.516 48.1537 139.155 48.1537H135.149C134.792 48.1537 134.5 47.8649 134.5 47.5046V47.0015C133.27 48.0015 131.658 48.6133 129.851 48.6133C125.932 48.6133 122.86 45.809 122.86 42.1195C122.86 38.3928 125.935 35.5885 129.851 35.5885C131.503 35.5885 133 36.0885 134.193 36.9704V35.3183C134.193 33.7437 133.193 32.7437 131.658 32.7437C130.519 32.7437 129.655 33.2686 129.326 34.1071C129.211 34.3959 128.941 34.5885 128.631 34.5885H124.45C123.954 34.5885 123.587 34.1133 123.721 33.635C124.64 30.3709 127.596 28.0977 131.736 28.0977C136.385 28.0977 139.804 31.0169 139.804 35.2841ZM134.196 42.1195C134.196 40.8524 132.966 39.8524 131.391 39.8524C129.854 39.8524 128.624 40.8524 128.624 42.1195C128.624 43.3493 129.854 44.3493 131.391 44.3493C132.966 44.3493 134.196 43.3493 134.196 42.1195Z" fill="#F9FAFB"/>
                  <path d="M98.5093 66.4451V78.6656C98.5093 79.0228 98.2205 79.3147 97.8602 79.3147H93.854C93.4969 79.3147 93.2049 79.0259 93.2049 78.6656V78.1625C91.9751 79.1625 90.3633 79.7743 88.5559 79.7743C84.6366 79.7743 81.5652 76.97 81.5652 73.2805C81.5652 69.5538 84.6397 66.7495 88.5559 66.7495C90.208 66.7495 91.7049 67.2495 92.8975 68.1315V66.4793C92.8975 64.9048 91.8975 63.9048 90.3633 63.9048C89.2236 63.9048 88.3602 64.4296 88.031 65.2681C87.9161 65.5569 87.6459 65.7495 87.3354 65.7495H83.1552C82.6584 65.7495 82.2919 65.2743 82.4254 64.7961C83.3447 61.5321 86.3012 59.2588 90.441 59.2588C95.09 59.2619 98.5093 62.1812 98.5093 66.4451ZM92.9006 73.2836C92.9006 72.0166 91.6708 71.0166 90.0962 71.0166C88.559 71.0166 87.3292 72.0166 87.3292 73.2836C87.3292 74.5135 88.559 75.5135 90.0962 75.5135C91.6708 75.5135 92.9006 74.5135 92.9006 73.2836Z" fill="#F9FAFB"/>
                  <path d="M142.751 42.1972H146.46C146.897 42.1972 147.273 42.4736 147.432 42.8805C147.724 43.6227 148.481 44.1569 149.376 44.1569C150.45 44.1569 151.298 43.5047 151.298 42.6569C151.298 41.4271 149.761 40.8525 148.149 40.5047C145.192 39.8121 141.963 38.3153 141.963 34.2811C141.963 30.2469 145.382 28.0947 149.261 28.0947C152.987 28.0947 155.879 30.219 156.509 33.0668C156.643 33.6693 156.189 34.2438 155.574 34.2438H151.764C151.407 34.2438 151.059 34.042 150.941 33.7035C150.708 33.0389 150.053 32.5513 149.227 32.5513C148.304 32.5513 147.574 33.1662 147.574 33.896C147.574 35.0109 148.919 35.6258 150.838 36.0854C153.795 36.8153 156.907 38.1972 156.907 42.1569C156.907 46.2687 153.487 48.6103 149.338 48.6103C145.422 48.6103 142.441 46.3463 141.817 43.3681C141.689 42.7687 142.137 42.1972 142.751 42.1972Z" fill="#F9FAFB"/>
                  <path d="M124.419 73.3613H128.127C128.565 73.3613 128.941 73.6377 129.1 74.0445C129.391 74.7868 130.149 75.3209 131.044 75.3209C132.118 75.3209 132.966 74.6687 132.966 73.8209C132.966 72.5911 131.429 72.0166 129.817 71.6687C126.86 70.9762 123.631 69.4793 123.631 65.4451C123.631 61.411 127.05 59.2588 130.929 59.2588C134.655 59.2588 137.547 61.383 138.177 64.2308C138.311 64.8333 137.857 65.4079 137.242 65.4079H133.429C133.072 65.4079 132.724 65.206 132.606 64.8675C132.373 64.2029 131.718 63.7153 130.891 63.7153C129.969 63.7153 129.239 64.3302 129.239 65.06C129.239 66.1749 130.584 66.7898 132.503 67.2495C135.46 67.9793 138.572 69.3613 138.572 73.3209C138.572 77.4327 135.152 79.7743 131.003 79.7743C127.087 79.7743 124.106 77.5104 123.481 74.5321C123.357 73.9327 123.804 73.3613 124.419 73.3613Z" fill="#F9FAFB"/>
                  <path d="M80.8201 74.4578V78.5634C80.8201 78.9796 80.4847 79.315 80.0686 79.315H67.2393C66.8232 79.315 66.4878 78.9796 66.4878 78.5634V53.5572C66.4878 53.1411 66.8232 52.8057 67.2393 52.8057H71.6928C72.1089 52.8057 72.4443 53.1411 72.4443 53.5572V73.7063H80.0686C80.4816 73.7063 80.8201 74.0448 80.8201 74.4578Z" fill="#F9FAFB"/>
                  <path d="M122.491 69.5196C122.491 75.3581 118.457 79.7774 113.04 79.7774C110.621 79.7774 108.584 78.7774 107.124 77.1252V78.3364C107.124 78.8768 106.686 79.3146 106.146 79.3146H102.494C101.954 79.3146 101.516 78.8768 101.516 78.3364V52.6376C101.516 52.0941 101.954 51.6562 102.497 51.6562H106.143C106.686 51.6562 107.124 52.0941 107.124 52.6376V61.914C108.584 60.2618 110.621 59.2618 113.04 59.2618C118.457 59.2618 122.491 63.6811 122.491 69.5196ZM116.727 69.5196C116.727 66.7525 114.693 64.678 111.926 64.678C109.158 64.678 107.124 66.7525 107.124 69.5196C107.124 72.2836 109.158 74.3581 111.926 74.3581C114.693 74.3581 116.727 72.2836 116.727 69.5196Z" fill="#F9FAFB"/>
                  <path d="M115.863 29.4736C115.745 34.0388 114.745 39.132 113.034 43.1041C111.323 39.132 110.323 34.0357 110.205 29.4736C110.193 28.9674 109.786 28.5605 109.28 28.5605H105.193C104.674 28.5605 104.245 28.9891 104.258 29.5078C104.404 35.9674 106.059 42.0575 108.876 47.4519C109.103 47.8867 109.559 48.1537 110.05 48.1537H116.019C116.509 48.1537 116.963 47.8867 117.193 47.4519C120.009 42.0606 121.662 35.9674 121.811 29.5078C121.823 28.9891 121.394 28.5605 120.876 28.5605H116.789C116.283 28.5605 115.876 28.9674 115.863 29.4736Z" fill="#F9FAFB"/>
                  <path d="M61.336 58.8297C61.1631 55.7719 60.3441 52.789 58.9391 50.0843C59.4202 49.1601 59.8407 48.2061 60.1864 47.2067C60.1938 47.1843 60.209 47.1691 60.2165 47.1467C60.2391 47.0716 60.2615 46.9964 60.2842 46.9213C60.4419 46.448 60.5845 45.9747 60.7124 45.4862C60.7273 45.4188 60.7423 45.3586 60.7575 45.2908C60.8702 44.8328 60.9677 44.3669 61.0503 43.8933C61.0655 43.7958 61.0879 43.6905 61.1031 43.593C61.1857 43.0896 61.2457 42.5862 61.291 42.0679C61.2985 41.9626 61.3059 41.8499 61.3134 41.7446C61.3509 41.2113 61.3811 40.6778 61.3811 40.1443C61.3811 39.611 61.3509 39.1151 61.3134 38.6418C61.0053 34.194 59.3298 29.9415 56.4901 26.493L58.6463 23.9685C59.2398 23.2698 59.3674 22.3231 58.9842 21.4967C58.6013 20.6702 57.7972 20.1518 56.8808 20.1518H50.7724C49.0746 20.1518 47.3991 19.9189 45.7913 19.4606C43.8677 18.8971 41.8693 18.6191 39.8482 18.6191C37.8273 18.6191 35.8286 18.8971 33.9053 19.4531C32.2975 19.9114 30.6221 20.1443 28.9241 20.1443H22.8159C21.8993 20.1443 21.0954 20.6627 20.7122 21.4892C20.329 22.3156 20.4568 23.2698 21.0503 23.961L23.2066 26.4854C20.051 30.3322 18.323 35.1558 18.323 40.1443C18.323 43.3449 19.0142 46.4253 20.3741 49.3104C20.4793 49.5359 20.592 49.7539 20.7272 50.0166L20.7573 50.0769C20.7498 50.0918 20.7423 50.107 20.7347 50.1219L20.7948 50.152L20.8549 50.2648L20.6896 50.1896L20.622 50.3247C20.5469 50.4825 20.4718 50.6328 20.3666 50.843C20.2839 51.016 20.2088 51.1887 20.1262 51.3691C18.9316 54.1113 18.323 57.0191 18.323 60.0166C18.323 64.4645 19.7129 68.8148 22.2599 72.4284L22.2223 72.466L23.1615 73.6231C27.0383 78.3716 32.6808 81.2113 38.7587 81.512C38.9767 81.5269 39.2022 81.5269 39.4277 81.5346C39.5627 81.5346 39.6978 81.5495 39.8258 81.5495C39.8332 81.5495 39.8407 81.5495 39.8482 81.5495C40.269 81.5495 40.6898 81.5346 41.1028 81.512C41.2155 81.5045 41.3283 81.4971 41.441 81.4893C41.764 81.4669 42.0873 81.4368 42.4028 81.3992C42.4627 81.3918 42.523 81.3918 42.5829 81.3843C42.6056 81.3843 42.6283 81.3766 42.6506 81.3691C44.3786 81.144 46.0466 80.7079 47.6168 80.0995C50.4342 81.061 53.3795 81.557 56.3997 81.557H58.714C60.1714 81.557 61.3584 80.37 61.3584 78.9123V60.0244V60.0166C61.3736 59.5961 61.3584 59.2054 61.336 58.8297Z" fill="#F9FAFB"/>
                  <path d="M59.7207 60.0166C59.7207 56.3952 58.7517 53.0067 57.061 50.084C56.0318 48.3036 54.7244 46.6955 53.2145 45.3132C53.1843 45.2831 53.1468 45.2607 53.1166 45.2306C52.9741 45.103 52.8312 44.975 52.6809 44.8474C52.6359 44.8098 52.5834 44.7722 52.5381 44.7272C52.4707 44.6747 52.403 44.6145 52.3353 44.562C52.2828 44.5244 52.2303 44.4794 52.185 44.4418C52.1399 44.4042 52.0424 44.3291 52.0424 44.3291C49.5253 42.3682 46.5353 41.0008 43.2595 40.4371C42.8011 40.3545 42.3353 40.535 42.0346 40.8881L39.8409 43.4573L37.6471 40.8881C37.3464 40.535 36.8806 40.362 36.4225 40.4371C33.0266 41.0231 29.9235 42.4806 27.3465 44.562C26.8206 43.0744 26.5501 41.4741 26.5952 39.7986C26.7755 32.6461 32.6735 26.8984 39.8334 26.8984C47.1437 26.8909 53.0865 32.8415 53.0865 40.1443C53.0865 40.8278 53.034 41.4964 52.9365 42.1576C52.8688 42.5784 53.0415 43.0067 53.3722 43.2772C54.6946 44.3514 55.8815 45.561 56.9107 46.8986C57.3918 47.5222 58.376 47.3567 58.639 46.6129C59.3378 44.5843 59.7132 42.4132 59.7132 40.1443C59.7132 35.1704 57.8874 30.625 54.8673 27.1463C54.5443 26.7707 54.5368 26.2222 54.8598 25.8466L57.3766 22.8939C57.7449 22.4656 57.4368 21.8045 56.8732 21.8045H50.7651C48.9244 21.8045 47.0912 21.549 45.3256 21.0456C43.5825 20.5422 41.7418 20.2793 39.8334 20.2793C37.925 20.2793 36.0843 20.5498 34.3412 21.0456C32.5756 21.5565 30.7425 21.8045 28.9018 21.8045H22.8161C22.2526 21.8045 21.9446 22.4656 22.3127 22.8939L24.8296 25.8466C25.1527 26.2222 25.1451 26.7707 24.8221 27.1463C21.8018 30.625 19.9761 35.1704 19.9761 40.1443C19.9761 43.1719 20.6523 46.0343 21.8619 48.6039C21.9596 48.8067 22.0573 49.0098 22.1624 49.2126C22.1925 49.2803 22.23 49.3402 22.2601 49.4079C22.2977 49.4756 22.3352 49.5508 22.3728 49.6182C22.4555 49.7685 22.5381 49.9263 22.6282 50.0766C22.5306 50.2418 22.4404 50.4148 22.3503 50.58C22.2901 50.6853 22.2376 50.7977 22.1774 50.9104C22.1474 50.9632 22.1249 51.0157 22.0948 51.0682C22.0197 51.211 21.9521 51.3613 21.8844 51.5042C21.8769 51.5191 21.8694 51.534 21.8619 51.5492C21.7868 51.707 21.7116 51.8722 21.644 52.0374C20.5696 54.4868 19.9761 57.1766 19.9761 60.0166C19.9761 64.78 21.6515 69.1527 24.4464 72.571C28.0903 77.0337 33.6275 79.8812 39.8334 79.8812C40.6974 79.8812 41.539 79.8287 42.3728 79.7235C43.312 79.6033 43.5598 78.3561 42.7412 77.8828C40.7201 76.7107 38.8567 75.2756 37.1812 73.6002L37.1738 73.5927C36.7079 73.1269 36.1446 72.7514 35.521 72.5409C33.094 71.6995 30.9829 70.1744 29.4201 68.1909C27.647 65.9368 26.5877 63.0968 26.5877 60.0166C26.5877 58.4688 26.8582 56.9812 27.3465 55.5986C27.324 55.5837 27.309 55.5688 27.2864 55.5461C27.309 55.561 27.324 55.5763 27.3465 55.5986C28.1054 53.4499 29.4051 51.5567 31.0806 50.0766C33.4173 48.0179 36.4825 46.7632 39.8334 46.7632C43.1843 46.7632 46.2496 48.0179 48.5862 50.0766C50.2617 51.5567 51.5614 53.4499 52.3204 55.5986C52.8086 56.9812 53.0791 58.4688 53.0791 60.0166C53.0791 60.0166 53.0791 60.0166 53.0791 60.0241V72.9542C49.3151 72.2704 45.7989 70.4899 43.0567 67.7551C39.4803 64.1862 37.512 59.4381 37.512 54.389C37.512 52.8791 37.6846 51.3989 38.0378 49.9489C38.203 49.2502 37.557 48.6266 36.8657 48.8067C35.1452 49.2651 33.5374 50.1216 32.1775 51.3163C32.0797 51.3989 31.9822 51.489 31.8921 51.5791C31.276 52.1576 30.9228 52.9617 30.9002 53.803C30.8928 53.9983 30.8928 54.1936 30.8928 54.389C30.8928 57.8303 31.5688 61.1735 32.8986 64.3141C34.1834 67.3492 36.0241 70.0766 38.3607 72.4207C40.7048 74.7648 43.4322 76.598 46.4676 77.8828C49.6157 79.2126 52.9514 79.889 56.3924 79.889H58.7142C59.2626 79.889 59.7058 79.4455 59.7058 78.8971L59.7207 60.0166Z" fill="#221C35"/>
                  <path d="M34.5966 37.8904C36.4264 37.8904 37.9099 36.4068 37.9099 34.577C37.9099 32.7472 36.4264 31.2637 34.5966 31.2637C32.7667 31.2637 31.2832 32.7472 31.2832 34.577C31.2832 36.4068 32.7667 37.8904 34.5966 37.8904Z" fill="#221C35"/>
                  <path d="M45.1002 37.8904C46.93 37.8904 48.4133 36.4068 48.4133 34.577C48.4133 32.7472 46.93 31.2637 45.1002 31.2637C43.2701 31.2637 41.7869 32.7472 41.7869 34.577C41.7869 36.4068 43.2701 37.8904 45.1002 37.8904Z" fill="#221C35"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="177.329" height="100" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="footer__section" style={{
              display: `flex`,
              width: `193px`,
              justifyContent: `space-between`
            }}>
              <a href="https://www.facebook.com/savaslabs/">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.344 0.00292972H1.65454C0.740662 0.00347904 -0.000183072 0.74469 3.39346e-08 1.65894V28.3484C0.000549353 29.2623 0.74176 30.0031 1.65601 30.0029H16.0254V18.4014H12.1289V13.8604H16.0254V10.5185C16.0254 6.64307 18.3913 4.53369 21.8483 4.53369C23.5042 4.53369 24.9271 4.6571 25.3418 4.71222V8.7627H22.9579C21.0771 8.7627 20.7129 9.65643 20.7129 10.9682V13.8604H25.21L24.624 18.4014H20.7129V30.0029H28.344C29.2584 30.0031 29.9998 29.2621 30 28.3477C30 28.3475 30 28.3473 30 28.3469V1.65747C29.9996 0.743591 29.2582 0.00274662 28.344 0.00292972Z" fill="#221C35"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/savas_labs/">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9238 8.82179C29.8535 7.22747 29.5956 6.13138 29.2263 5.18161C28.8453 4.17345 28.2591 3.27085 27.4912 2.52051C26.7408 1.7585 25.8323 1.16638 24.8358 0.791324C23.8805 0.421993 22.7902 0.164172 21.1958 0.0938781C19.5896 0.0176307 19.0797 0 15.0058 0C10.932 0 10.4221 0.0176307 8.82179 0.0879248C7.22747 0.158219 6.13138 0.416269 5.18184 0.78537C4.17345 1.16638 3.27085 1.75254 2.52051 2.52051C1.7585 3.27085 1.16661 4.17941 0.791323 5.17589C0.421993 6.13138 0.164172 7.22151 0.0938781 8.81584C0.0176307 10.4221 0 10.932 0 15.0058C0 19.0797 0.0176307 19.5896 0.0879248 21.1899C0.158219 22.7842 0.416269 23.8803 0.785599 24.8301C1.16661 25.8382 1.7585 26.7408 2.52051 27.4912C3.27085 28.2532 4.17941 28.8453 5.17589 29.2204C6.13138 29.5897 7.22151 29.8475 8.81607 29.9178C10.4161 29.9883 10.9263 30.0057 15.0001 30.0057C19.074 30.0057 19.5839 29.9883 21.1842 29.9178C22.7785 29.8475 23.8746 29.5897 24.8241 29.2204C26.8407 28.4407 28.435 26.8464 29.2146 24.8301C29.5837 23.8746 29.8418 22.7842 29.9121 21.1899C29.9824 19.5896 30 19.0797 30 15.0058C30 10.932 29.994 10.4221 29.9238 8.82179ZM27.2217 21.0727C27.1571 22.5381 26.911 23.3294 26.7058 23.8569C26.2016 25.1641 25.1641 26.2016 23.8569 26.7058C23.3294 26.911 22.5323 27.1571 21.0727 27.2214C19.49 27.292 19.0153 27.3094 15.0118 27.3094C11.0082 27.3094 10.5276 27.292 8.9507 27.2214C7.48529 27.1571 6.69396 26.911 6.16642 26.7058C5.51591 26.4654 4.92379 26.0844 4.44318 25.5861C3.94494 25.0996 3.56393 24.5134 3.32351 23.8629C3.11836 23.3353 2.87221 22.5381 2.80787 21.0786C2.73735 19.496 2.71995 19.0211 2.71995 15.0175C2.71995 11.014 2.73735 10.5333 2.80787 8.95666C2.87221 7.49124 3.11836 6.69992 3.32351 6.17237C3.56393 5.52163 3.94494 4.92974 4.44913 4.44891C4.93547 3.95066 5.52163 3.56966 6.17237 3.32947C6.69992 3.12431 7.49719 2.87816 8.95666 2.81359C10.5393 2.7433 11.0142 2.72567 15.0175 2.72567C19.027 2.72567 19.5017 2.7433 21.0786 2.81359C22.544 2.87816 23.3353 3.12431 23.8629 3.32947C24.5134 3.56966 25.1055 3.95066 25.5861 4.44891C26.0844 4.93547 26.4654 5.52163 26.7058 6.17237C26.911 6.69992 27.1571 7.49697 27.2217 8.95666C27.292 10.5393 27.3096 11.014 27.3096 15.0175C27.3096 19.0211 27.292 19.49 27.2217 21.0727ZM15.0059 7.29785C10.7505 7.29785 7.29785 10.7503 7.29785 15.0059C7.29785 19.2616 10.7505 22.714 15.0059 22.714C19.2616 22.714 22.714 19.2616 22.714 15.0059C22.714 10.7503 19.2616 7.29785 15.0059 7.29785ZM15.0059 20.006C12.2452 20.006 10.0059 17.7669 10.0059 15.0059C10.0059 12.245 12.2452 10.0059 15.0059 10.0059C17.7669 10.0059 20.006 12.245 20.006 15.0059C20.006 17.7669 17.7669 20.006 15.0059 20.006ZM23.0185 8.7922C24.0124 8.7922 24.8182 7.98645 24.8182 6.99272C24.8182 5.99876 24.0124 5.19324 23.0185 5.19324C22.0247 5.19324 21.219 5.99876 21.219 6.99272C21.219 7.98645 22.0247 8.7922 23.0185 8.7922Z" fill="#221C35"/>
                </svg>
              </a>
              <a href="https://twitter.com/savaslabs">
                <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.9231 3.55447C35.55 4.15678 34.0869 4.55601 32.5615 4.74985C34.1308 3.81293 35.3285 2.34062 35.8915 0.566006C34.4285 1.43831 32.8131 2.05447 31.0915 2.39831C29.7023 0.919084 27.7223 0.00292969 25.5623 0.00292969C21.3715 0.00292969 17.9977 3.40447 17.9977 7.57447C17.9977 8.17447 18.0485 8.75139 18.1731 9.30062C11.88 8.9937 6.31154 5.97755 2.57077 1.38293C1.91769 2.51601 1.53462 3.81293 1.53462 5.20908C1.53462 7.83062 2.88462 10.1545 4.89692 11.4999C3.68077 11.4768 2.48769 11.1237 1.47692 10.5675C1.47692 10.5906 1.47692 10.6206 1.47692 10.6506C1.47692 14.3291 4.10077 17.3845 7.54154 18.0883C6.92538 18.2568 6.25385 18.3375 5.55692 18.3375C5.07231 18.3375 4.58308 18.3099 4.12385 18.2083C5.10462 21.206 7.88769 23.4099 11.1969 23.4814C8.62154 25.496 5.35154 26.7099 1.81154 26.7099C1.19077 26.7099 0.595385 26.6822 0 26.606C3.35308 28.7683 7.32692 30.0029 11.6123 30.0029C25.5415 30.0029 33.1569 18.4645 33.1569 8.46293C33.1569 8.12831 33.1454 7.80524 33.1292 7.48447C34.6315 6.41831 35.8938 5.08678 36.9231 3.55447Z" fill="#221C35"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/savas-labs">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.922852 3.60542C0.922852 1.61667 2.5366 0.00292969 4.52534 0.00292969C6.51283 0.00292969 8.12658 1.61667 8.12783 3.60542C8.12783 5.59416 6.51408 7.24166 4.52534 7.24166C2.5366 7.24166 0.922852 5.59416 0.922852 3.60542ZM30.9153 30.0026V30.0014H30.9228V18.9989C30.9228 13.6164 29.7641 9.47018 23.4716 9.47018C20.4466 9.47018 18.4166 11.1302 17.5879 12.7039H17.5004V9.97268H11.5341V30.0014H17.7466V20.0839C17.7466 17.4727 18.2416 14.9477 21.4754 14.9477C24.6616 14.9477 24.7091 17.9277 24.7091 20.2514V30.0026H30.9153ZM1.41797 9.97409H7.63795V30.0028H1.41797V9.97409Z" fill="#221C35"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
