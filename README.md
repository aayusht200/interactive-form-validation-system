# Form Validation Project

A responsive client-side form validation project built with **HTML, CSS,
and JavaScript**, focusing on clean UI feedback, custom validation
rules, and real-time error handling.

## 📌 Features

-   Custom validation (no browser defaults)
-   Live input validation on every keystroke
-   Smooth error message transitions (opacity + visibility)
-   Green/red input borders based on validation state
-   Confirm Password stays disabled until Password is valid
-   Full validation check on submit

## 📂 Tech Stack

-   **HTML5**
-   **CSS3 (custom variables, transitions)**
-   **JavaScript (DOM manipulation, validation logic)**

## 🔎 Validated Fields

-   **Email** --- standard email format\
-   **Country** --- only letters and basic punctuation\
-   **Postal Code** --- 6 digits, cannot start with 0\
-   **Password** --- uppercase, lowercase, number, special char, 8+
    length\
-   **Confirm Password** --- must match password

## 🎨 UI Behavior

-   `.input-valid` → green border\
-   `.input-invalid` → red border\
-   `.error-show` and `.error-hide` control smooth error visibility

## 🚀 Usage

Open `index.html` in any browser --- no build tools needed.
