# Matatu Route Finder

## Overview

Matatu Route Finder is a web application built with GeoDjango (backend) and React (frontend) that helps users easily find matatus (public transport vehicles in Kenya) that serve their desired routes. The application leverages geospatial data to provide accurate and efficient route information, making it easier for commuters to plan their journeys.

This project utilizes the matatu route dataset provided by [Digital Matatus](https://www.digitalmatatus.com/), a collaborative project that mapped Nairobi's public transport system. We extend our gratitude to Digital Matatus for making this valuable dataset available to the public.

---

## Features

- **Route Search**: Users can search for matatus that serve specific routes by entering their origin and destination.
- **Interactive Map**: An interactive map displays the routes and matatu stops, providing a visual representation of the available options.
- **Route Details**: Detailed information about each matatu route, including stops, frequency, and estimated travel time.
- **User-Friendly Interface**: A clean and intuitive interface built with React for seamless navigation and usability.

---

## Technologies Used

### Backend
- **GeoDjango**: A geographic web framework that extends Django to support geospatial data.
- **PostgreSQL with PostGIS**: A powerful spatial database used to store and query geospatial data.
- **Django REST Framework**: For building the API endpoints that serve data to the frontend.

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Leaflet**: A JavaScript library for interactive maps.
- **Axios**: For making API requests to the backend.

### Data Source
- **Digital Matatus Dataset**: The dataset used in this project is provided by [Digital Matatus](https://www.digitalmatatus.com/). Special thanks to their team for their efforts in mapping Nairobi's public transport system.

---

## Installation

### Prerequisites
- Python 3.x
- Node.js
- PostgreSQL with PostGIS extension
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/matatu-route-finder.git
   cd matatu-route-finder/backend
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Set up the PostgreSQL database and configure the connection in `settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.contrib.gis.db.backends.postgis',
           'NAME': 'your_db_name',
           'USER': 'your_db_user',
           'PASSWORD': 'your_db_password',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```

4. Run migrations and load the dataset:
   ```bash
   python manage.py migrate
   python manage.py loaddata path/to/digitalmatatus/dataset.json
   ```

5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000` to access the application.

---

## Usage
1. Enter your origin and destination in the search bar.
2. View the list of matatus that serve your route.
3. Click on a matatu to see its route on the map and detailed information.

---

## Contributing
We welcome contributions! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Submit a pull request with a detailed description of your changes.

---

## Credits
- **Dataset**: [Digital Matatus](https://www.digitalmatatus.com/) for providing the matatu route dataset.
- **GeoDjango**: For enabling geospatial functionality in Django.
- **React**: For building the user interface.

---

## License
This project is licensed under the MIT License.

---

## Contact
For questions or feedback, please reach out to mwangiruoya@gmail.com or open an issue on GitHub.

---

Happy commuting! 🚌
