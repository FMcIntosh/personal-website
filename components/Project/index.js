import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { withTheme } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';

const text =
  'Ever wondered how your personality might affect your voting habits? Well wonder know further';
// export default () => (
//   <Container>
//     <Paper>
//       <ImageWrapper>
//         <Image src="https://i.ytimg.com/vi/AxjkFChzpyc/maxresdefault.jpg" />
//         <Typography variant="body1" gutterBottom align="right">
//           {text}
//         </Typography>
//       </ImageWrapper>
//     </Paper>
//   </Container>
// );

// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10%;
// `;

const Container = styled.div`
  margin: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 200px;
  hieght: 200px;
`;

const StyledCard = styled(Card)`
  && {
    display: flex;
    minwidth: 400px;
    width: 500px;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  && {
    min-width: 151px;
    width: 151px;
    min-height: 151px;
    height: 151px;
    padding: 10px;
    margin: 10px;
  }
`;

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Container>
      <StyledCard raised color="red">
        <StyledCardMedia
          image="https://scontent.fakl1-1.fna.fbcdn.net/v/t35.0-12/28641363_1527189814065147_1100060949_o.jpg?oh=8135edc5a2924fb3c4e2280041776af0&oe=5A9C15A2"
          title="Live from space album cover"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <CardContent style={{ flex: '1 0 auto' }}>
            <Typography variant="headline" component="h2" style={{ fontSize: '18px' }}>
              Lizard
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {text}
            </Typography>
          </CardContent>
        </div>
      </StyledCard>
    </Container>
  );
}

export default MediaControlCard;
