
import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query FirstQuery{
                
                    site {
                    info:siteMetadata {
                        title
                        description
                        author
                        data
                        person {
                        name
                        age
                        }
                    }
                    }
                

        }
`
    )
    return site.info

}
