// import { useEffect, useRef } from "react";
// import "../App.scss";
// import gsap, { Power3 } from "gsap";

// import imgGirl from "../images/girl.webp";
// import imgBoy from "../images/boy.webp";
// import arrow from "../images/arrow-right.svg";

// function Herogsap() {
//   //instantiating a timeline instance
//   let tl = gsap.timeline();

//   //using ref
//   let app = useRef(null);
//   let images = useRef(null);
//   let content = useRef(null);

//   useEffect(() => {
//     //getting a handle on the element in images
//     const girlImage = images.firstElementChild;
//     const boyImage = images.lastElementChild;

//     //Content vars
//     const headlineFirst = content.children[0].children[0];
//     const headlineSecond = headlineFirst.nextSibling;
//     const headlineThird = headlineSecond.nextSibling;
//     const contentP = content.children[1];
//     const contentButton = content.children[2];

//     //Animations
//     tl.to(app, { duration: 0, css: { visibility: "visible" } });
//     tl.from(girlImage, {
//       duration: 1.2,
//       y: 1280,
//       ease: Power3.easeOut,
//       clearProps: "y",
//       // onComplete: function () {
//       //   gsap.set(this.targets(), { clearProps: "all" });
//       // },
//     }).from(girlImage.firstElementChild, {
//       duration: 2,
//       scale: 1.6,
//       ease: Power3.easeOut,
//       delay: 0.2,
//       clearProps: "scale",
//     });

//     tl.from(boyImage, {
//       duration: 1.2,
//       y: 1280,
//       ease: Power3.easeOut,
//       delay: 0.2,
//       clearProps: "y",
//       // onComplete: function () {
//       //   gsap.set(this.targets(), { clearProps: "all" });
//       // },
//     }).from(boyImage.firstElementChild, {
//       duration: 2,
//       scale: 1.6,
//       ease: Power3.easeOut,
//       delay: 0.2,
//       clearProps: "scale",
//     });

//     tl.from(
//       [headlineFirst.children, headlineSecond.children, headlineThird.children],
//       {
//         duration: 1,
//         stagger: {
//           y: 44,
//           ease: Power3.easeOut,
//           delay: 0.8,
//         },
//         delay: 0.15,
//         clearProps: "scale",
//       }
//     );
//   }, []);

//   return (
//     <div className="hero" ref={(el) => (app = el)}>
//       <div className="container">
//         <div className="hero-inner">
//           <div className="hero-content">
//             <div className="hero-content-inner" ref={(el) => (content = el)}>
//               <h1>
//                 <div className="hero-content-line">
//                   <div className="hero-content-line-inner">
//                     Relieving the burden
//                   </div>
//                 </div>
//                 <div className="hero-content-line">
//                   <div className="hero-content-line-inner">
//                     of disease caused
//                   </div>
//                 </div>
//                 <div className="hero-content-line">
//                   <div className="hero-content-line-inner">by behaviors.</div>
//                 </div>
//               </h1>
//               <p>
//                 Better treats serious cardiometabolic diseases to transform
//                 lives and reduce healthcare utilization through the use of
//                 digital therapeutics.
//               </p>
//               <div className="btn-row">
//                 <button className="explore-button">
//                   Explore
//                   <div className="arrow-icon">
//                     <img src={arrow} alt="row" />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="hero-images">
//             <div className="hero-images-inner" ref={(el) => (images = el)}>
//               <div className="hero-image girl">
//                 <img src={imgGirl} alt="girl" />
//               </div>
//               <div className="hero-image boy">
//                 <img src={imgBoy} alt="boy" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Herogsap;
