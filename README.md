# **Car Brands**
This project is a REST API and its objectives are to access the JSON file "car-list.json" and return:

- The name of the brand with the most models.-
- The name of the brand with the least models.
- Receive a number X as a parameter and return the X brands with the most models, followed by the quantity, in descending order.
- Receive a number X as a parameter and return the X brands with the least models, followed by the quantity, in ascending order.
- Receive the name of a brand as a parameter and return the list of its models. If the name of the brand entered does not exist in the JSON file, an empty array will be returned. The search disregards differences between upper and lower case characters.

## **Installation**
To install the required dependencies, run the following command in your terminal:

npm install

## **Usage**
After installing the dependencies, to use Car Brands, follow the steps below:

To run the project, run the following command in your terminal:

node index.js

Then, use an endpoint tool such as Insomnia or Postman to test the API routes.

The following routes are available:
GET /brands/moreModels - Returns the brand with the most models.
GET /brands/lessModels - Returns the brand with the least models.
GET /brands/listMoreModels/:X - Returns the X brands with the most models, in descending order.
GET /brands/listLessModels/:X - Returns the X brands with the least models, in ascending order.
POST /brands/listModels - Returns the list of models for a specified brand.

## **Project Status**
This project is currently active and under continuous development.

## **License**
This project is licensed under the MIT License - see the LICENSE file for more details.

## **Acknowledgements**
Thanks to all the contributors who made this project possible.

## **Contact**
If you have any questions or suggestions about this project, feel free to contact us by email: cleissongomes777@gmail.com.
