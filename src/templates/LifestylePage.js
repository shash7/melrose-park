import React from 'react'
import Hero from '../components/Hero.js'
import Image from '../components/Image.js'
import Transport from '../components/Transport.js'
import ParaTitle from '../components/ParaTitle.js'
import Team from '../components/Team.js'
import { LargeP, P, H4, H3 } from '../components/Text.js'
import renderHTML from 'react-render-html'

class LifestylePage extends React.Component {
	componentDidMount() {
		this.props.updateMeta(
			this.props.data.wordpressPage.acf.meta_title,
			this.props.data.wordpressPage.acf.meta_description,
			this.props.data.wordpressPage.acf.seo_meta,
			this.props.data.wordpressPage.acf.seo_body,
			this.props.data.wordpressPage.acf.seo_footer,
			this.props.data.wordpressPage.acf.seo_code_block
	 )
   }

   render() {
      const wp = this.props.data.wordpressPage.acf
      return (
         <section>
            <div className="row tab-hide">
               <div className="col padd col-02 static">
                  <Image
                     src={wp.side_image.source_url}
                     alt="Melrose Park Property, Sydney - Resident (First Time Buy)"
                  />
                  <H4 icon={true}>{wp.side_text}</H4>
               </div>
            </div>
            <div className="row">
               <div className="col padd col-02" />
               <div className="col  col-10">
                  <Image
                     src={wp.hero_image.source_url}
                     alt="Melrose Park Property, Sydney - Town Center (Artists Impression)"
                  />
               </div>
            </div>
            <div className="row tab-show">
               <div className="col padd col-02 static">
                  <Image
                     src={wp.side_image.source_url}
                     alt="Melrose Park Property, Sydney - Resident (First Time Buy)"
                  />
                  <H4 icon={true}>{wp.side_text}</H4>
               </div>
            </div>
            <div className="row">
               <div className="col col-02" />
               <div className="col col-05 ">
                  <LargeP type="green">{wp.hero_text}</LargeP>
               </div>
            </div>

            <div className="row">
               <div className="col col-03" />
               <div className="col col-03 padd">
                  <H3 icon={true}>{wp.header_1}</H3>
               </div>
               <div className="col col-06">
                  <Image
                     src={wp.image_1.source_url}
                     alt="Melrose Park Property, Sydney - Local Cafe"
                  />
                  <P>{renderHTML(wp.paragraph_1)}</P>
               </div>
            </div>
            <ParaTitle title={wp.moving_text} />

            <div className="row">
               <div className="col col-02" />
               <div className="col col-07">
                  <Image
                     src={wp.image_2.source_url}
                     alt="Melrose Park Property, Sydney - Food"
                  />
               </div>
               <div className="col col-03 padd">
                  <Image
                     src={wp.image_3.source_url}
                     alt="Melrose Park Property, Sydney - Drinks"
                  />
                  <H4 icon={true}>{wp.header_2}</H4>
               </div>
            </div>

            <div className="row">
               <div className="col col-02" />
               <div className="col col-04">
                  <P>{renderHTML(wp.paragraph_2)}</P>
               </div>
            </div>

            <div className="row">
               <div className="col col-04" />
               <div className="col col-05">
                  <Image
                     src={wp.image_4.source_url}
                     alt="Melrose Park Property, Sydney - Coffee"
                  />
               </div>
            </div>
            <div className="row">
               <div className="col col-02" />
               <div className="col col-10">
                  <Image
                     src={wp.image_5.source_url}
                     alt="Melrose Park Property, Sydney - Retail (Artists Impression)"
                  />
               </div>
            </div>
         </section>
      )
   }
}

export default LifestylePage

export const pageQuery = graphql`
   query Lifestyle($slug: String) {
      wordpressPage(slug: { eq: $slug }) {
         id
         slug
         template
         parent_element {
            id
            slug
         }
         acf {
            hero_image {
               source_url
            }
            image_1 {
               source_url
            }
            image_2 {
               source_url
            }
            image_3 {
               source_url
            }
            image_4 {
               source_url
            }
            image_5 {
               source_url
            }
            image_6 {
               source_url
            }
            image_7 {
               source_url
            }
            image_8 {
               source_url
            }
            side_image {
               source_url
            }
            slide_2_image {
               source_url
            }
            slide_3_image {
               source_url
            }
            slide_4_image {
               source_url
            }
            slide_5_image {
               source_url
            }
            slide_6_image {
               source_url
            }
            meta_title
            meta_description
            seo_meta
            seo_body
            seo_footer
            seo_code_block
            headline_1
            paragraph_1
            sub_title_1
            moving_text
            headline_2
            paragraph_2
            sub_title_2
            side_text
            header_1
            sub_header_1
            text_1
            sub_header_2
            text_2
            sub_header_3
            text_3
            header_2
            header_2_sub_text
            hero_text
            header
            main_paragraph
            sub_paragraph
            header_3
            paragraph_3
            header_4
            paragraph_4
            header_5
            paragraph_5
            header_6
            sub_title
            paragraph
            team_header
            team_1_name
            team_1_description
            team_2_name
            team_2_description
            team_3_name
            team_3_description
            slide_2_main_text
            slide_2_paragraph
            slide_2_link_text
            slide_3_main_text
            slide_3_paragraph
            slide_3_link_text
            slide_4_main_text
            slide_4_paragraph
            slide_4_link_text
            slide_5_main_text
            slide_5_paragraph
            slide_5_link_text
            slide_6_main_text
            slide_6_paragraph
            slide_6_link_text
            wordpress_
         }
      }

      allWordpressPage {
         edges {
            node {
               slug
               title
               id
            }
         }
      }
   }
`
