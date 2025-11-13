import { useState } from "react";
import FeedHeader from "./FeedHeader";
import "./FeedPage.css";

import Modal from "../../components/Modal.jsx";

function FeedPage() {
  const supportedLanguages = ["English", "Spanish", "French", "German"];
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isAddingPostModalOpen, setIsAddingPostModalOpen] = useState(false);
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="feed-page">
      <Modal
        isOpen={isAddingPostModalOpen}
        onClose={() => setIsAddingPostModalOpen(false)}
      >
        <h1>Add a New Post</h1>
      </Modal>
      <FeedHeader
        supportedLanguages={supportedLanguages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        onAddPostClick={() => setIsAddingPostModalOpen(true)}
      />
    </div>
  );
}

export default FeedPage;
