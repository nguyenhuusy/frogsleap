import React, { Component } from 'react';
import './Activities.scss';
import ActivitiesData from './ActivitiesData/ActivitiesData';
import ActivitiesList from './ActivitiesList';
var slideIndex = 1;
class Activities extends Component {
  constructor() {
    super();
    this.state = {
      click: false,
      mousedown_location: '',
      
    }
  }
   componentDidMount = () => {
     this.showSlides(slideIndex);
   }


  // Next/previous controls

  mousedown = (e) => {
    var x = e.clientX;
    const { click } = this.state;
    console.log('mousedown tại', x)

    this.setState({ click: true });
    this.setState({ mousedown_location: x });
  }
  mouseup = () => {
    console.log('mouseup')
    this.setState({ click: false });
    return;
  }
  mousemove = (e) => {
    const { click, mousedown_location } = this.state;
    var i;
    if (click === true) {
      console.log('mousemove')
      var x = e.clientX;
      var y = x - mousedown_location;
      if (y > 5) {
        this.plusSlides(1);
        
      } else if (y < -5) {
        this.plusSlides(-1);
      }
    } else {return false}
  }
  // Thumbnail image controls

  plusSlides = (n) => {
    this.showSlides(slideIndex += n);
    console.log('plusSlides')
  }
  showSlides = (n) => {
    var i, e, a, b, f;
    console.log('showSlides')
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    if ((slideIndex - 1) === 5) {
      a = 4;
      b = 0;
      e = 3;
      f = 1;
    } else if ((slideIndex - 1) === 0) {
      a = 5;
      e = 4;
      f = 2;
      b = 1;
    } else if ((slideIndex - 1) === 4) {
      a = 3;
      e = 2;
      f = 0;
      b = 5;

    } else if ((slideIndex - 1) === 1) {
      a = 0;
      e = 5;
      f = 3;
      b = 2;

    }

    else {
      a = slideIndex - 2;
      b = slideIndex;
      e = slideIndex - 3;
      f = slideIndex + 1;

    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
    }
    console.log('trái giữa phải', e, '/', a, '/', slideIndex - 1, '/', b, '/', f)
    
    //--------------------
    slides[e].style.opacity = "0";
    slides[e].style.left = "-966px";
    slides[e].style.transform = "matrix3d(0.379526, 0, -0.241785, 0.000201487, 0, 0.45, 0, 0, 0.5373, 0, 0.843391, -0.000702826, 150, 0, 0, 1)"
    //--------------------
    slides[a].style.opacity = "0.5";
    slides[a].style.left = "-366px";
    slides[a].style.transform = "matrix3d(0.379526, 0, -0.241785, 0.000201487, 0, 0.45, 0, 0, 0.5373, 0, 0.843391, -0.000702826, 150, 0, 0, 1)"
    //-------------------
    slides[slideIndex - 1].style.opacity = "1";

    slides[slideIndex - 1].style.left = "234px";
    slides[slideIndex - 1].style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
    //--------------------------------------
    slides[b].style.opacity = "0.5";
    slides[b].style.left = "834px";
    slides[b].style.transform = "matrix3d(0.379526, 0, 0.241785, -0.000201487, 0, 0.45, 0, 0, -0.5373, 0, 0.843391, -0.000702826, -150, 0, 0, 1)"
    //------------------------------------
    slides[f].style.opacity = "0";
    slides[f].style.left = "1434px";
    slides[f].style.transform = "matrix3d(0.379526, 0, 0.241785, -0.000201487, 0, 0.45, 0, 0, -0.5373, 0, 0.843391, -0.000702826, -150, 0, 0, 1)"
  }

  render() {
    const {click}=this.state;
    console.log('render')
    return (
      <div className="activities">
        {/* <ul className="slideshow-container" onMouseDown={this.mousedown} onMouseUp={this.mouseup} onMouseMove={(e) => this.mousemove(e)}> */}
        <ul className="slideshow-container" >

          {ActivitiesData.map((item, idx) =>
            <ActivitiesList
              key={idx}
              url={item.url}
              index={idx}
            />
          )}


        </ul>
        <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>

      </div>

    )
  }
}

export default Activities;

//  class Activities extends Component {
//    constructor() {
//      super();
//      this.state = {

//      }
//    }
//    componentDidMount=()=>{

//  this.showSlides(slideIndex);
//    }
//    currentSlide(n) {
//      console.log('currentSlide',slideIndex)
//      this.showSlides(slideIndex = n);
//    }
//    plusSlides = (n) => {
//      console.log('plusSlides',slideIndex)
//      this.showSlides(slideIndex += n);
//    }
//    showSlides = (n) => {

//      var i;

//      var slides = document.getElementsByClassName("mySlides");
//      console.log('showSlides', slideIndex);
//      var dots = document.getElementsByClassName("dot");
//      if (n > slides.length) { slideIndex = 1 }
//      if (n < 1) { slideIndex = slides.length }
//      for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//      }
//      for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//      }
//      slides[slideIndex - 1].style.display = "block";
//      dots[slideIndex - 1].className += " active";
//    }

//    render() {
//      console.log('render',slideIndex)
//      return (
//        <div className="activities">
//          <div className="slideshow-container">

//            <div className="mySlides fade">
//              <div className="numbertext">1 / 6</div>
//              <img className="mySlidesImage" src="https:img4.thuthuatphanmem.vn/uploads/2019/12/09/anh-dep-tinh-yeu-hoat-hinh-3d_040507069.jpg" style={{ width: '100%' }} />
//              <div className="text">Caption Text</div>
//            </div>

//            <div className="mySlides fade">
//              <div className="numbertext">2 / 6</div>
//              <img className="mySlidesImage" src="https:images.foody.vn/BlogsContents/j_vlrd.jpg" style={{ width: '100%' }} />
//              <div className="text">Caption Two</div>
//            </div>

//            <div className="mySlides fade">
//              <div className="numbertext">3 / 6</div>
//              <img className="mySlidesImage" src="https:wall.vn/wp-content/uploads/2019/11/hinh-anh-canh-dong-hoa-48.jpg" style={{ width: '100%' }} />
//              <div className="text">Caption Three</div>
//            </div>
//            <div className="mySlides fade">
//              <div className="numbertext">4 / 6</div>
//              <img className="mySlidesImage" src="https:img4.thuthuatphanmem.vn/uploads/2019/12/09/anh-dep-tinh-yeu-hoat-hinh-3d_040507069.jpg" style={{ width: '100%' }} />
//              <div className="text">Caption Text</div>
//            </div>

//            <div className="mySlides fade">
//              <div className="numbertext">5 / 6</div>
//              <img className="mySlidesImage" src="https:images.foody.vn/BlogsContents/j_vlrd.jpg" style={{ width: '100%' }} />
//              <div className="text">Caption Two</div>
//            </div>

//            <div className="mySlides fade">
//              <div className="numbertext">6 / 6</div>
//              <img className="mySlidesImage" src="https:wall.vn/wp-content/uploads/2019/11/hinh-anh-canh-dong-hoa-48.jpg" style={{ width: '100%' }} />
//              <div className="text">Caption Three</div>
//            </div>


//            <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
//            <a className="next" onClick={()=>this.plusSlides(1)}>&#10095;</a>

//          </div>
//          <div style={{ textAlign: 'center' }}>
//            <span className="dot" onClick={()=>this.currentSlide(1)}></span>
//            <span className="dot" onClick={()=>this.currentSlide(2)}></span>
//            <span className="dot" onClick={()=>this.currentSlide(3)}></span>
//            <span className="dot" onClick={()=>this.currentSlide(4)}></span>
//            <span className="dot" onClick={()=>this.currentSlide(5)}></span>
//            <span className="dot" onClick={()=>this.currentSlide(6)}></span>
//          </div>

//        </div>

//      )
//    }
//  }
