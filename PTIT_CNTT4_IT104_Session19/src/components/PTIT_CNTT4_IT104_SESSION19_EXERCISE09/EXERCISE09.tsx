import React, { useState } from 'react'
import "./EXERCISE09.css"

type Language = {
    language: "en" | "vi",
    text: string
}
export default function EXERCISE09() {
    const [currentLanguage, setCurrentLanguage] = useState<"en" | "vi">("vi")

    const languageData: Language[] = [
        { language: "vi", text: "Xin Chào!" },
        { language: "en", text: "Hello!" }
    ]

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentLanguage(event.target.value as "en" | "vi")
    }

    const getCurrentText = () => {
        const current = languageData.find(item => item.language === currentLanguage)
        return current ? current.text : ""
    }

    return (
        <div className="lang-container">
            <div className="lang-select">
                <span>
                    Ngôn ngữ hiện tại:
                    <select
                        name="language"
                        id="languageSelect"
                        value={currentLanguage}
                        onChange={changeLanguage}
                        className="lang-dropdown"
                    >
                        <option value="vi">Tiếng Việt</option>
                        <option value="en">English</option>
                    </select>
                </span>
            </div>

            <div className="lang-content">
                <p className="lang-text">{getCurrentText()}</p>
            </div>
        </div>
    )
}
