# Fridge Manager

Simple list app in which a client can input and record edible products and their expiration date. The app takes the given expiration date of a product and performs a simple calculation, 
giving back the number of days remaining until the said product will expire. The app does a simple sort, putting the items with the lowest numbers of days remaining at the top. 

The main idea behind the app is to allow the client to keep track of edible products, in order to minimize the amount of wasted food, and - most importantly - to avoid the situation in which a person takes a peek behind that one, large lettuce, and finds out an already week-old chunk of cheese (not saying that it happened to me multiple times).
Also, a secondary reason for the app's creation is to help me learn React. 

In its current state the project is somewhat crude, though expanding it with the functionality of a Shopping List is an obvious next step. 
Reworking the UI is also on the to-do list, so that the user wouldn't need to input the products' manually. Adding a database of products, along with the icons for every product could be beneficial for the user. 
Adding the users and security measures are on a to-do list, since currently the app is intended mostly for local network use. 

Even further along the road, there's also the idea of implementing the barcode scanner into the app.

## Technologies

Backend of the project has been created with Python 3.9.1, as well as:

* Django 3.1.5
* Django REST Framework 3.12.2
* Psycopg2 2.8.6 and PostgreSQL 13.0

Frontend is built with javascript and:

* React 17.0.1
* Axios 0.21.1
* Material-UI core 4.11.3, and Material-UI Icons 4.11.2

## Launch

Listed Python and JS packages are required. By default the backend uses the PostgreSQL adapter for django.
Aside from setting up the database connection, there's not much to it. 

## Project status

Core functionality is operational, additional features are in development.

## License
This project is licensed under the terms of the MIT license.
