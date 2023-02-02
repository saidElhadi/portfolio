import { memo, useCallback, useContext, useState } from "react";
import { WatsonContext } from "../context/Context";

const colors = [
  { id: 1, name: "blue", code: "00A3E1" },
  { id: 2, name: "red", code: "E82A2A" },
  { id: 3, name: "green", code: "6ac045" },
  { id: 4, name: "yellow", code: "D1A71D" },
  { id: 5, name: "pink", code: "FF1493" },
  { id: 6, name: "purple", code: "5078FF" },
];

const ThemeOptions = () => {
  const { pageAnimationChange, colorChange } = useContext(WatsonContext);
  const [toggle, setToggle] = useState(false);
  const selectAnimation = useCallback((e) => {
    let value = Number(e.target.value);
    pageAnimationChange(value);
  }, []);

  const changeThemeColor = useCallback((e, color) => {
    e.preventDefault();
    colorChange(color);
  }, []);

  return (
    <div className={`theme-options dark ${toggle ? "active" : ""}`}>
      <div className="toggle-btn" onClick={() => setToggle(!toggle)}>
        <span>
          <i className="fas fa-cog" />
        </span>
      </div>
      <div className="theme-menu">
        <div className="page-transitions">
          <h4>Page Animation</h4>
          <select
            className="demo-select form-control"
            id="anim-type"
            onChange={(e) => selectAnimation(e)}
          >
            <option>Choose</option>
            {[...Array(48)].map((x, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="theme-color">
          <h4 className="mt-20">Colors</h4>
          <ul>
            {colors.map((color, i) => (
              <li key={color.id} className="mx-1">
                <a
                  onClick={(e) => changeThemeColor(e, color.name)}
                  href="#"
                  style={{ backgroundColor: `#${color.code}` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default memo(ThemeOptions);
