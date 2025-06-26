// Tasks.js
import '../css/Tasks.css'; // Import the CSS for the Tasks page
// Tasks.js
export default function Portfolio() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <span className="workspace-title">MY</span>
          <svg className="dropdown-arrow" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2 4l4 4 4-4H2z" />
          </svg>
        </div>
        <div className="header-right">
          <button className="header-btn">
            <span>⚡</span> Integrate
          </button>
          <button className="header-btn">💬</button>
          <div className="owner-avatar">👤</div>
          <button className="header-btn invite-btn">Invite / 1</button>
          <button className="header-btn">⋯</button>
        </div>
      </header>

      <main className="main-content">
        <div className="table-header">
          <div className="table-title">
            <span>Main table</span>
            <span>⋯</span>
            <span>+</span>
          </div>
          <div className="controls">
            <button className="new-task-btn">
              <span>+</span> New task
            </button>
            <button className="control-btn">
              <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="Search Button" />Search
            </button>
            <button className="control-btn">
              <img src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="Person Button" />Person
            </button>
            
            <button className="control-btn">
              <img src="https://img.icons8.com/?size=100&id=ErgBpxkvZhKX&format=png&color=000000" alt="Filter Button" /> Filter
            </button>
            <button className="control-btn">
              <img src="https://img.icons8.com/?size=100&id=9d3LRh30oaAP&format=png&color=000000" alt="Sort Button" /> Sort
            </button>
            <button className="control-btn">
              <img src="https://img.icons8.com/?size=100&id=4y6r43dyjbzw&format=png&color=000000" alt="hide Button" /> Hide
              {/* https://img.icons8.com/?size=100&id=0ciqibcg6iLl&format=png&color=000000 */}
            </button>
            <button className="control-btn">
              <img src="https://img.icons8.com/?size=100&id=nW3o1ItakKJm&format=png&color=000000" alt="group Button" /> Group by
            </button>
            <button className="control-btn">⋯</button>
          </div>
        </div>

        <div className="table-container">
          <div className="section">
            <div className="section-header">
              <svg className="expand-icon" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 2l4 4-4 4V2z" />
              </svg>
              To-Do
            </div>

            <div className="table-row">
              <input type="checkbox" className="checkbox" />
              <div className="task-name">Task 01</div>
              <div className="owner-avatar">👤</div>
              <div className="status working">Working on it</div>
              <div className="due-date overdue">🔴 Jun 21</div>
              <div className="priority low">Low</div>
              <div className="notes">Action items</div>
              <div className="add-icon">+</div>
            </div>

            <div className="table-row">
              <input type="checkbox" className="checkbox" />
              <div className="task-name">Task 02</div>
              <div className="owner-avatar empty">👤</div>
              <div className="status done">Done</div>
              <div className="due-date">✓ Jun 22</div>
              <div className="priority high">High</div>
              <div className="notes">Meeting notes</div>
              <div className="add-icon">+</div>
            </div>

            <div className="table-row">
              <input type="checkbox" className="checkbox" />
              <div className="task-name">Task 03</div>
              <div className="owner-avatar empty">👤</div>
              <div className="status stuck">Stuck</div>
              <div className="due-date">⚫ Jun 23</div>
              <div className="priority medium">Medium</div>
              <div className="notes">Other</div>
              <div className="add-icon">+</div>
            </div>

            <div className="add-task-row">
              <span>+</span> Add task
            </div>
          </div>

          <div className="section completed">
            <div className="section-header completed">
              <svg className="expand-icon" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 2l4 4-4 4V2z" />
              </svg>
              Completed
            </div>

            <div className="add-task-row">
              <span>+</span> Add task
            </div>
          </div>
        </div>

        <div className="add-group">
          <span>+</span> Add new group
        </div>
      </main>

      <button className="help-btn">FAQ</button>
    </>
  );
}
  