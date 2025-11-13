import { Plus } from "lucide-react";
import "./FeedHeader.css";

function FeedHeader({
  supportedLanguages,
  selectedLanguage,
  onLanguageChange,
  onAddPostClick,
}) {
  return (
    <div className="feed-header">
      <div className="header-title-button-area">
        <h1 className="feed-title">Home</h1>
        <button className="add-button" onClick={onAddPostClick}>
          <Plus size={24} />
        </button>
      </div>
      <div className="language-tabs">
        {supportedLanguages.map((language) => (
          <button
            key={language}
            className={`language-tab ${
              selectedLanguage === language ? "active" : ""
            }`}
            onClick={() => onLanguageChange(language)}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeedHeader;
