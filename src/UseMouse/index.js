import React from "react";
// import Mouse from "../Component/Mouse";
import mouseImg from "../access/image/wink-.png";
import withMouse from "../withMouse";
import "./index.css";
// class UseMouse extends React.Component {
//   render() {
//     return (
//       <div>
//         <Mouse>
//           {(mouse) => {
//             return (
//               <div>
//                 <p>
//                   x坐标:{mouse.x}
//                   Y坐标:{mouse.y}
//                 </p>
//                 <img
//                   src={mouseImg}
//                   alt="错误的"
//                   style={{
//                     left: mouse.x - 25,
//                     top: mouse.y - 25,
//                   }}
//                 />
//               </div>
//             );
//           }}
//         </Mouse>
//       </div>
//     );
//   }
// }
// 使用高阶组件
const Position = (props) => (
  <p>
    鼠标位置: (x{props.x} --y:{props.y})
  </p>
);

const PositionCat = (props) => (
  <img
    src={mouseImg}
    alt="错误的"
    style={{
      left: props.x - 25,
      top: props.y - 25,
    }}
  />
);

const UseMouse = withMouse(PositionCat);

export default UseMouse;
