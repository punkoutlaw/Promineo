import React from 'react';
import { Card, CardSubtitle, CardText, CardTitle, CardBody, CardImg,} from 'reactstrap';


function Review({
    firstName,
    lastName,
    profilePic,
    stars,
    comment,
    timestamp,
  }: {
    firstName: string;
    lastName: string;
    profilePic: string;
    stars: number;
    comment: string;
    timestamp: number;
  }) {
    return (
      <Card>
        <CardBody>
          <div className='card-header border border-secondary'>
          <CardTitle tag="h3">Reviews</CardTitle>
          </div>
          <div className="reviews-top border border-secondary">
            <div className="user-details">
              <CardImg className="avatar" src="https://gatewaychamber.com/Content/Uploads/Events/Speakers/speaker-default-image.png" alt={profilePic}/>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {firstName} {lastName || "John Doe"}
              </CardSubtitle>
              {[...Array(stars || 5)].map((_star) => {
                return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
              })}
            </div>
            <div className="reviews-body">
              <CardText>
                {comment ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </CardText>
            </div>
            <CardText>
              <small className="text-muted text-bold">
                {timestamp || "3 mins ago"}
              </small>
            </CardText>
          </div>
        </CardBody>
      </Card>
    );
  }

export default Review