import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const nodeURL = 'https://www.instagram.com/p';

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: ASC }, limit: 12) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  placeholder: BLURRED
                  height: 400
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <div>
      <h2>Instagram @jackpropmain </h2>

      {data.allInstaNode.edges.map(({ node }) => (
        <a key={node.id} href={`${nodeURL}/${node.id}`}>
          <div className=" ">
            <GatsbyImage
              image={node.localFile.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt={node.caption}
            />
            <p>{node.caption}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageGallery;
