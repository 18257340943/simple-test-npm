// import $ from "jquery";
// import React from "react";

// // import ReactDOM from "react-dom";
// import { Button } from "antd";
// const { resolve } = require("path");
// // // import { PlusOutline } from "@ant-design/icons";
// console.log(resolve, "resolve");

// const TestComp = () => {
//   return (
//     <div>
//       {/* <PlusOutline /> */}
//       <Button>button</Button>
//     </div>
//   );
// };

// export default TestComp;
// console.log(1111);

// export default {
//   TestComp,
// };
// ReactDOM.render(<TestComp />, document.body);

// 深度模块化

// import main from "./main";
// console.log(main.a);

// export default main;

// import { a } from "./a";

// export default a;

import Man from "./Man";

new Man("KainStar").say();
