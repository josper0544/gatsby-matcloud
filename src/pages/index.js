import * as React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/Layout'
import  * as styles from '../styles/home.module.css'


const IndexPage = ({data}) => {
  console.log(data)
  const {title,description} = data.site.siteMetadata

  return(
  <Layout>
  
    <section className = {styles.header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX Designer & web developer based in Logan City</p>
        <Link className = {styles.btn} to="/projects">My Portfolio Projects</Link> 
      </div>
      <img src="crosskart.bmp" alt="site banner" style={{maxWidth: '100%'}} />
      <p>{title } - {description}</p>
    </section>
    
    
  </Layout>
  )
}


export default IndexPage

export  const query = graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
`
