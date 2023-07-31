import Dropdown from "../dropdown/Dropdown";
import pawPrint from "../../../../images/ourFriends-default/pngwing.png";
import PropTypes from "prop-types";

import {
  CardBox,
  CardItem,
  CardLink,
  ContentBox,
  ImageBox,
  Text,
} from "./FriendsItem.styled";
const FriendsItem = ({
  friend: { title, url, addressUrl, imageUrl, address, workDays, phone, email },
}) => {
  return (
    <CardItem>
      {
        <CardLink href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </CardLink>
      }

      <CardBox>
        <ImageBox>
          {imageUrl ? (
            <img src={imageUrl} alt={title} />
          ) : (
            <img src={pawPrint} alt={title} />
          )}
          {/* {<img src={imageUrl} alt={title} />} */}
        </ImageBox>
        <ContentBox>
          <Dropdown workDays={workDays} />
          <Text>
            <strong>Address:</strong>
            <br />
            {address ? (
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address}
              </a>
            ) : (
              "website only"
            )}
          </Text>
          <Text>
            <strong>Email:</strong> <br />
            {email ? <a href={`mailto:${email}`}>{email}</a> : "website only"}
          </Text>
          <Text>
            <strong>Phone:</strong>
            {phone ? <a href={`tel:${phone}`}>{phone}</a> : "website only"}
          </Text>
        </ContentBox>
      </CardBox>
    </CardItem>
  );
};

FriendsItem.propTypes = {
  friend: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    addressUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    address: PropTypes.string,
    workDays: PropTypes.arrayOf(PropTypes.object),
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
};
export default FriendsItem;
