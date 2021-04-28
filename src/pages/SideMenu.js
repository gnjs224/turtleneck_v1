import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "turtleneck",
    text: "거북목",
    value: "turtleneck",
  },
  {
    key: "Oleg",
    text: "오다리",
    value: "Oleg",
  },
];

const SideMenu = () => (
  <div class="menubar">
    <Dropdown placeholder="종류" fluid selection black options={options} />
  </div>
);

export default SideMenu;
