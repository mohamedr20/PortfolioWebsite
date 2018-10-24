import React,{Component} from 'react';
import {Carousel,CarouselCaption,CarouselControl,CarouselIndicators,
CarouselItem} from 'reactstrap'
import ProfilePic from '../images/profile.png';
import dashboardPic from '../images/rsz_1dashboard.png';
import feedPic from '../images/rsz_1feeddev.png';
import nbaPic from '../images/rsz_nba.png';
import bitcoinPic from '../images/rsz_bitcoin.png'

const items = [
  {
      id:1,
      src:dashboardPic,
      altText:'slide1',
      caption:`[DevConnector] Built with MongoDB,Express+ React/Redux. Able to read/write/upvote posts, 
      view other user profiles, edit your own profile. Authorization done with Json Web Tokens. View this project at ....`,
      header:'Dev Connector'
  },
  {
    id:2,
    src:feedPic,
    altText:'slide2',
    caption:`[DevConnector] Post/Comment Feed`
  },
  {
    id:3,
    src:bitcoinPic,
    altText:'slide3',
    caption:`[AngularBitcoin] Built with Angular 2+, this projects utilizs the Vantage API to create graphs
    that display changes over time to Bitcoin prices. SCSS created using SMACSS methodlogy`
  },
  {
    id:4,
    src:nbaPic,
    altText:'slide4',
    caption:`[NbaAngular] Build with Angular 2+, this project uses AngularFireStore to register and store user information
    as well as the SportFeed API to provide real-time stats of players,teams and conferences in NBA.
    `
  },
  {
    id:5,
    src:"",
    altText:'slide5',
    caption:`[SpotifySearch] React project that uses the Spotify API to power instant search results on each keystroke`
  }
]

class Work extends React.Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
      render() {
        const { activeIndex } = this.state;
        

        const slides = items.map((item) => {
          return (
            <CarouselItem
              className="custom-tag"
              tag="div"
              key={item.src}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
            <img className="carousel-img" src={item.src} alt={item.altText}/>
              <CarouselCaption className="text-danger" captionText={item.caption} 
              itemcaptionHeader={item.header} />
            </CarouselItem>
          );
        });
    
        return (
          <div>
            <style>
              {
                `.custom-tag {
                    max-width: 100%;
                    height: 100vh;
                    background: #252627;
                  }
                 .carousel-img{
                     margin-top:100px;
                     margin-left:30px;
                     object-fit:contain;
                     background:transparent;
                     border-radius:1%;
                     border-radius: 1px;
                     box-shadow: 0px 0px 0px 8px rgba(0,0,0,0.3);    
                 }
                 .text-danger{
                   color:white !important;
                 }
                 .header{
                   position:absolute;
                   bottom:3%;
                   left:27%;
                   color:white
                 }
                  `
              }
            </style>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </div>
        );
      }
}

export default Work;