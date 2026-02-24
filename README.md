React Product Card Project

This is a simple React application built with Create React App. It demonstrates how to create reusable components, use JSON data, and display a product card with React and react-bootstrap.

Project Structure
react-product-card/
├── public/
├── src/
│   ├── App.js
│   ├── product.js
│   ├── Name.js
│   ├── Price.js
│   ├── Description.js
│   ├── Image.js
│   └── index.js
├── package.json
└── README.md
Features

Reusable Components: Four components (Name.js, Price.js, Description.js, Image.js) display different parts of a product.

JSON Data: Product data is stored in product.js as a JSON object and imported into all components.

Product Card: Components are combined into a card using react-bootstrap.

Personalized Greeting: Displays a message below the card:

If a first name is provided: Hello, [Your Name]! along with an image.

If no name is provided: Hello, there!

Custom Styling: Encouraged to experiment with CSS or Bootstrap styling for a visually appealing card.

Installation

Clone the repository:

git clone <repository-url>

Navigate to the project folder:

cd react-product-card

Install dependencies:

npm install

Start the development server:

npm start

Your app should now be running at http://localhost:3000
.

Usage

Open product.js to edit the product details.

Update the first name variable in App.js to change the greeting message.

Modify component styling or layout using CSS or react-bootstrap classes.

Technologies Used

React

Create React App

React Bootstrap

Contributing

Contributions are welcome! Feel free to improve styling, add new features, or refactor components for better reusability.

License

This project is open source and available under the MIT License.