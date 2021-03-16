import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const TwitterCard = ({ post }) => {
  return (
    <MDBCol key={post.id_str} size="4">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://download.logo.wine/logo/Nanyang_Technological_University/Nanyang_Technological_University-Logo.wine.png" waves />
        <MDBCardBody>
          <MDBCardTitle>{post.user.name}</MDBCardTitle>
          <MDBCardText>
            {post.text}
          </MDBCardText>
          <MDBBtn color="green" href="https://twitter.com/NTUsg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default TwitterCard;
