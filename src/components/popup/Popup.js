import "./styles/popup.css";

function Popup() {
  return (
    <div className="popup">
      <div>
        <h1 className="popup-header">Popup Page</h1>
      </div>
      <div>
        <button className="home-btn" onClick={get_home_tab}>
          <span>Go To Home Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ marginLeft: ".5rem" }}
          >
            <path
              fill-rule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function get_home_tab() {
  chrome.tabs.query(
    {
      url: "chrome-extension://" + chrome.runtime.id + "/home.html",
      currentWindow: true,
    },
    function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.highlight({
          windowId: tabs[0].windowId,
          tabs: tabs[0].index,
        });
        chrome.tabs.reload(tabs[0].id);
      } else {
        chrome.tabs.create({ url: chrome.runtime.getURL("home.html") });
      }
    }
  );
}

export default Popup;
