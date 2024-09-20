export default function Modules() {
  return (
    <div>
      <button id="wd-collapse-all">Collapse All</button>
      <button id="wd-view-progress">View Progress</button>
      <select id="wd-publish-dropdown">
        <option value="publish-all">Publish All</option>
        <option value="publish-some">Publish Some</option>
        <option value="publish-none">Publish None</option>
      </select>
      <button id="wd-plus-module">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">JavaScript Functions</li>
                <li className="wd-content-item">
                  Understand how to define and call functions
                </li>
                <li className="wd-content-item">
                  Learn about parameters and return values
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML</li>
                <li className="wd-content-item">
                  Understand basic HTML structure
                </li>
                <li className="wd-content-item">
                  Learn how to create HTML elements
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 4</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">
                  Learn how to style HTML elements
                </li>
                <li className="wd-content-item">
                  Understand CSS properties and selectors
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 5</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to JavaScript</li>
                <li className="wd-content-item">
                  Learn the basics of programming in JavaScript
                </li>
                <li className="wd-content-item">
                  Understand variables, data types, and operators
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 6</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">JavaScript Functions</li>
                <li className="wd-content-item">
                  Understand how to define and call functions
                </li>
                <li className="wd-content-item">
                  Learn about parameters and return values
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 7</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Working with the DOM</li>
                <li className="wd-content-item">
                  Learn how to manipulate HTML elements with JavaScript
                </li>
                <li className="wd-content-item">
                  Understand event handling in JavaScript
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 8</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Flexbox and Grid</li>
                <li className="wd-content-item">
                  Learn how to create responsive layouts
                </li>
                <li className="wd-content-item">
                  Understand the principles of web layout design
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
