import React from "react"
import GoogleMap from "../../components/Map"
import { H3, P } from "../../components/Text"
import styled, { keyframes } from "styled-components"
import * as vars from "../../style/vars"
import Register from "../../components/RegisterForm.js"
import { below } from "../../style/functions"

class contactPage extends React.Component {
   componentDidMount() {
      this.props.updateMeta("联系方式 | Melrose Park ", "得到更多最新 的Melrose Park信息")
   }
   render() {
      if (typeof window !== `undefined`) {
         const markers = [
            {
               node: {
                  lat: -33.807813,
                  lng: 151.069761,
                  name: "Display Suite"
               }
            }
         ]

         return (
            <div>
               <ContactTop>
                  <div>
                     <div className="col  col-04 padd ">
                        <H3>请联系我们</H3>
                        <P>
                           <span className="green">欢迎参观我们的样板房 </span>
                           <br />
                           <a href="" target="_blank" title="Map">
                              661 Victoria Road <br />
                              Melrose Park NSW 2114
                           </a>
                           <br />
                           <br />
                           <span className="green">销售查询</span> <br />
                           <a href="tel:1300 267 866" title="tel">
                              1300 267 866
                           </a>
                           <br />
                           <a href="mailto:hello@melrosepark.com.au" title="Email">
                              hello@melrosepark.com.au
                           </a>
                           <br />
                           <br />
                           <span className="green">关注我们</span> <br />
                           <a href="https://www.facebook.com/MelroseParkLife/" title="Facebook" target="_blank">
                              Facebook
                           </a>
                           <br />
                           <a href="https://www.facebook.com/MelroseParkLife/" title="微信公众号" target="_blank">
                              微信公众号
                           </a>
                        </P>
                        <img src="/images/qr_wechat.jpg" alt="QR code" />
                     </div>

                     <div className="col  col-08 ">
                        <GoogleMap markers={markers} />
                     </div>
                  </div>
               </ContactTop>
               <ContactBtm>
                  <div className="col  col-04 padd ">
                     <H3>立刻登记</H3>
                  </div>
                  <div className="col  col-08 padd ">
                     {" "}
                     <P>得到更多最新 的Melrose Park信息</P>{" "}
                     <Iframe
                        src="https://go.pardot.com/l/472112/2018-04-19/61bsk"
                        width="100%"
                        height="500"
                        type="text/html"
                        allowTransparency="true"
                     />
                  </div>
               </ContactBtm>
            </div>
         )
      } else {
         return <p>Build</p>
      }
   }
}

const ContactTop = styled.div`
   .col {
      vertical-align: top;
      &.padd {
         padding-top: 6rem;
      }
   }
   h3 {
      color: ${vars.colors.offBody};
      padding-bottom: 4rem;
   }

	img {
		/* border: 1px solid red; */
		width: 100px;
	}
`
const ContactBtm = styled(ContactTop)`
   background: ${vars.colors.offBlank};
   min-height: 60rem;
   div {
      align-items: left;
   }
`
const Iframe = styled.iframe`
   border: none;
   height: 300px;
   ${below.mid`
		height:500px;
	`};
`

export default contactPage
