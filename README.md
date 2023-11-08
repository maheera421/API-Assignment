# Recipes API Client

This repository contains a web application for managing recipes. It allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of recipes. The application is built using HTML, JavaScript, and Bootstrap for styling. It communicates with a remote API to retrieve and manipulate recipe data.

## Usage

The application provides the following features:

- **View Recipes**: The application loads and displays a list of recipes from the remote API. Each recipe is shown with a title, details, and buttons for editing and deleting.

- **Add Recipe**: You can add a new recipe by clicking the "Add Recipe" button. This will open a modal dialog where you can enter the title and details for the new recipe. Click the "Add Recipe" button in the modal to add the recipe to the list.

- **Edit Recipe**: To edit an existing recipe, click the "Edit" button next to the recipe you want to update. This will open a modal dialog with fields for editing the title and details. After making your changes, click the "Update" button to save the changes.

- **Delete Recipe**: If you wish to delete a recipe, click the "Delete" button next to the recipe you want to remove. This action will permanently delete the recipe from the list.

## API Integration

The application communicates with a remote API to perform CRUD operations on recipes. It uses the [Usman's Fake API](https://usman-fake-api.herokuapp.com/api/recipes) for demonstration purposes. You can replace this API with your own backend API by updating the URL in the JavaScript code.

## Dependencies

The application utilizes the following external libraries and resources:

- [jQuery](https://jquery.com/): jQuery is used for handling DOM manipulation and making AJAX requests to the API.

- [Bootstrap](https://getbootstrap.com/): Bootstrap is used for styling the user interface and creating modal dialogs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This application is created for educational and demonstration purposes. It's a simple example of how to build a web client that interacts with a RESTful API using HTML, JavaScript, and Bootstrap. The code is provided as-is, and you are encouraged to modify it to suit your specific needs. If you have any questions or feedback, please feel free to reach out.

Enjoy managing your recipes with this simple web application!
